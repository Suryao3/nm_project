// VideoConference.js

import React, { useRef, useEffect } from 'react';

const VideoConference = () => {
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);

  useEffect(() => {
    const initMedia = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        localVideoRef.current.srcObject = stream;
      } catch (error) {
        console.error('Error accessing media devices:', error);
      }
    };

    initMedia();
  }, []);

  return (
    <div className="video-conference">
      <div className="video-container">
        <video ref={localVideoRef} autoPlay muted playsInline className="local-video" />
        <p>Your Video</p>
      </div>

      <div className="video-container">
        <video ref={remoteVideoRef} autoPlay playsInline className="remote-video" />
        <p>Participant's Video</p>
      </div>
    </div>
  );
};

export default VideoConference;
