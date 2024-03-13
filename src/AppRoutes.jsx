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
import WriteContent from "./component/ContentWriter/WriteContent";
import Feedback from "./Global/Feedback"
import UserManagement from "../src/component/Admin/UserManagment"
import ArticleManagement from "../src/component/Admin/ArticleManagement"
import LandingPageMentor from "./component/Mentor/LandingPageMentor";
import ProfilePageLearner from "./component/Learner/ProfilePageLearner";
import ChangePassword from "./component/Learner/ChangePassword";
import InviteProfile from "./component/Learner/InviteProfile";
import EditProfile from "./component/Learner/EditProfile";
import Delete from "./component/Learner/Delete"
import SavedArticle from "./component/ContentWriter/SavedArticle";

import ApprovalCW from "./component/ContentWriter/ApprovalCW";
import FetchFeedback from "./component/Admin/FetchFeedback"
import ArticleContent from "./component/ContentWriter/ArticleContent";

const AppRoutes = () => {
  return (
    <BrowserRouter>
  <Routes>
    <Route path="/" element={<LandingPageLearner/>}/>
    <Route path="/signup" element={<Signup_Common/>}/>
    <Route path="/signup/learner" element={<SignupLearner/>}/>
    <Route path="/signup/contentwriter" element={<SignupCW/>}/>
    <Route path="/signup/contentwriter/approval" element={<ApprovalCW/>} />
    <Route path="/signup/mentor" element={<SignupMentor/>}/>
    <Route path="/login" element={<SignIn/>}/>
    <Route path="/articles" element={<Article/>}/>
    <Route path="/articles/:title" element={<ArticleContent />} />
   

    <Route path="/admin" element={<AdminDashboard/>}>
      <Route index element={<div>Welcome to Admin Dashboard</div>} />
      <Route path="user-management" element={<UserManagement/>}/>
      <Route path="article-management" element={<ArticleManagement/>}/>
      <Route path="feedback-management" element={<FetchFeedback/>}/>
    </Route>
    
    <Route path="/learner" element={<LearnerDashboard />}>
      <Route index element={<div>Welcome to Learner Dashboard</div>} />
      <Route path="content-learner" element={<ContentPageLearner />}/>
      <Route path="profile" element={<ProfilePageLearner/>}/>
      <Route path="profile/change-pass" element={<ChangePassword />} />
      <Route path="profile/articles" element={<Article/>} />
      <Route path="profile/saved-articles" element={<SavedArticle/>} />
      <Route path="profile/request-todel" element={<Delete/>} />
      <Route path="profile/invite" element={<InviteProfile />} />
      <Route path="profile/edit-profile" element={<EditProfile />} />
    </Route>

    <Route path="/contentwriter" element={<ContentWriterDashboard/>}>
      <Route index element={<div>Welcome to Content Writer Dashboard</div>} />
      <Route path="landing-cw" element={<LandingPageCW/>}/>
      <Route path="create-content" element={<CreateContent/> }/>
        <Route path="write-content" element={<WriteContent/>}/>
    </Route>

    <Route path="/mentor" element={<MentorDashboard/>}>
      <Route index element={<div>Welcome to Mentor Dashboard</div>} />
      <Route path="landing-mentor" element={<LandingPageMentor/>}/>

    </Route>

    
    <Route path="/feedback" element={<Feedback/>}/>

    <Route path="*" element={<h1>No Such Page</h1>}/>
  </Routes>
</BrowserRouter>
  )
}

export default AppRoutes;   