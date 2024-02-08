import { BrowserRouter, Routes, Route, Outlet  } from "react-router-dom";
import LandingPageLearner from "./component/Learner/LandingPageLearner";
import Signup_Common from "./Global/Signup_Common";
import SignupCW from "./component/ContentWriter/SignUpCW";
import SignupLearner from "./component/Learner/SignupLearner";
import ApprovalCW from "./component/ContentWriter/ApprovalCW";
import SignupMentor from "./component/Mentor/SignupMentor";
import SignIn from "./Global/SignIn";
import LandingPageCW from "./component/ContentWriter/LandingPageCW";

const AppRoutes = () => {
  return (
    <BrowserRouter>
  <Routes>
    <Route path="/" element={<LandingPageLearner/>}/>
    <Route path="/signup" element={<Signup_Common/>}/>
    <Route path="/signup/learner" element={<SignupLearner/>}/>
    <Route path="/signup/contentwriter" element={<SignupCW/>}/>
    <Route path="/signup/mentor" element={<SignupMentor/>}/>
    <Route path="/login" element={<SignIn/>}/>
    <Route path="/articles" element={<LandingPageCW/>}/>
    <Route path="*" element={<h1>No Such Page</h1>} />
  </Routes>
</BrowserRouter>
  )
}

export default AppRoutes;