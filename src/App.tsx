import React, { ReactElement, ReactNode } from "react";

// import { Routes, Route, Link, Navigate } from "react-router-dom";
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import Login from "@pages/Login";
import ProtectedRoute from "@components/ProtectedRoute";

const DivContainerMain = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 100vh;
  align-items: center;
  .main {
    height: 100vh;
    background-color: #dfdfe7;
    width: 100%;
  }
`;

const App = () => {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  useHotkeys([["mod+J", () => toggleColorScheme()]]);
  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{ colorScheme }}
      >
        <Routes>
          <Route index path="/" element={<Login />} />
          <Route element={<ProtectedRoute isAllowed={false} />}>
            <Route path="/home" element={<Login />} />
            <Route path="/dashboard" element={<Login />} />
            <Route path="/next" element={<div>Next</div>} />
          </Route>
        </Routes>
      </MantineProvider>
    </ColorSchemeProvider>
  );
};

// function App() {
//   return (
//     <div>
//       {/* <div>
//         <Link to="/">Home</Link>
//         <Link to="/next">next</Link>
//       </div>
//       <Routes>
//         <Route path="/" element={<div>Home</div>} />

//         <Route path="/next" element={<div>Next</div>} />
//       </Routes> */}
//     </div>
//   );
// }

export default App;
