import React from "react";
import MiniCertificateTop from "./top";
import MiniCertificateBottom from "./bottom";

const MiniCertificate = ({ document, type, certType }) => {
  return (
    <div>
      <MiniCertificateTop type={type} certType={certType} />
      <MiniCertificateBottom
        type={type}
        certType={certType}
        document={document}
      />
    </div>
  );
};

export default MiniCertificate;
