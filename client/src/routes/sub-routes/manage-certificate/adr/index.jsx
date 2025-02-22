import React, { useEffect } from "react";
import DocumentsTable from "@/components/table";
import { useLocation } from "react-router-dom";
import { generateDocumentType } from "@helpers/document-type";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdrDocumentsThunk } from "@thunks/documents-thunks";
import { getAdrDocuments, getDocumentsLoading } from "@selectors/documents";

const Adr = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const docType = generateDocumentType(pathname);
  const data = useSelector(getAdrDocuments);
  const loading = useSelector(getDocumentsLoading);

  useEffect(() => {
    dispatch(fetchAdrDocumentsThunk({ endpoint: docType.type }));
  }, [pathname]);

  return (
    <div>
      <DocumentsTable data={data} loading={loading} type={docType.type} />
    </div>
  );
};

export default Adr;
