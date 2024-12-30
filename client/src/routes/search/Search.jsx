import { useState, useEffect } from "react";
import "./Search.scss"
import {  useParams } from "react-router-dom";
import { createStatusInstance } from '../../helpers/createStatusInstance';
import { useTranslation } from "react-i18next";
import axios from "../../api";
import Draft from "../draft/Draft";

const Search = () => {
    const {t} = useTranslation();
    const [certificateDataResult, setCertificateDataResult] = useState(createStatusInstance("pending", t("status.pending")));
    const {id} = useParams();
    
    useEffect(() => {
        async function loadSearchResults(){
          try{
            const response = await axios.get(`/search/?id=${id}`);
             if(response.data){
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
    }, [])
    return (
        <div className="search-certificate">
            {certificateDataResult.data && (
            <div className="search-certificate__content">
              <Draft 
                id={certificateDataResult.data.id}
                firstname={certificateDataResult.data.name}
                lastname={certificateDataResult.data.surname}
                parentname={certificateDataResult.data.middlename}
                from={certificateDataResult.data.from}
                to={certificateDataResult.data.to}
                birthdate={certificateDataResult.data.birthDate}
              />
            </div>
          )}
        </div>
    )
}

export default Search