import React, { useState } from 'react';
import s from './Preview.module.css';
import Replay from '../VideoPlayer/Replay';

interface Props {
  children: React.ReactNode;
  height: string;
  width: string;
  containerHeight?: string;
  isReplayActive?: boolean;
}

const Preview: React.FC<Props> = ({
  children,
  height,
  width,
  containerHeight,
  isReplayActive = false,
}) => {
  const [key, setKey] = useState(0);

  const handleReplay = () => {
    setKey((prevKey) => prevKey + 1);
  };

  return (
    <div className={s.root} style={{ height }}>
      {isReplayActive && (
        <button onClick={handleReplay} className={s.replayButton}>
          <Replay />
        </button>
      )}
      <div className={s.children} style={{ width, height: containerHeight }} key={key}>
        {children}
      </div>
    </div>
  );
};

export default Preview;
