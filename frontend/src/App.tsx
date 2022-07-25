import AppHeader from "./components/AppHeader";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import ContactUs from "./pages/ContactUs";
import MailSelect from "./pages/MailSelect";
import MailWrite from "./pages/MailWrite";
import Result from "./pages/Result";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="flex flex-col">
          <AppHeader />
          <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path="mail-select" element={<MailSelect/>}/>
            <Route path="mail-write" element={<MailWrite/>}/>
            <Route path="contact" element={<ContactUs/>}/>
            <Route path="result" element={<Result/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
