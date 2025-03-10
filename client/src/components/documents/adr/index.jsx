import React from "react";
import AdrCertificateFront from "./front/AdrCertificate";
import { forwardRef } from "react";
import AdrCertificateBack from "./back/AdrCertificateBack";
import MiniCertificate from "../driver/mini";

const AdrCertificate = forwardRef(({ document, type }, ref) => {
  return (
    <div ref={ref}>
      <AdrCertificateFront type={type} document={document} />
      <AdrCertificateBack type={type} tank={document?.tank} />
      <MiniCertificate document={document} type={type} certType="adr" />
    </div>
  );
});

export default AdrCertificate;
