import {
  DeleteOutlined,
  DownloadOutlined,
  EditOutlined,
  FileDoneOutlined,
} from "@ant-design/icons";
import { Button, Table, Modal, message } from "antd";
import ReactToPrint from "react-to-print";
import DriverCertificate from "@components/documents/driver/index";
import AdrCertificate from "@components/documents/adr";
import { useState, useRef } from "react";
import { EMPTY_DOCUMENT, SIMILAR_DOCUMENT_TYPES } from "@constants/document";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleDocumentThunk } from "@thunks/single-document-thunk";
import { getSingleDocument } from "@selectors/single-document";
import { removeCurrentDocument } from "@slices/single-document";
import Edit from "@routes/sub-routes/edit";
import { deleteDocumentThunk } from "@thunks/documents-thunks";
import { updateUI } from "@helpers/update-ui";
import { useNavigate } from "react-router-dom";
import DriverCertificateCard from "../documents/driver-card";

const DocumentsTable = ({ data, loading, type }) => {
  const [editingDocumentId, setEditingDocumentId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [deleteDocument, setDeleteDocument] = useState(null);
  const curretDocument = useSelector(getSingleDocument);
  const printFrame = useRef();
  const dispatch = useDispatch();
  const [document, setDocument] = useState(null);
  const navigate = useNavigate();
  const columns = [
    {
      title: "  Id raqami",
      dataIndex: "id",
      key: "id",
      width: "10%",
      filterSearch: true,
      filters: data
        .slice((currentPage - 1) * pageSize, currentPage * pageSize)
        .map((item) => ({
          text: item.id,
          value: item.id + item._id,
        })),
      onFilter: (value, record) => (record.id + record._id).includes(value),
    },
    {
      title: "Ism",
      dataIndex: "name",
      key: "name",
      width: "20%",
      filterSearch: true,
      filters: data
        .slice((currentPage - 1) * pageSize, currentPage * pageSize)
        .map((item) => ({
          text: item.name,
          value: item.name + item._id,
        })),
      onFilter: (value, record) => (record.name + record._id).includes(value),
    },
    {
      title: "Familiya",
      dataIndex: "surname",
      key: "surname",
      width: "20%",
      filterSearch: true,
      filters: data
        .slice((currentPage - 1) * pageSize, currentPage * pageSize)
        .map((item) => ({
          text: item.surname,
          value: item.surname + item._id,
        })),
      onFilter: (value, record) =>
        (record.surname + record._id).includes(value),
    },
    {
      title: "Tug`ulgan sana",
      dataIndex: "birthDate",
      key: "birthDate",
      width: "10%",
    },
    {
      title: "Haydovchilik guvohnomasi raqami",
      dataIndex: "driverLicenceNumber",
      key: "driverLicenceNumber",
      width: "10%",
    },
    {
      title: "Berilgan sana",
      dataIndex: "from",
      key: "from",
      width: "10%",
    },
    {
      title: "Tugash sana",
      dataIndex: "to",
      key: "to",
      width: "10%",
    },
    {
      title: "Boshqarish",
      key: "action",
      render: (document) => (
        <div className="flex gap-2">
          <ReactToPrint
            pageStyle="@page { size: 2480px 3508px;}"
            trigger={() => (
              <Button
                disabled={document.id === EMPTY_DOCUMENT}
                type="primary"
                onFocus={() => setDocument(document)}
              >
                <DownloadOutlined />
              </Button>
            )}
            content={() => printFrame.current}
          />
          <Button
            type="primary"
            style={{ backgroundColor: "#6FCF97" }}
            disabled={document.id === EMPTY_DOCUMENT}
            onClick={() => handleCheckCertificateStatus(document)}
          >
            <FileDoneOutlined />
          </Button>
          <Button
            style={{ backgroundColor: "#FFB629" }}
            type="primary"
            disabled={editingDocumentId === document._id}
            loading={editingDocumentId === document._id}
            onClick={() => handleEditDocument(document)}
          >
            <EditOutlined />
          </Button>
          <Button
            onClick={() => handleDeleteDocument(document)}
            type="primary"
            danger
            disabled={document.id === EMPTY_DOCUMENT}
          >
            <DeleteOutlined />
          </Button>
        </div>
      ),
    },
  ];

  const handleDeleteDocument = (document) => {
    setDeleteModalOpen(true);
    setDeleteDocument(document);
  };

  const handleEditDocument = (document) => {
    setEditingDocumentId(document._id);
    dispatch(
      fetchSingleDocumentThunk({
        endpoint: type,
        id: document._id,
      }),
    ).then(() => setEditingDocumentId(null));
  };

  const handleCheckCertificateStatus = (document) => {
    navigate(`/admin/status/${document.id}`);
  };

  return (
    <div className="p-4 bg-white">
      <Table
        loading={loading}
        className="w-full"
        rowKey="_id"
        columns={columns}
        dataSource={data}
        onChange={(pagination) => {
          setCurrentPage(pagination.current);
          setPageSize(pagination.pageSize);
        }}
      />
      <div className="hidden w-0 h-0">
        {document && (
          <>
            {SIMILAR_DOCUMENT_TYPES.DRIVER.includes(type) && (
              <DriverCertificate document={document} ref={printFrame} />
            )}

            {SIMILAR_DOCUMENT_TYPES.ADR.includes(type) && (
              <AdrCertificate document={document} ref={printFrame} />
            )}

            {SIMILAR_DOCUMENT_TYPES.DRIVER_CARD.includes(type) && (
              <DriverCertificateCard document={document} ref={printFrame} />
            )}
          </>
        )}
      </div>
      {curretDocument && (
        <Modal
          width={"80%"}
          bodyStyle={{ height: "84vh", overflow: "auto" }}
          open={Boolean(curretDocument)}
          footer={null}
          maskClosable={false}
          onCancel={() => dispatch(removeCurrentDocument())}
        >
          <Edit currentDocument={curretDocument} documentType={type} />
        </Modal>
      )}
      {isDeleteModalOpen && deleteDocument && (
        <Modal
          open={isDeleteModalOpen}
          onCancel={() => setDeleteModalOpen(false)}
          onOk={() => {
            setDeleteModalOpen(false);
            dispatch(
              deleteDocumentThunk({
                endpoint: type,
                id: deleteDocument._id,
                onSuccess: () => {
                  dispatch(updateUI(type));
                  message.success("Sertifikat o`chirildi");
                },
              }),
            );
          }}
          okText="O`chirish"
          cancelText="Orqaga"
        >
          <p>Sertifikatni o`chirishni tasdiqlaysizmi?</p>
        </Modal>
      )}
    </div>
  );
};

export default DocumentsTable;
