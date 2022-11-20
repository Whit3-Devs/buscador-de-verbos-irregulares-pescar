import { Route, Routes } from "react-router-dom";
import ErrorNotFound from "./views/ErrorNotFound";
import Home from "./views/Home";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="*" elemnent={<ErrorNotFound />} />
    </Routes>
  )
}
