import { HashRouter, Routes, Route, Navigate, useParams, useNavigate, useLocation } from 'react-router-dom';
import NavBar from './components/General/NavBar';
import BackgroundPage from './pages/BackgroundPage';
import IntroductionPage from './pages/IntroductionPage';
import LandingPage from './pages/LandingPage';
import QuizListPage from './pages/Quiz/QuizListPage';
import QuizPage from './pages/Quiz/QuizPage';
import GuidedPracticeList from './pages/GuidedPractice/GuidedPracticeListPage';
import CompletedPractice from './pages/GuidedPractice/CompletedPracticePage';
import AchievementPage from './pages/AchievementPage';
import Main from './components/GuidedPractice/Base/Main';
import Quiz1Data from './data/Quiz/Quiz1/questions.json';
import CasePage from './pages/CasePage';
import PracticeCaseListPage from './pages/PracticeCase/PracticeCaseListPage';
import EvaluationPage from './pages/PracticeCase/EvaluationPage';
import FinalAssessmentIntro from './pages/FinalAssessment/IntroPage';
import FinalAssessmentComplete from './pages/FinalAssessment/CompletedFinalPage';
import MaxAttemptsPage from './pages/MaxAttemptsPage';

// Wrapper components that inject v5-style props into class components via hooks.
function GuidedPracticeRoute() {
    const params = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const routeProps = { match: { params }, history: { push: navigate, replace: (p) => navigate(p, { replace: true }), location }, location };
    return (
        <CasePage title="Guided Practice">
            <Main category="guidedpractice" {...routeProps} />
        </CasePage>
    );
}

function PracticeRoute() {
    const params = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const routeProps = { match: { params }, history: { push: navigate, replace: (p) => navigate(p, { replace: true }), location }, location };
    return (
        <CasePage title={`Practice Case #${params.caseId}`}>
            <Main category="practice" {...routeProps} />
        </CasePage>
    );
}

function FinalAssessmentRoute() {
    const params = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const routeProps = { match: { params }, history: { push: navigate, replace: (p) => navigate(p, { replace: true }), location }, location };
    return (
        <CasePage title="Final Assessment">
            <Main category="final_assessment" {...routeProps} />
        </CasePage>
    );
}

function EvaluationRoute() {
    const params = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    return <EvaluationPage match={{ params }} history={{ push: navigate, location }} location={location} />;
}

function MaxAttemptsRoute() {
    const params = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    return <MaxAttemptsPage match={{ params }} history={{ push: navigate, location }} location={location} />;
}

// Layout wrapper: renders NavBar + nested routes for all pages except the landing page.
function AppLayout() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="introduction" element={<IntroductionPage />} />
                <Route path="background" element={<BackgroundPage />} />
                <Route path="quiz" element={<QuizListPage />} />
                <Route path="quiz/1" element={<QuizPage quizData={Quiz1Data} />} />
                <Route path="guidedpractice" element={<GuidedPracticeList />} />
                <Route path="guidedpractice/complete/prenatalrad" element={<CompletedPractice title="Prenatal Rapid Aneuploidy Detection" />} />
                <Route path="guidedpractice/complete/pregnancyloss" element={<CompletedPractice title="Pregnancy Loss" />} />
                <Route path="guidedpractice/:caseType" element={<GuidedPracticeRoute />} />
                <Route path="achievements" element={<AchievementPage />} />
                <Route path="practice" element={<PracticeCaseListPage />} />
                <Route path="practice/:caseType/:caseId" element={<PracticeRoute />} />
                <Route path=":category/:caseType/:caseId/evaluation" element={<EvaluationRoute />} />
                <Route path="final_assessment" element={<FinalAssessmentIntro />} />
                <Route path="final_assessment/:caseType/:caseId" element={<FinalAssessmentRoute />} />
                <Route path="final_assessment/complete" element={<FinalAssessmentComplete />} />
                <Route path=":category/:caseType/:caseId/max_attempts" element={<MaxAttemptsRoute />} />
                <Route path="*" element={<Navigate to="/introduction" replace />} />
            </Routes>
        </>
    );
}


export default function AppRouter() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/*" element={<AppLayout />} />
            </Routes>
        </HashRouter>
    );
}
