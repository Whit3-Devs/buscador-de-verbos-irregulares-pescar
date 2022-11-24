import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ErrorNotFound from "./views/ErrorNotFound";
import Home from "./views/Home";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" elemnent={<ErrorNotFound />} />
      </Routes>
    </>
  );
}
