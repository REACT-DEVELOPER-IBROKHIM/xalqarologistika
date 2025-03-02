import React, { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SignatureCanvas from "react-signature-canvas";
import { Button, message, Spin } from "antd";
import { uploadSignatureThunk } from "@thunks/upload-thunk";
import { useDispatch } from "react-redux";

const SignatureUpload = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const signatureRef = useRef(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const handleSave = () => {
    const signature = signatureRef.current
      .getTrimmedCanvas()
      .toDataURL("image/png");
    const imageFromBase64 = signature.split(",")[1];
    const byteCharacters = atob(imageFromBase64);
    const byteNumbers = new Array(byteCharacters.length);

    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: "image/png" });
    const file = new File([blob], "signature.png", { type: "image/png" });
    const formData = new FormData();
    formData.append("file", file);
    setLoading(true);
    dispatch(
      uploadSignatureThunk({
        id: id?.split("-")[1],
        type: id?.split("-")[0],
        file: formData,
        onSuccess: () => {
          setLoading(false);
          message.success("Imzo saqlandi");
          navigate("/");
        },
      }),
    );
  };

  const handleReset = () => {
    signatureRef.current.clear();
  };

  return (
    <div className="max-w-[500px] mx-auto h-screen flex flex-col gap-[20px] justify-center items-center">
      {loading ? (
        <Spin />
      ) : (
        <>
          {" "}
          <SignatureCanvas
            ref={signatureRef}
            penColor="black"
            canvasProps={{
              width: 500,
              height: 200,
              className: "border-2 border-black",
            }}
          />
          <div className="flex gap-4">
            <Button type="primary" disabled={loading} onClick={handleSave}>
              Saqlash
            </Button>
            <Button type="default" disabled={loading} onClick={handleReset}>
              Qaytadan chizish
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default SignatureUpload;
