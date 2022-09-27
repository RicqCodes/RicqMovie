// import { Movie } from "@mui/icons-material";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import MovieAPI from "../apis/MovieAPI";
import { APIKEY2 } from "../apis/MovieAPIKey";

// CREATE A MIDDLEWARE ACTION FOR FETCHING MOVIES
export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const response = await MovieAPI.get(
      `/trending/movie/day?api_key=${APIKEY2}`
    );
    return response.data;
  }
);

// CREATE A MIDDLEWARE ACTION FOR FETCHING SERIES
export const fetchAysncSeries = createAsyncThunk(
  "series/fetchAsyncSeries",
  async () => {
    const response = await MovieAPI.get(`/trending/tv/day?api_key=${APIKEY2}`);
    return response.data;
  }
);

// CREATE A MIDDLEWARE ACTION FOR FETCHING FEATURED MOVIES
export const fetchAysncFeatured = createAsyncThunk(
  "movies/fetchAsyncFeatured",
  async () => {
    const response = await MovieAPI.get(
      `movie/popular?api_key=${APIKEY2}&language=en-US`
    );
    return response.data.results[0];
  }
);

// CREATE A MIDDLEWARE ACTION FOR FETCHING MOVIE DETAILS
export const fetchAysncDetailsMovies = createAsyncThunk(
  "movies-series/featchAsyncDetailsMovies",
  async (id) => {
    const response = await MovieAPI.get(
      `/movie/${id}?api_key=${APIKEY2}&language=en-US`
    );
    return response.data;
  }
);

// CREATE A MIDDLEWARE ACTION FOR FETCHING SERIES DETAILS
export const fetchAysncDetailsSeries = createAsyncThunk(
  "movies-series/fetchAsyncDetailsSeries",
  async (id) => {
    const response = await MovieAPI.get(
      `/tv/${id}?api_key=${APIKEY2}&language=en-US`
    );
    return response.data;
  }
);

// CREATE A MIDDLEWARE ACTION FOR FETCHING SIMILAR MOVIES
export const fetchAysncSimilarMovies = createAsyncThunk(
  "movies-series/fetchAsyncSimilarMovies",
  async (id) => {
    const response = await MovieAPI.get(
      `/movie/${id}/similar?api_key=${APIKEY2}&language=en-US&page=1`
    );
    return response.data;
  }
);

// CREATE A MIDDLEWARE ACTION FOR FETCHING SIMILAR SERIES
export const fetchAysncSimilarSeries = createAsyncThunk(
  "movies-series/fetchAsyncSimilarSeries",
  async (id) => {
    const response = await MovieAPI.get(
      `/tv/${id}/similar?api_key=${APIKEY2}&language=en-US&page=1`
    );
    return response.data;
  }
);

// CREATE A MIDDLEWARE ACTION FOR FETCHING SEARCHED INPUT
export const fetchAsyncSearch = createAsyncThunk(
  "search/fetchAsyncSearch",
  async (query) => {
    let queryString = encodeURIComponent(query);
    const response = await MovieAPI.get(
      `search/multi?api_key=${APIKEY2}&language=en-US&query=${queryString}&page=1&include_adult=true`
    );
    return response.data;
  }
);

// CREATE A MIDDLEWARE ACTION FOR FETCHING Movie GENRE
export const fetchAsyncMovieGenre = createAsyncThunk(
  "genre/fetchAsyncMovieGenre",
  async () => {
    const response = await MovieAPI.get(
      `/genre/movie/list?api_key=${APIKEY2}&language=en-US`
    );
    return response.data;
  }
);

// CREATE A MIDDLEWARE ACTION FOR FETCHING TV GENRE
export const fetchAsyncTvGenre = createAsyncThunk(
  "genre/fetchAsyncTvGenre",
  async () => {
    const response = await MovieAPI.get(
      `/genre/tv/list?api_key=${APIKEY2}&language=en-US`
    );
    return response.data;
  }
);

const initialState = {
  movies: {},
  series: {},
  searchText: "",
  featured: {},
  movieDetails: {},
  similar: {},
  searchResult: {},
  movieGenre: {},
  seriesGenre: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
    addText: (state, { payload }) => {
      state.searchText = payload;
    },
    addUser: (state, { payload }) => {
      state.user = payload;
    },
    removeSelectedMovieOrShow: (state) => {
      state.movieDetails = {};
    },
    removeSearch: (state) => {
      state.searchResult = {};
    },
    removeUser: (state) => {
      state.user = {};
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("Fetching...");
    },

    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("Fetched successfully");
      return { ...state, movies: payload };
    },

    [fetchAsyncMovies.rejected]: () => {
      console.log("Failed to fetch");
    },

    [fetchAysncSeries.fulfilled]: (state, { payload }) => {
      return { ...state, series: payload };
    },

    [fetchAysncFeatured.fulfilled]: (state, { payload }) => {
      return { ...state, featured: payload };
    },

    [fetchAysncDetailsMovies.fulfilled]: (state, { payload }) => {
      return { ...state, movieDetails: payload };
    },

    [fetchAysncDetailsSeries.fulfilled]: (state, { payload }) => {
      return { ...state, movieDetails: payload };
    },

    [fetchAysncSimilarMovies.fulfilled]: (state, { payload }) => {
      return { ...state, similar: payload };
    },

    [fetchAysncSimilarSeries.fulfilled]: (state, { payload }) => {
      return { ...state, similar: payload };
    },
    [fetchAsyncSearch.fulfilled]: (state, { payload }) => {
      return { ...state, searchResult: payload };
    },
    [fetchAsyncMovieGenre.fulfilled]: (state, { payload }) => {
      return { ...state, movieGenre: payload };
    },
    [fetchAsyncTvGenre.fulfilled]: (state, { payload }) => {
      return { ...state, seriesGenre: payload };
    },
  },
});

export const {
  removeSelectedMovieOrShow,
  addText,
  removeSearch,
  addUser,
  removeUser,
} = movieSlice.actions;

export const getAllMovies = (state) => state.movies;
export const getAllSeries = (state) => state.series;
export const getText = (state) => state.searchText;
export const getFeatured = (state) => state.featured;
export const getDetails = (state) => state.movieDetails;
export const getSimilar = (state) => state.smilar;
export const getMovieGenre = (state) => state.movieGenre;
export const getSeriesGenre = (state) => state.seriesGenre;

export default movieSlice.reducer;
