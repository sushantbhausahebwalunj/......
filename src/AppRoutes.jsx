import { BrowserRouter, Routes, Route, Outlet  } from "react-router-dom";
import LandingPageLearner from "./component/Learner/LandingPageLearner";
import Signup_Common from "./Global/Signup_Common";
import SignupCW from "./component/ContentWriter/SignUpCW";
import SignupLearner from "./component/Learner/SignupLearner";
import SignupMentor from "./component/Mentor/SignupMentor";
import SignIn from "./Global/SignIn";
import LandingPageCW from "./component/ContentWriter/LandingPageCW";
import Article from "./component/ContentWriter/Article";
import LearnerDashboard from "./pages/LearnerDashboard";
import ContentPageLearner from "./component/Learner/ContentPageLearner";
import ContentWriterDashboard from "./pages/ContentWriterDashboard";
import CreateContent from "./component/ContentWriter/CreateContent";
import MentorDashboard from "./pages/MentorDashboard";
import AdminDashboard from "./pages/AdminDashboard";

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
    <Route path="/articles" element={<Article/>}/>

    <Route path="/admin" element={<AdminDashboard/>}>
      <Route index element={<div>Welcome to Admin Dashboard</div>} />
    </Route>
    
    <Route path="/learner" element={<LearnerDashboard />}>
      <Route index element={<div>Welcome to Learner Dashboard</div>} />
      <Route path="content-learner" element={<ContentPageLearner />}/>
    </Route>

    <Route path="/contentwriter" element={<ContentWriterDashboard/>}>
      <Route index element={<div>Welcome to Content Writer Dashboard</div>} />
      <Route path="landing-cw" element={<LandingPageCW/>}/>
      <Route path="create-content" element={<CreateContent/>}/>
    </Route>

    <Route path="/mentor" element={<MentorDashboard/>}>
      <Route index element={<div>Welcome to Mentor Dashboard</div>} />
    </Route>



    <Route path="*" element={<h1>No Such Page</h1>}/>
  </Routes>
</BrowserRouter>
  )
}

export default AppRoutes;