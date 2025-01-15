import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import App from "./App.tsx";
import Footer from "./components/Footer.tsx";
import Header from "./components/Header.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Header />
        <App />
        <Footer />
    </StrictMode>
);
