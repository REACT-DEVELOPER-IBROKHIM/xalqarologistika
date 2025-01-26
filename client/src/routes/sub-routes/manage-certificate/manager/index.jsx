import React, { useEffect } from "react";
import DocumentsTable from "@components/documents/table";
import { fetchManagerDocumentsThunk } from "@thunks/documents-thunks";
import { useDispatch, useSelector } from "react-redux";
import { getDocumentsLoading, getManagerDocuments } from "@selectors/documents";
import { generateDocumentType } from "@helpers/document-type";
import { useLocation } from "react-router-dom";

const Manager = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const docType = generateDocumentType(pathname);
  const data = useSelector(getManagerDocuments);
  const loading = useSelector(getDocumentsLoading);

  useEffect(() => {
    dispatch(fetchManagerDocumentsThunk({ endpoint: docType.type }));
  }, [pathname]);

  return (
    <div>
      <DocumentsTable data={data} loading={loading} type={docType.type} />
    </div>
  );
};

export default Manager;
