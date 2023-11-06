import "./CertificatesTable.scss";
import axios from "../../api";
import summarizeName from '../../helpers/summarizeName';
import summarizeTime from '../../helpers/summarizeTime';
import getFormattedTime from "../../helpers/getFormattedTime";
import { createStatusInstance } from '../../helpers/createStatusInstance';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLayoutEffect, useState, useEffect, useRef } from 'react';
import { Button, Loading } from '../../utils/Utils';
import DriverCertificate from "../driver-certificate/DriverCertificate";
import {BsChevronLeft, BsChevronRight} from "react-icons/bs";
import { v4 as uuidv4 } from 'uuid';
import Modal from "../modal/Modal";
import ReactToPrint from "react-to-print";
import AdrCertificate from "../adr-certificate/AdrCertificate";
import { useTranslation } from "react-i18next";

const CertificatesTable = () => {
  const {t} = useTranslation();
  const printFrame = useRef();
  const modal = useRef();
  const navigate = useNavigate();
  const {pathname } = useLocation();
  const [search, setSearch] = useState("");
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [certificateLimit, setCertificateLimit] = useState(10);
  const [certificateDataResult, setCertificateDataResult] = useState(createStatusInstance("pending", t("status.pending")));
  const [totalPageNumber, setTotalPageNumber] = useState(0);
  const [downloadData, setDownloadData] = useState(null);

  const handlePreviousPageFetching = () => {
    if(currentPageNumber > 1) {
      setCurrentPageNumber(currentPageNumber => currentPageNumber - 1);
    }
  }

  const handleNextPageFetching = () => {
    if(currentPageNumber < totalPageNumber) {
      setCurrentPageNumber(currentPageNumber => currentPageNumber + 1);
    }
  }

  useLayoutEffect(() => {

    setCertificateLimit(+new URLSearchParams(window.location.search).get("limit") || 10);
    setCurrentPageNumber(+new URLSearchParams(window.location.search).get("page") || 1);

  }, []);

  useEffect(() => {

    const urlParameters = new URLSearchParams();
    urlParameters.set("limit", certificateLimit || 10);
    urlParameters.set("page", currentPageNumber || 1);
    const searchQueries = urlParameters.toString();
    navigate(`${pathname}?${searchQueries}`);

    const controller = new AbortController();
    async function loadCertificateData() {
      try{
        setCertificateDataResult(createStatusInstance("pending", t("status.pending")))
        const endpoint = pathname.split("/")[3].replace("manage-", "")
        if(pathname.includes(endpoint)){
         const response = await axios.get(`/${endpoint.replace(/-/g, "")}/all?limit=${certificateLimit}&page=${currentPageNumber}`);
         if(response.status === 200){
          setCertificateDataResult(createStatusInstance("success", t("status.success"), response.data))
           setTotalPageNumber(response.data.totalPage);
         }
         else{
          throw new Error("No certificates found or something went wrong")
         }
        }
      }
      catch(error){
        setCertificateDataResult(createStatusInstance("error", t("status.error")))
      }
    }
    
    loadCertificateData();

    return () => controller.abort()

  }, [currentPageNumber, certificateLimit, pathname])

  const identifySearchValueType = (search) => {
    if(/\d/.test(search)){
      return `id=${search}`;
    }
    else{
      return `name=${search}`;
    }
  }

  useEffect(() => {
    const type = pathname.split("/")[3].replace(/(manage-driver-)/g, "");
    async function loadSearchResults(){
      try{
        const response = await axios.get(`/search/search-by-all?${identifySearchValueType(search)}&type=${type}&limit=${certificateLimit}&page=${currentPageNumber}`);
         if(response.data?.allCertificates.length > 0){
          setCertificateDataResult(createStatusInstance("success", t("status.success"), response.data))
         }else{
          throw new Error("We could not find any certificates")
         }
      }
      catch(error){
        setCertificateDataResult(createStatusInstance("error", t("status.error")))
      }
    }
    loadSearchResults();
  }, [search, currentPageNumber, certificateLimit])


  const handleDeleteCertificate = (id) => {
      try{
      axios.patch(`/${pathname.split("/")[3].replace("manage-", "").replace(/-/g, "")}/delete/${id}`)
        .then(response => {
          if(response.status === 200){
            modal.current.close()
          }
          setCertificateDataResult(createStatusInstance("success", t("status.success")))
        })
    }
    catch(err){
      console.log(err )
    }
  }
 
  return (
    <div className='certificates'>
      <div className='certificates__filters'>
        <form className='certificates__filters-form'>
          <div className='certificates__filters-search'>
            <label htmlFor="search-sertificate">Search certificate by ID or Name</label>
            <input type="text" id='search-sertificate' value={search} onChange={e => setSearch(e.target.value)}/>
          </div>
        </form>
        <div className='certificates__filters-pagination'>
          <select disabled={certificateDataResult.loading} value={certificateLimit} className='certificates__filters-pagination-limit' onChange={(e) => setCertificateLimit(+e.target.value)}>
            {
              new Array(10).fill("").map((item, index) => 
                <option key={uuidv4()} value={(index + 1) * 10}>{(index + 1) * 10}</option>
              )
            }
          </select>
          <button disabled={certificateDataResult.loading} className='certificates__filters-pagination-btn' onClick={handlePreviousPageFetching}>
            <BsChevronLeft/>
          </button>
          <p className='certificates__filters-pagination-number'>{currentPageNumber}</p>
          <button disabled={certificateDataResult.loading} className='certificates__filters-pagination-btn' onClick={handleNextPageFetching}>
            <BsChevronRight/>
          </button>
        </div>
      </div>
       {!certificateDataResult.loading ?
        <table className='certificates__table'>
          <thead>
            <tr className='table__header-row'>
              <th>ID</th>
              <th>F.L.M</th>
              <th>DATE</th>
              <th>DOWNLOAD</th>
              <th>EDIT</th>
              <th>DELETE</th>
            </tr>
          </thead>
          <tbody>
            {certificateDataResult.data &&
              certificateDataResult.data.allCertificates.map((certificate, index) => {
                const time = summarizeTime(certificate.from || certificate.givenDate, certificate.to);
                return (
                <tr className='certificates__table-row' key={certificate._id}>
                  <td>{certificate.id}</td>
                  <td>{summarizeName(certificate.name, certificate.surname)}</td>
                  <td>{time.from + " / " + time.to}</td>
                  <td>{certificate.id !== "Mavjud emas" && <ReactToPrint
                    trigger={
                      () => <button type="text" class="success-button" onFocus={()=> setDownloadData(certificate)} >Download</button>
                    }
                    content={() => printFrame.current}
                  />}</td>
                  <td>{certificate.id !== "Mavjud emas" &&  <Button  text="Edit" appearance="warning" disabled={true} loading={false}/>}</td>
                  <Modal ref={modal} title="Delete this certificate?" text="Are you sure you want to delete this certificate?" btn={{text: "Delete", appearance: "danger", clickHandler: () => handleDeleteCertificate(certificate._id)}}/>
                  <td>{certificate.id !== "Mavjud emas" && <Button text="Delete" appearance="danger" clickHandler={() => modal.current.openModal()} loading={false}/>}</td>
                </tr>)
              })}
          </tbody>
      </table>:
        <div className='loading-table-overlay'>
          <Loading />
        </div>
        }
       <div style={{visibility: "hidden", width: 0, height: 0}}>
       {downloadData &&
       <>
        {downloadData?.id.startsWith("M") || downloadData?.id.startsWith("D") ?
          <DriverCertificate
          id={downloadData.id}
          firstname={downloadData.name}
          lastname={downloadData.surname}
          parentname={downloadData.middlename}
          from={downloadData.from}
          to={downloadData.to}
          ref={printFrame}
        />
         :
         <AdrCertificate
            id={downloadData.id}
            lastname={downloadData.surname}
            firstname={downloadData.name}
            to={downloadData.to}
            birthdate={downloadData.birthDate}
            givenDate={downloadData.givenDate}
            ref={printFrame}
        />}
       </>} 
       </div>
    </div>
  )
}

export default CertificatesTable