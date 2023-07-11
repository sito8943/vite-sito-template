import ReactDOM from "react-dom/client";

// app
import App from "./App.jsx";

// contexts
import { NotificationProvider } from "./contexts/NotificationProvider";
import { LanguageProvider } from "./contexts/LanguageProvider";
import { UserProvider } from "./contexts/UserProvider";
import { ModeProvider } from "./contexts/ModeProvider";

// styles
import "./index.css";
// animations
import "./assets/animations/agrow.css";
import "./assets/animations/shake.css";
import "./assets/animations/appear.css";
import "./assets/animations/entrance.css";

// tippy
import "tippy.js/dist/tippy.css"; // optional

ReactDOM.createRoot(document.getElementById("root")).render(
  <LanguageProvider>
    <UserProvider>
      <ModeProvider>
        <NotificationProvider>
          <App />
        </NotificationProvider>
      </ModeProvider>
    </UserProvider>
  </LanguageProvider>
);
