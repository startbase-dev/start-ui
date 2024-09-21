import React, {
  useRef,
  useEffect,
  useCallback,
  useState,
  useMemo,
} from 'react';
import s from './VideoPlayer.module.scss';
import Replay from './Replay';
import Pause from './Pause';
import Play from './Play';

interface VideoPlayerProps {
  url: string;
  isLoopActive?: boolean;
  autoPlay?: boolean;
  muted?: boolean;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  url,
  isLoopActive = false,
  autoPlay = false,
  muted = false,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isEnded, setIsEnded] = useState(false);

  useEffect(() => {
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => {
      setIsPlaying(false);
      setIsEnded(true);
    };

    const video = videoRef.current;
    if (video) {
      video.addEventListener('play', handlePlay);
      video.addEventListener('pause', handlePause);
      video.addEventListener('ended', handleEnded);
    }

    return () => {
      if (video) {
        video.removeEventListener('play', handlePlay);
        video.removeEventListener('pause', handlePause);
        video.removeEventListener('ended', handleEnded);
      }
    };
  }, []);

  useEffect(() => {
    if (autoPlay) {
      setIsPlaying(true);
    }
  }, []);

  const handleReplay = useCallback(() => {
    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
      video.play();
      setIsEnded(false);
    }
  }, []);

  const handlePlayPause = useCallback(() => {
    const video = videoRef.current;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
    }
  }, [isPlaying]);

  const button = useMemo(() => {
    if (isEnded) {
      return (
        <button className={s.button} onClick={handleReplay}>
          Replay <Replay width={16} />
        </button>
      );
    } else {
      return (
        <button className={s.button} onClick={handlePlayPause}>
          {isPlaying ? (
            <>
              Pause <Pause width={16} />
            </>
          ) : (
            <>
              Play <Play width={16} />
            </>
          )}
        </button>
      );
    }
  }, [isEnded, isPlaying]);

  return (
    <div className={s.container}>
      <video
        ref={videoRef}
        className={s.player}
        autoPlay={autoPlay}
        width="100%"
        height="100%"
        src={url}
        loop={isLoopActive}
        muted={muted}
      >
        Your browser does not support the video tag.
      </video>
      {button}
    </div>
  );
};

export default VideoPlayer;
