import { forwardRef } from "react";
import DriverCardFront from "./card/front";
import DriverCardBack from "./card/back";
import DriverCardMini from "./card/mini";

const DriverCertificateCard = forwardRef(({ document, type }, ref) => {
  return (
    <div ref={ref}>
      <DriverCardFront document={document} type={type} />
      <DriverCardBack document={document} type={type} />
      {type !== "search" && <DriverCardMini document={document} />}
    </div>
  );
});

export default DriverCertificateCard;
