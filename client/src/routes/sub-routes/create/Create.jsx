import "./Create.scss";
import "react-datepicker/dist/react-datepicker.css";
import Typography from "antd/es/typography/Typography";
import { Button, Select } from "antd";
import { Steps } from "antd";
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  EditOutlined,
  SaveOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import { convertToValueLabel } from "@/helpers/formItems";
import { DOCUMENT_TYPES_LIST } from "@/constants/document";
import CreateForm from "./form";
import { useDispatch, useSelector } from "react-redux";
import {
  getDocumentId,
  getDocumentsLoading,
} from "@/redux/selectors/documents";
import { fetchDocumentIdThunk } from "@/redux/thunks/documents-thunks";
import SaveAndCheck from "./save-and-check";
import {
  getDataFromLocalStorage,
  setDataToLocalStorage,
} from "@/helpers/localStorageActions";

const { Title } = Typography;

const Create = () => {
  const dispatch = useDispatch();
  const [isFormValid, setFormValid] = useState(false);
  const currentDocumentId = useSelector(getDocumentId);
  const loading = useSelector(getDocumentsLoading);
  const [documentType, setDocumentType] = useState(DOCUMENT_TYPES_LIST[0].key);
  const [document, setDocument] = useState(
    getDataFromLocalStorage("document") || {
      id: null,
      name: "",
      surname: "",
      middlename: "",
      birthDate: "",
      from: "",
      to: "",
      tank: false
    },
  );

  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };

  useEffect(() => {
    setFormValid(
      document.name &&
        document.surname &&
        document.birthDate &&
        document.middlename &&
        document.from &&
        document.to,
    );
  }, [document]);

  useEffect(() => {
    if (isFormValid) {
      dispatch(fetchDocumentIdThunk({ endpoint: documentType }));
    }
  }, [documentType, isFormValid]);

  useEffect(() => {
    if (currentDocumentId) {
      setDataToLocalStorage("document", {
        ...document,
        id: currentDocumentId,
      });
    }
  }, [currentDocumentId]);

  return (
    <div
      admincontent="content"
      className="w-full flex-1 flex flex-col shadow-3xl h-full bg-white p-4"
    >
      <div className="h-[180px] bg-white">
        <Title level={3}>
          Sertifikat turi:{" "}
          <Select
            value={documentType}
            onChange={(value) => setDocumentType(value)}
            className="w-[200px]"
            defaultValue={DOCUMENT_TYPES_LIST[0].key}
            options={convertToValueLabel(DOCUMENT_TYPES_LIST, "key", "label")}
          />{" "}
        </Title>
        <Steps
          className="mt-4 p-8"
          current={current}
          items={[
            {
              title: "Ma'lumot kiritish",
              icon: <EditOutlined />,
            },
            {
              title: "Hujjatni saqlash va holatini tekshirish",
              icon: <SaveOutlined />,
            },
          ]}
        />
      </div>

      <div className="flex flex-1 flex-col">
        {current === 0 && (
          <CreateForm document={document} setDocument={setDocument} />
        )}
        {current === 1 && (
          <SaveAndCheck
            actionType="create"
            documentType={documentType}
            setDocument={setDocument}
            setCurrent={setCurrent}
            document={{ ...document, id: currentDocumentId }}
          />
        )}
      </div>
      <div className="flex justify-between">
        <Button disabled={current === 0} type="primary" onClick={prev}>
          <ArrowLeftOutlined /> Orqaga
        </Button>
        <Button
          loading={loading}
          disabled={current === 1 || !currentDocumentId}
          type="primary"
          onClick={next}
        >
          Keyingi <ArrowRightOutlined />
        </Button>
      </div>
    </div>
  );
};

export default Create;
