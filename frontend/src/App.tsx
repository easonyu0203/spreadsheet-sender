import AppHeader from "./components/AppHeader";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import ContactUs from "./pages/ContactUs";
import MailRecieverSelection from "./pages/MailRecieverSelection";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="flex flex-col">
          <AppHeader />
          <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path="mail-reciever-selection" element={<MailRecieverSelection/>}/>
            <Route path="contact" element={<ContactUs/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
