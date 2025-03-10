import { forwardRef } from "react";
import DriverCardFront from "./card/front";
import DriverCardBack from "./card/back";

const DriverCertificateCard = forwardRef(({ document, type }, ref) => {
  return (
    <div ref={ref}>
      <DriverCardFront document={document} type={type} />
      <DriverCardBack document={document} type={type} />
    </div>
  );
});

export default DriverCertificateCard;
