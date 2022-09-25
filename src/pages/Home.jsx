import React, { Fragment, useEffect } from "react";

import MovieListing from "../components/MovieListing";
import FeaturedMovie from "../components/FeaturedMovie";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAysncFeatured,
  fetchAysncSeries,
  fetchAsyncTvGenre,
  fetchAsyncMovieGenre,
  // removeSearch,
} from "../ReduxConfig/movieSlice";
import Header from "../components/Header";
import Footer from "../components/Footer";
import useAuthStatus from "../hooks/useAuthStatus";
import Skeleton from "../components/Skeleton";

const Home = () => {
  const dispatch = useDispatch();
  const { loading } = useAuthStatus();

  useEffect(() => {
    dispatch(fetchAysncFeatured());
    dispatch(fetchAsyncMovies());
    dispatch(fetchAysncSeries());
    dispatch(fetchAsyncMovieGenre());
    dispatch(fetchAsyncTvGenre());
  }, [dispatch]);
  return (
    <Fragment>
      {loading ? (
        <Skeleton type={"details"} />
      ) : (
        <>
          <Header />
          <FeaturedMovie />
          <MovieListing />
          <Footer />
        </>
      )}
    </Fragment>
  );
};

export default Home;
