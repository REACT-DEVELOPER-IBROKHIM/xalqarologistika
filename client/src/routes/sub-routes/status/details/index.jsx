import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import SaveAndCheck from "../../create/save-and-check";
import { useDispatch, useSelector } from "react-redux";
import { Spin, Typography } from "antd";
import { fetchDocumentStatusDataThunk } from "@/redux/thunks/document-status";
import {
  getDocumentStatusData,
  getDocumentStatusDataLoading,
} from "@/redux/selectors";
import { ContainerOutlined } from "@ant-design/icons";

const { Title } = Typography;

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

  return (
    <div>
      {loading ? (
        <div className="w-full h-[60vh] flex items-center justify-center">
          <Spin />
        </div>
      ) : document ? (
        <SaveAndCheck
          documentType={document?.id?.startsWith("D") ? "driver" : "adr"}
          document={document}
        />
      ) : (
        <div className="text-center flex-col flex items-center justify-center p-[100px]">
          <ContainerOutlined className="text-[50px] text-[gray] mb-6" />
          <Title level={3}>Hujjat topilmadi</Title>
        </div>
      )}
    </div>
  );
};

export default Details;
