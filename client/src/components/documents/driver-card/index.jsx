import { forwardRef } from "react";
import DriverCardFront from "./card/front";
import DriverCardBack from "./card/back";
import DriverCardMini from "./card/mini";

const DriverCertificateCard = forwardRef(({ document, type }, ref) => {
  console.log("DriverCertificateCard", document, type);
  return (
    <div
      ref={ref}
      className={`${type === "search" ? "flex !flex-row" : "flex flex-col"} flex-wrap items-center justify-center w-full h-full`}
    >
      <DriverCardFront document={document} type={type} />
      <DriverCardBack document={document} type={type} />
      <DriverCardMini document={document} type={type} />
    </div>
  );
});

export default DriverCertificateCard;
