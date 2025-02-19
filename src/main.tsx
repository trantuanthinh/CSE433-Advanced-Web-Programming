import {AllCommunityModule, ModuleRegistry} from 'ag-grid-community';
import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import App from './App.tsx';
import "./index.css";

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);
createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <App />
    </StrictMode>
);
