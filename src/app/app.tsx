import { SnackbarProvider } from "notistack";
import { ErrorBoundary } from "react-error-boundary";

import { fallbackRender } from "./error-boundary";
import { Routing } from "./providers/routing";
import "../shared/assets/style/_variables.css";
import "../shared/assets/style/_normalize.css";
import "../shared/assets/style/_global.css";
import "../shared/assets/style/_fonts.css";

const App = () => {
  return (
    <ErrorBoundary fallbackRender={fallbackRender}>
      <SnackbarProvider
        maxSnack={10}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Routing />
      </SnackbarProvider>
    </ErrorBoundary>
  );
};

export default App;
