import React from "react";
import Layout from "./Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CodeEditor from "./Pages/CodeEditorPage/CodeEditor";
import Homepage from "./Pages/HomePage/Homepage";
import FAQsPage from "./Pages/FAQs/FAQsPage";
import PricingPage from "./Pages/Pricing/PricingPage";
import AboutPage from "./Pages/About/AboutPage";
import FeaturesPage from "./Pages/Features/FeaturesPage";

const App = () => {
  return (
    <BrowserRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/code-editor" element={<CodeEditor />} />
          <Route path="/faqs" element={<FAQsPage />} />
          <Route path="/codelive-pricing" element={<PricingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/feaures" element={<FeaturesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
