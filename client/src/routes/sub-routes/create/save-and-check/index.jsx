import { EMPTY_DOCUMENT, SIMILAR_DOCUMENT_TYPES } from "@/constants/document";
import { removeDataFromLocalStorage } from "@/helpers/localStorageActions";
import { getDocumentsLoading } from "@/redux/selectors/documents";
import { createDocumentThunk } from "@/redux/thunks/documents-thunks";
import {
  fetchSingleDocumentByIdThunk,
  updateDocumentThunk,
} from "@/redux/thunks/single-document-thunk";
import { Badge, Button, Descriptions, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import ReactToPrint from "react-to-print";
import { useCallback, useRef } from "react";
import { deleteDocumentSignatureThunk } from "@thunks/upload-thunk";
import { DownloadOutlined } from "@ant-design/icons";
import AdrCertificate from "@/components/documents/adr";
import DriverCertificate from "@/components/documents/driver";
import { removeCurrentDocumentId } from "@/redux/slices/documents";
import { removeCurrentDocument } from "@/redux/slices/single-document";
import { updateUI } from "@/helpers/update-ui";
import { checkCertificateStatus } from "@/helpers/check-certificate-status";
import { fetchDocumentStatusDataThunk } from "@/redux/thunks/document-status";

const SaveAndCheck = ({
  document,
  setDocument,
  setCurrent,
  documentType,
  actionType,
}) => {
  const printFrame = useRef();
  const dispatch = useDispatch();
  const loading = useSelector(getDocumentsLoading);
  const items = [
    {
      key: "1",
      label: "Tashkilot nomi",
      children: "NAMANGANTRANS 2022",
    },
    {
      key: "2",
      label: "Qayd raqami",
      children: document?.id,
    },
    {
      key: "3",
      label: "Ism",
      children: document?.name,
    },
    {
      key: "4",
      label: "Familiya",
      children: document?.surname,
    },
    {
      key: "5",
      label: "Otasining ismi",
      children: document?.middlename,
    },
    {
      key: "6",
      label: "Tug`ulgan sana",
      children: document?.birthDate,
    },
    {
      key: "7",
      label: "Berilgan sana",
      children: document?.from,
    },
    {
      key: "8",
      label: "Amal qilish sanasi",
      children: document?.to,
    },
    {
      key: "9",
      label: "Sertifikat imzosi",
      span: 3,
      children: (
        <Badge
          status={document?.signature ? "success" : "error"}
          text={document?.signature ? "Mavjud" : "Mavjud emas"}
        />
      ),
    },
    {
      key: "10",
      label: "Sertifikat holati",
      span: 3,
      children: (
        <Badge
          status={checkCertificateStatus(document) ? "success" : "error"}
          text={checkCertificateStatus(document) ? "Mavjud" : "Maddati tugagan"}
        />
      ),
    },
  ];

  const handleCancelValues = () => {
    setCurrent(0);
    setDocument({
      id: null,
      name: "",
      surname: "",
      middlename: "",
      birthDate: "",
      from: "",
      to: "",
    });
    if (actionType === "create") {
      removeDataFromLocalStorage("document");
      dispatch(removeCurrentDocumentId());
    } else if (actionType === "edit") {
      removeDataFromLocalStorage("currentDocument");
      dispatch(removeCurrentDocument());
    }
  };

  const createDocumentHandler = useCallback(
    () =>
      createDocumentThunk({
        endpoint: documentType,
        document,
        onSuccess: () => {
          handleCancelValues();
          message.success("Sertifikat saqlandi");
        },
      }),
    [],
  );

  const updateDocumentHandler = useCallback(
    () =>
      updateDocumentThunk({
        endpoint: documentType,
        id: document._id,
        document,
        onSuccess: () => {
          handleCancelValues();
          dispatch(updateUI(documentType));
          message.success("Sertifikat tahrirlandi");
        },
      }),
    [],
  );

  const handleSaveAndCheck = () => {
    const action =
      actionType === "create"
        ? createDocumentHandler()
        : updateDocumentHandler();

    dispatch(action);
  };

  const handleCopyImageUploadLink = () => {
    navigator.clipboard.writeText(
      `${window.location.origin}/signature-upload/${documentType}-${document._id}`,
    );
    message.success("Havola nusxalandi");
  };

  const handleRemoveSignature = () => {
    dispatch(
      deleteDocumentSignatureThunk({
        id: document._id,
        endpoint: documentType,
        onSuccess: () => {
          message.success("Imzo o'chirildi");
        },
      }),
    );
  };

  return (
    <div className="flex h-[580px] overflow-y-auto">
      <div className="w-full">
        <Descriptions
          className="w-full"
          title="User Info"
          layout="vertical"
          bordered
          items={items}
        />
        <div className="flex justify-between mt-4">
          <div className="flex gap-4">
            <ReactToPrint
              pageStyle="@page { size: 2480px 3508px;}"
              trigger={() => (
                <Button
                  disabled={document.id === EMPTY_DOCUMENT}
                  type="primary"
                >
                  Yuklab olish <DownloadOutlined />
                </Button>
              )}
              content={() => printFrame.current}
            />
            {actionType && (
              <Button
                type="primary"
                loading={loading}
                disabled={loading}
                onClick={handleSaveAndCheck}
              >
                Saqlash
              </Button>
            )}
            <Button
              type="primary"
              loading={loading}
              disabled={loading}
              onClick={handleCopyImageUploadLink}
            >
              Imzo qo'yish uchun havola
            </Button>
            {document?.signature && (
              <Button
                type="primary"
                onClick={handleRemoveSignature}
                danger
                disabled={loading}
              >
                Imzoni o'chirish
              </Button>
            )}
          </div>
          {actionType && (
            <Button onClick={handleCancelValues} variant="outlined" danger>
              Bekor qilish
            </Button>
          )}
        </div>
      </div>
      <div className="hidden w-0 h-0">
        {document && (
          <>
            {SIMILAR_DOCUMENT_TYPES.DRIVER.includes(documentType) ? (
              <DriverCertificate document={document} ref={printFrame} />
            ) : (
              <AdrCertificate document={document} ref={printFrame} />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default SaveAndCheck;
