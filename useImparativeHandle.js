// // dùng để tùy chỉnh ref của một function component
// // thể hiện được tính đóng gói

// import Video1 from "./video/video.mp4";
// import { forwardRef, useImperativeHandle, useRef } from "react";

// function Video(props, ref) {
//   const videRef = useRef();
//   useImperativeHandle(ref, () => ({
//     play() {
//       videRef.current.play();
//     },
//     pause() {
//       videRef.current.pause();
//     },
//   }));

//   return (
//     <video
//       ref={videRef}
//       style={{ width: 280, padding: 20 }}
//       src={Video1}
//       onEnded={() => videRef.current.play()}
//     />
//   );
// }
// export default forwardRef(Video);

// import Video from "./video.js";
// import { useRef } from "react";
// function App() {
//   const videoRef = useRef();
//   const handlePlay = () => {
//     videoRef.current.play();
//   };
//   const handleStop = () => {
//     videoRef.current.pause();
//   };
//   return (
//     <div>
//       <Video ref={videoRef} />
//       <button onClick={handlePlay}>Play</button>
//       <button onClick={handleStop}>Pause</button>
//     </div>
//   );
// }

// export default App;
