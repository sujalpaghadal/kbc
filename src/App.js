import "./App.css";
import Header from "./Global/Header";
import Footer from "./Global/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Faq from "./Pages/Faq";
import Awards from "./Pages/Awards";
import Mediaassets from "./Pages/Mediaassets";
import MediaCoverage from "./Pages/MediaCoverage";
import Newhilights from "./Pages/Newhilights";
import Sustainability from "./Pages/Sustainability";
import SocialInitiatives from "./Pages/SocialInitiatives";
import Blogs from "./Pages/Blogs";
import Careers from "./Pages/Careers";
import Registerforvendor from "./Pages/Registerforvendor";
import Contactus from "./Pages/Contactus";
import Brandambassadors from "./Pages/Brandambassadors";
import Ourmanagement from "./Pages/Ourmanagement";
import Indrustrialproject from "./Pages/Indrustrialproject";
import Completedproject from "./Pages/Completedproject";
import Recidentialproject from "./Pages/Recidentialproject";
import Aboutus from "./Pages/Aboutus";
import ProjectView from "./Pages/ProjectView";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* WHO WE ARE */}
        <Route path="/about" element={<Aboutus />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/socialInitiatives" element={<SocialInitiatives />} />
        <Route path="/brandambassadors" element={<Brandambassadors />} />
        <Route path="/ourmanagement" element={<Ourmanagement />} />
        <Route path="/indrustrialproject" element={<Indrustrialproject />} />
        <Route path="/completedproject" element={<Completedproject />} />
        <Route path="/recidentialproject" element={<Recidentialproject />} />
        <Route path="/projectview" element={<ProjectView />} />
        <Route path="/projectview/:projectId" element={<ProjectView />} />

        {/* Quick Links */}
        <Route path="/news-hilights" element={<Newhilights />} />
        <Route path="/media-coverage" element={<MediaCoverage />} />
        <Route path="/media-assets" element={<Mediaassets />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/faq" element={<Faq />} />

        {/*REACH US */}
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/vender-registration" element={<Registerforvendor />} />
        <Route path="/contactus" element={<Contactus />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
