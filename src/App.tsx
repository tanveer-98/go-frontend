import React,{ useState , Suspense , CSSProperties } from "react";
import reactLogo from "./assets/react.svg";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home";
// import Login from "./routes/login";
// import Register from "./routes/register";

const LazyLogin = React.lazy(()=>import('./routes/login'))
const LazyRegister = React.lazy(()=>import('./routes/register'))
const LazyAuth  = React.lazy(()=>import('./components/Auth/Auth'))
const LazyHomeCalculator = React.lazy(()=>import('./components/HomeCalculator'))

// import { useProgressiveImage } from "./hooks/useProgressiveImage";
import {ClipLoader} from 'react-spinners';

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "white",
};

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LazyLogin />} />
      <Route path="/register" element={<LazyRegister />} />
      <Route path="/auth" element={<LazyAuth />} />
      <Route path = '/homeCalculator' element={
      
      <Suspense fallback={<div className="w-screen h-screen ">
         <ClipLoader
        color="#000000"
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      </div>}>
        <LazyHomeCalculator />
      </Suspense>

      
      } />
    </Routes>
  );
}

export default App;
