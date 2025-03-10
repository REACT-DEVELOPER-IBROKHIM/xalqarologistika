import React, { useEffect, useState } from "react";
import { Button, Form, Select, Steps, Typography } from "antd";
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  EditOutlined,
  SaveOutlined,
} from "@ant-design/icons";
import EditForm from "./form";
import SaveAndCheck from "../create/save-and-check";
import { DOCUMENT_TYPES_LIST } from "@/constants/document";
import { convertToValueLabel } from "@/helpers/formItems";

const { Title } = Typography;

const Edit = ({ currentDocument, documentType }) => {
  const [form] = Form.useForm();
  const [isFormValid, setFormValid] = useState(false);
  const [document, setDocument] = useState(currentDocument);
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };

  useEffect(() => {
    setFormValid(
      document.id &&
        document.name &&
        document.surname &&
        document.birthDate &&
        document.middlename &&
        document.from &&
        document.to &&
        !form.getFieldsError().some(({ errors }) => errors.length),
    );
  }, [document]);

  return (
    <div>
      <div className="h-[180px] bg-white">
        <Title level={3}>
          Sertifikat turi:{" "}
          <Select
            value={documentType}
            className="w-[200px]"
            disabled={true}
            defaultValue={documentType}
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
          <EditForm
            form={form}
            document={document}
            documentType={documentType}
            setDocument={setDocument}
          />
        )}
        {current === 1 && (
          <SaveAndCheck
            actionType="edit"
            documentType={documentType}
            setDocument={setDocument}
            setCurrent={setCurrent}
            document={document}
          />
        )}
      </div>
      <div className="flex justify-between">
        <Button disabled={current === 0} type="primary" onClick={prev}>
          <ArrowLeftOutlined /> Orqaga
        </Button>
        <Button
          disabled={current === 1 || !isFormValid}
          type="primary"
          onClick={next}
        >
          Keyingi <ArrowRightOutlined />
        </Button>
      </div>
    </div>
  );
};

export default Edit;
