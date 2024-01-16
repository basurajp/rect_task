import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "./utlis/constant";
import Videocard from "./Videocard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [video, setvideo] = useState([]);
  useEffect(() => {
    getVideo();
  }, []);

  const getVideo = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();

    setvideo(json.items);
  };

  return (
    <div className=" flex gap-2 flex-wrap ">
      {video.map((elem, index) => (
        <Link to={`/watch?v=${elem.id}`} key={elem.id}>
          {" "}
          <Videocard elem={elem} />
        </Link>
      ))}
    </div>
  );
};





export default VideoContainer;
