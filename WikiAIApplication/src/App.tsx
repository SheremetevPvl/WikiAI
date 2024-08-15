import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from "./components/Layout/Layout";
import Main from "./components/Pages/Main";
import Footer from "./components/Footer/Footer";
import LLMSearchPage from "./components/Pages/LLMSearch";
import MyStoragePage from "./components/Pages/MyStorage";
import RedactStatePage from "./components/Pages/RedactStatePage";
import StoragePage from "./components/Pages/Storage";
import NotFoundPage from "./components/Pages/NotFound";

function App() {
  return (
  <>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="LLM_search" element={<LLMSearchPage />} />
          <Route path="my_storage" element={<MyStoragePage />} />
          <Route path="redact_state" element={<RedactStatePage />} />
          <Route path="storage" element={<StoragePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
    <Footer/>
  </>
  );
}

export default App;
