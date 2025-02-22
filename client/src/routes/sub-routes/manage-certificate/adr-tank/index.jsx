import React, { useEffect } from "react";
import { fetchAdrTankDocumentsThunk } from "@thunks/documents-thunks";
import { getAdrTankDocuments, getDocumentsLoading } from "@selectors/documents";
import { generateDocumentType } from "@helpers/document-type";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import DocumentsTable from "@/components/table";

const AdrTank = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const docType = generateDocumentType(pathname);
  const data = useSelector(getAdrTankDocuments);
  const loading = useSelector(getDocumentsLoading);

  useEffect(() => {
    dispatch(fetchAdrTankDocumentsThunk({ endpoint: docType.type }));
  }, [pathname]);

  return (
    <div>
      <DocumentsTable data={data} loading={loading} type={docType.type} />
    </div>
  );
};

export default AdrTank;
