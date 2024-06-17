import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import PreloadProvider from "./contexts/preload";
import CompaniesProvider from "./contexts/companies";

function App() {
  return (
    <PreloadProvider>
      <CompaniesProvider>
        <RouterProvider router={router} />
      </CompaniesProvider>
    </PreloadProvider>
  );
}

export default App;
