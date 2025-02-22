import AdrCertificate from "@/components/documents/adr/front/AdrCertificate";
import DriverCertificate from "@/components/documents/driver/index";
import { SIMILAR_DOCUMENT_TYPES } from "@/constants/document";
import Draft from "@/routes/draft/Draft";
import React from "react";

const Preview = ({ document }) => {
  return (
    <div className="flex h-[580px] overflow-y-auto">
      <DriverCertificate document={document} />
    </div>
  );
};

export default Preview;
