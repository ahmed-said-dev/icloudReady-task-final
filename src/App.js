import ContextProvider from "./Context/Context";
import "./App.css";
import Home from "./Home/Home";
import Cart from "./SideNav/Cart.jsx";
import Kitchen from "./SideNav/kitchen";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <ContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/kitchen" element={<Kitchen />} />
        </Routes>
      </ContextProvider>
    </>
  );
}
