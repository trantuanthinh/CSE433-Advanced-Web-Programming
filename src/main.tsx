import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import App from "./App.tsx";
import Footer from "./components/layouts/Footer.tsx";
import Header from "./components/layouts/Header.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Header />
        <App />
        <Footer />
    </StrictMode>
);
