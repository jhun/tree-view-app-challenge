import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import PreloadProvider from "./contexts/preload";
import CompaniesProvider from "./contexts/companies";
import FiltersProvider from "./contexts/filters";
import AssetProvider from "./contexts/asset";

function App() {
  return (
    <PreloadProvider>
      <CompaniesProvider>
        <FiltersProvider>
          <AssetProvider>
            <RouterProvider router={router} />
          </AssetProvider>
        </FiltersProvider>
      </CompaniesProvider>
    </PreloadProvider>
  );
}

export default App;
