import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import TextsmsSharpIcon from "@mui/icons-material/TextsmsSharp";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import Checkout from "./scenes/checkout/Checkout";
import Confirmation from "./scenes/checkout/Confirmation";
import CartMenu from "./scenes/global/CartMenu";
import Navbar from "./scenes/global/Navbar";
import Home from "./scenes/home/Home";
import ItemDetails from "./scenes/itemDetails/ItemDetails";
import Footer from "./scenes/global/Footer";
// import Chatbot from "./scenes/global/Chatbot";

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};
function App() {
  // Chatbot state
  // const [isChatOpen, setIsChatOpen] = useState(false);
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        {/* <Box
          style={{
            position: "fixed",
            bottom: "-5rem",
            right: "-4.5rem",
            zIndex: "10",
            width: "50%",
            maxWidth: "700px",
          }}
        >
          <TextsmsSharpIcon
            style={{
              color: "green",
              fontSize: "4rem",
              position: "fixed",
              right: "1rem",
              bottom: "0",
              zIndex: "15",
              cursor: "pointer",
              display: isChatOpen ? "none" : "block",
            }}
            onClick={() => setIsChatOpen(true)}
          />
          <CloseSharpIcon
            style={{
              color: "white",
              fontSize: "2rem",
              position: "fixed",
              right: "1rem",
              bottom: "34rem",
              zIndex: "15",
              cursor: "pointer",
              display: isChatOpen ? "block" : "none",
            }}
            onClick={() => setIsChatOpen(false)}
          />
          <Box
            style={{
              display: isChatOpen ? "block" : "none",
            }}
          >
            <Chatbot />
          </Box>
        </Box> */}
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="item/:itemId" element={<ItemDetails />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="checkout/success" element={<Confirmation />} />
        </Routes>
        <CartMenu />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
