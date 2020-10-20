import React from "react";
import ReactPlayer from "react-player";

const SoundCloud = () => {
  const url = "https://soundcloud.com/user-609405302/sets/death-metal-math";

  return (
    <div>
      <ReactPlayer
        url={url}
        config={{
          options: {
            auto_play: true,
          },
        }}
        className="soundcloud-widget"
      />
    </div>
  );
};

export default SoundCloud;
