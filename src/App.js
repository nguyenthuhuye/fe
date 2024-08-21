import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import { ROUTES } from "./utils/constants";
import store from "./store/index";
import { Login } from "./views";
import { ColorModeContext, useMode } from "./theme";


const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)
const Layout = React.lazy(() => import("./containers/Layout"))

const App = () => {
  const [theme, colorMode] = useMode();

  return (
    <Provider store={store}>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router>
            <React.Suspense fallback={loading}>
              <Routes>
                <Route name="Login" path={ROUTES.LOGIN} element={<Login />} />
                <Route name="Home" path={ROUTES.HOME} element={<Layout />} />
              </Routes>
            </React.Suspense>
          </Router>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </Provider>
  );
}

export default App;
