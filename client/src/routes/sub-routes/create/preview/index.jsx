import AdrCertificate from "@/components/documents/adr/AdrCertificate";
import DriverCertificate from "@/components/documents/driver/DriverCertificate";
import { SIMILAR_DOCUMENT_TYPES } from "@/constants/document";
import Draft from "@/routes/draft/Draft";
import React from "react";

const Preview = ({ document }) => {
  return (
    <div className="flex h-[580px] overflow-y-auto">
      <Draft document={document} />
    </div>
  );
};

export default Preview;
