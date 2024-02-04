import { BrowserRouter, Routes, Route } from "react-router-dom";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<LandingPageLearner/>}/>
        </Routes>
    </BrowserRouter>
  )
}
