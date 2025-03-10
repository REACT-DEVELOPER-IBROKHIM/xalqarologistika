import DriverCertificate from "@/components/documents/driver/index";
import React from "react";

const Preview = ({ document }) => {
  return (
    <div className="flex h-[580px] overflow-y-auto">
      <DriverCertificate document={document} />
    </div>
  );
};

export default Preview;
