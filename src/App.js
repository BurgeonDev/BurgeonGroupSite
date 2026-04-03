import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/*
* @ All pages Import
*/
import HomeOne from "./pages/HomeOne";
import Service from "./pages/Service";
import ServiceDetails from "./pages/ServiceDetails";
import BlogGridWithoutSidebar from "./pages/BlogGridWithoutSidebar";
import BlogDetailsPage from "./pages/BlogDetails";
import Team from "./pages/Team";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error404 from "./pages/Error404";
import ScrollToTop from "./helpers/ScrollToTop";
import Technology from "./templates/Technology";
import Construction from "./templates/Construction";

const App = () => {
  const base = process.env.PUBLIC_URL;

  return (
    <Router>
      <ScrollToTop>
        <Routes>
          <Route path={`${base}/`} element={<HomeOne />} />

          {/* <Route path={`${base}/services`} element={<Service />} />
          <Route path={`${base}/service/:serviceID`} element={<ServiceDetails />} /> */}

          {/* <Route path={`${base}/blog`} element={<BlogGridWithoutSidebar />} />
          <Route path={`${base}/blog/:blogID`} element={<BlogDetailsPage />} /> */}

          <Route path={`${base}/technology`} element={<Technology />} />
          <Route path={`${base}/construction`} element={<Construction />} />
          <Route path={`${base}/contact`} element={<Contact />} />

          <Route path={`${base}/about`} element={<About />} />

          {/* 404 page */}
          <Route path="*" element={<Error404 />} />
        </Routes>
      </ScrollToTop>
    </Router>
  );
};

export default App;