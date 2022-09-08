import "./App.css"
import Navbar from "./components/Navbar";
import Landing from "./sections/Landing";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import OderForm from "./pages/OderForm";
import UpdateReview from "./pages/UpdateReview";
import UserForm from "./pages/UserForm";
import Success from "./pages/Success";
import Features from "./sections/Features";


function App() {
  return (
     //create a router
      <div className="app">
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/" element={<Features />} />
                <Route path="/order" element={<OderForm />} />
                <Route path="/review" element={<UpdateReview />} />
                <Route path="/user" element={<UserForm />} />
                <Route path="/success" element={<Success />} />
            </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
