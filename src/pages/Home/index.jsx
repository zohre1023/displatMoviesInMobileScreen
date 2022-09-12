import React, { useEffect, useRef } from "react";

import VideoPlayer from "../../components/VideoPlayer";
import { MOVIES_LIST } from "../../utilities/constants";
import H1 from "../../components/HeadTags/H1";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesRequested } from "../../store/actions";
import Loading from "../../components/Loading";

const Home = () => {
  const data = useSelector((state) => state.videos);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMoviesRequested());
  }, [dispatch]);
  const ref = useRef();

  if (!data) return <Loading />;
  return (
    <div className="home-page">
      <H1 className="title">{MOVIES_LIST}</H1>
      <div className="list" ref={ref}>
        {data?.map((item, index) => (
          <div className="item" key={item.id}>
            <VideoPlayer
              src={item.attributes?.preview_src}
              width="264px"
              height="148px"
              index={index}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
