import { GoogleOAuthProvider } from "@react-oauth/google"
import ReactDOM from "react-dom/client"
import App from "./App"

const GOOGLE_CLIENT_ID = process.env.VITE_GOOGLE_CLIENT_ID || "";

if (!GOOGLE_CLIENT_ID) {
  console.error("No google client ID");
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
   <App />
  </GoogleOAuthProvider>  
)