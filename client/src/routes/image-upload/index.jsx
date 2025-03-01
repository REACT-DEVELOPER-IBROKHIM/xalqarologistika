import { CameraFilled } from "@ant-design/icons";
import React from "react";
import Webcam from "react-webcam";
import axios from "axios";
import "./index.scss";

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
      fetch(data?.microsoft?.image_resource_url)
      .then(response => response.blob())
      .then(blob => {
        const file = new File([blob], "filename.jpg", { type: "image/jpeg" });
      
        const formData = new FormData();
        formData.append('file', file);

        console.log('File:', file);
      })
      .catch(error => {
        console.error('Error fetching and converting image:', error);
      })
    }
    catch (error) {
      console.error("Error uploading image: ", error);
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
    <div className="video-container flex max-w-[768px] w-full mx-auto h-screen flex-col justify-center items-center relative">
      <div className="w-[400px] h-[500px] border-2 border-gray-300 rounded-full absolute top-[100px] z-10"></div>
      <Webcam
        ref={webcamRef}
        height={1280}
        screenshotFormat="image/jpeg"
        mirrored={true}
        videoConstraints={videoConstraints}
      />
      <button
        className="absolute bottom-4 p-[30px] rounded-full bg-white"
        onClick={captureImage}
      >
        <CameraFilled className="text-3xl" />
      </button>
      {
      url && <img src={url} alt="" />
      }
    </div>
  );
};

export default ImageUpload;
