import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMoviesVisibility } from "../../store/actions";

const useIntersection = (element, rootMargin, index) => {
  const visibleVideos = useSelector((state) => state.visibleVideos);
  const isVisible =
    visibleVideos[Math.floor(visibleVideos.length / 2)] === index;
  const dispatch = useDispatch();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        dispatch(setMoviesVisibility(index, entry.isIntersecting));
      },
      { rootMargin }
    );

    element.current && observer.observe(element.current);

    return () => observer.unobserve(element.current);
  }, []);

  return isVisible;
};
export default useIntersection;
