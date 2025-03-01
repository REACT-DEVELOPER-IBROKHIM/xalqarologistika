import { useEffect, useState } from "react";
import "./Search.scss";
import { useParams } from "react-router-dom";
import { fetchSingleDocumentByIdThunk } from "@/redux/thunks/single-document-thunk";
import {
  getSingleDocument,
  getSingleDocumentLoading,
} from "@/redux/selectors/single-document";
import { Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import DriverCertificate from "@/components/documents/driver";
import AdrCertificate from "@/components/documents/adr";
import { Watermark } from "antd";
import { checkCertificateStatus } from "@/helpers/check-certificate-status";

const Search = () => {
  const [isCertificateValid, setIsCertificateValid] = useState(null);
  const dispatch = useDispatch();
  const document = useSelector(getSingleDocument);
  const loading = useSelector(getSingleDocumentLoading);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchSingleDocumentByIdThunk(id));
  }, []);

  useEffect(() => {
    setIsCertificateValid(checkCertificateStatus(document));
  }, [document]);

  return (
    <Watermark
      content={!isCertificateValid ? `EXPIRED` : `NAMANGANTRANS 2022`}
      gap={[10, 10]}
      font={{
        fontSize: 20,
        color: !isCertificateValid
          ? `rgba(255, 0, 0, 0.5)`
          : `rgba(0, 0, 0, 0.5)`,
      }}
    >
      <div className="search-certificate">
        {!loading && document ? (
          <div className="search-certificate__content">
            <div className={`search-wrapper`}>
              <div
                className={`w-full h-full absolute top-0 left-0 z-10 ${!isCertificateValid ? "backdrop-blur-[20px]" : ""}`}
              ></div>
              {document.id?.startsWith("D") || document.id?.startsWith("M") ? (
                <DriverCertificate document={document} type={"search"} />
              ) : (
                <AdrCertificate document={document} type={"search"} />
              )}
            </div>
          </div>
        ) : !document && !loading ? (
          <p>No data</p>
        ) : (
          <Spin tip="Loading..." />
        )}
      </div>
    </Watermark>
  );
};

export default Search;
