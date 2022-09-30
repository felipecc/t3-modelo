import '../styles/globals.css';
import type { AppType } from "next/app";
import { trpc } from "../utils/trpc";
import App from "./components/App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Lista from "./components/Lista";


let RENDER_COUNT = 0;

// renders child components ONLY if running client-side
function ClientSideRendering({ children }: any) {

  RENDER_COUNT++;

  const [csrReady, setCsrReady] = useState(false);

  // NOTE: this will NEVER fire on Server Side, but it will (of course) run in the Browser
  useEffect(() => {

    console.log(`ClientSideRendering: 🔵 useEffect: RENDER_COUNT=${RENDER_COUNT}, csrReady=${csrReady}`)

    setCsrReady(true);

  }, []); // one-shot function. ie. will call ONLY once

  console.log(`ClientSideRendering: RENDER_COUNT=${RENDER_COUNT}, csrReady=${csrReady}` +
    `${csrReady ? '🟢' : '❌'}`
  );

  return csrReady ? children : null;
}

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClientSideRendering >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="lista1" element={<Lista label="Lista1" />} />
            <Route path="lista2" element={<Lista label="Lista2" />} />
            <Route path="lista3" element={<Lista label="Lista3" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ClientSideRendering >
  )

};

export default trpc.withTRPC(MyApp);
