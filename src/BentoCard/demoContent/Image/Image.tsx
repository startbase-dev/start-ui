import React from "react";
import s from "./Image.module.css";
import file from "./image.jpg";

const Image: React.FC = () => {
  return (
    <div className={s.container}>
      <img className={s.image} src={file} />
      <p className={s.desc}>
        Stay connected when you’re without Wi-Fi or cellular.
      </p>
    </div>
  );
};

export default Image;
