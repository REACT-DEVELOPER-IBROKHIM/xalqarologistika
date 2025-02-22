import { forwardRef } from "react";
import DriverCertificateTop from "./top/DriverCertificateTop";
import DriverCertificateBottom from "./bottom/DriverCertificateBottom";
import MiniCertificate from "./mini";
const DriverCertificate = forwardRef(({ document, type }, ref) => {
  return (
    <div ref={ref}>
      <DriverCertificateTop document={document} type={type} ref={ref} />
      <DriverCertificateBottom document={document} type={type} ref={ref} />
      <MiniCertificate document={document} type={type} ref={ref} />
    </div>
  );
});

export default DriverCertificate;
