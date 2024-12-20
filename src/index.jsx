import App from "./App";
import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));

function Page() {
  return (
    <>
      <App />
      Whatever you want
    </>
  );
}

root.render(
  <>
    <h1>hello hello beautiful</h1>
    <Page />
  </>
);
