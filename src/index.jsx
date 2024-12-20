import App from "./App";
import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));

function Page() {
  return (
    <>
      <App />
    </>
  );
}

root.render(
  <>
    <Page />
  </>
);
