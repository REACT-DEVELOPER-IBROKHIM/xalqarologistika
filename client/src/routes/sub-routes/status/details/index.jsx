import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import SaveAndCheck from "../../create/save-and-check";
import { useDispatch, useSelector } from "react-redux";
import { Spin } from "antd";
import { fetchDocumentStatusDataThunk } from "@/redux/thunks/document-status";
import {
  getDocumentStatusData,
  getDocumentStatusDataLoading,
} from "@/redux/selectors";

const Details = () => {
  const dispatch = useDispatch();
  const document = useSelector(getDocumentStatusData);
  const loading = useSelector(getDocumentStatusDataLoading);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(fetchDocumentStatusDataThunk(id));
    }
  }, [id]);

  console.log(document);

  return (
    <div>
      {loading ? (
        <Spin />
      ) : (
        document && (
          <SaveAndCheck
            documentType={document?.id?.startsWith("D") ? "driver" : "adr"}
            document={document}
          />
        )
      )}
    </div>
  );
};

export default Details;
