import { CameraFilled } from "@ant-design/icons";
import React from "react";
import Webcam from "react-webcam";
import axios from "axios";

const videoConstraints = {
  width: 720,
  height: 1280,
  facingMode: "user",
};

const ImageUpload = () => {
  const [url, setUrl] = React.useState(null);
  const webcamRef = React.useRef(null);
  const uploadImage = async (file) => {
    const url = "https://api.edenai.run/v2/image/background_removal";

    const formData = new FormData();
    formData.append("file", file);
    formData.append("providers", JSON.stringify(["microsoft"]));

    try {
      const response = await axios.post(url, formData, {
        headers: {
          Authorization: "Bearer " + import.meta.env.VITE_EDENAI_API_KEY,
          "Content-Type": "multipart/form-data",
        },
      });
      const data = response.data;
      setUrl(data?.microsoft?.image_resource_url);
    } catch (error) {
      console.error(error);
    }
  };

  const captureImage = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    fetch(imageSrc)
      .then((res) => res.blob())
      .then((blob) => {
        const file = new File([blob], "image.jpg", { type: "image/jpeg" });
        uploadImage(file);
      });
  };

  return (
    <div className="flex flex-col justify-center items-center relative">
      <Webcam
        ref={webcamRef}
        height={1280}
        screenshotFormat="image/jpeg"
        width={720}
        mirrored={true}
        videoConstraints={videoConstraints}
      />
      <button
        className="absolute bottom-4 p-2 bg-white rounded-md"
        onClick={captureImage}
      >
        <CameraFilled />
      </button>
      {url && <img src={url} alt="" />}
    </div>
  );
};

export default ImageUpload;
