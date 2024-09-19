import React from 'react';
import s from './Image.module.scss';

const Image: React.FC = () => {
  return (
    <div className={s.container}>
      <img
        className={s.image}
        src="https://picsum.photos/1390/690"
        alt="demo"
      />
      <p className={s.desc}>
        Stay connected when you’re without Wi-Fi or cellular.
      </p>
    </div>
  );
};

export default Image;
