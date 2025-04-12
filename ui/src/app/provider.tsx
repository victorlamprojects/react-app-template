import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import {
    GlobalStyle,
    getTheme
} from "universal-ui-react";
import { store } from "../stores";

type AppProviderProps = {
    children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <React.Suspense
      fallback={
        <div className="flex h-screen w-screen items-center justify-center">
            Loading
        </div>
      }
    >
        <Provider store={store}>
            <ThemeProvider theme={getTheme("dark")}>
                <GlobalStyle />
               {children} 
            </ThemeProvider>
        </Provider>
    </React.Suspense>
  );
};
