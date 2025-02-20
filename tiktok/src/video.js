import Video1 from "./video/video.mp4";
import { forwardRef, useImperativeHandle, useRef } from "react";

function Video(props, ref) {
  const videRef = useRef();
  useImperativeHandle(ref, () => ({
    play() {
      videRef.current.play();
    },
    pause() {
      videRef.current.pause();
    },
  }));

  return (
    <video
      ref={videRef}
      style={{ width: 280, padding: 20 }}
      src={Video1}
      onEnded={() => videRef.current.play()}
    />
  );
}
export default forwardRef(Video);
