import React, { useRef } from "react";
import PropTypes from "prop-types";
import useIntersection from "./useIntersection.js";
import ReactPlayer from "react-player";
const VideoPlayer = ({ src, width, height, loop, index }) => {
  const ref = useRef();
  const inViewport = useIntersection(ref, "-158px", index); // Trigger as soon as the element becomes visible

  return (
    <div
      ref={ref}
      className={inViewport ? "isActive player-wrapper " : "player-wrapper "}
    >
      <ReactPlayer
        className="player"
        url={src}
        playing={inViewport}
        width={width}
        height={height}
        loop={loop}
      />
    </div>
  );
};
VideoPlayer.defaultProps = {
  loop: true,
};
VideoPlayer.propTypes = {
  src: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};
export default VideoPlayer;
