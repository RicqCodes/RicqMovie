import {
  // BrowserRouter as Router,
  Routes,
  Route,
  // useLocation,
} from "react-router-dom";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import theme from "./styles/Theme.styled";
import GlobalStyle from "./styles/Global";
import LogIn from "./pages/Login";
import Signup from "./pages/Signup";
// import Header from "./components/Header";
import Main from "./styles/Main.styled";
import Home from "./pages/Home";
import Profile from "./components/Profile";
import MovieDetails from "./components/MovieDetails";
import Search from "./pages/Search";
import PageNotFound from "./pages/PageNotFound";
// import Footer from "./components/Footer";
import PrivateRouter from "./components/PrivateRouter";
import LandingPage from "./pages/LandingPage";
import PaymentPlan from "./components/PaymentPlan";
import ForgotPassword from "./pages/ForgotPassword";

const App = () => {
  // let location = useLocation();
  return (
    <div className="App">
      {/* <Router> */}
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/* {location.pathname === "/login" ||
        location.pathname === "/signup" ||
        location.pathname === "/" ||
        location.pathname === "/forgot-password" ? (
          ""
        ) : (
          <Header />
        )} */}
        <Main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/plan" element={<PrivateRouter />}>
              <Route path="/plan" element={<PaymentPlan />} />
            </Route>
            <Route path="/browse" element={<Home />} />
            <Route path="/movie/:imdbID" element={<MovieDetails />} />
            <Route path="/profile" element={<PrivateRouter />}>
              <Route path="/profile" element={<Profile />} />
            </Route>
            <Route element={<PageNotFound />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </Main>
        {/* {location.pathname === "/login" && location.pathname === "/signup" && (
          <Footer />
        )} */}
        {/* <Footer /> */}
      </ThemeProvider>
      <StyledToastContainer />
      {/* </Router> */}
    </div>
  );
};

export default App;

const StyledToastContainer = styled(ToastContainer).attrs({
  className: "toast-container",
  toastClassName: "toast",
  bodyClassName: "body",
  progressClassName: "progress",
})`
  /* .toast-container */
  /* width: 100%; */

  /* .toast is passed to toastClassName */
  .toast {
    background-color: #8080c0;
  }

  button[aria-label="close"] {
    display: none;
  }

  /* .body is passed to bodyClassName */
  .body {
    font-family: "Open Sans", sans-serif;
    font-size: 1.4rem;
    color: #fff;
  }

  /* .progress is passed to progressClassName */
  .progress {
  }
`;
