import Main from "../bodylar/main/main";
import AllTestsPage from "../bodylar/allTests/allTest";
import ListeningDetail from "../tests/listening/ListeningDetail";
import WritingDetail from "../tests/writing/WritingDetail";
import ReadingDetail from "../tests/reading/ReadingDetail";
import SpeakingDetail from "../tests/speaking/SpeakingDetail";
import ResultsPage from "../bodylar/results/results";
import About from "../bodylar/about/about";
import ReadingTest from "../tests/reading/ReadingTest";
import Writing from "../tests/writing/WritingTest";
import Listening from "../tests/listening/ListeningTest";
export const appRoutes = [
  { path: "/", element: <Main /> },
  { path: "/tests", element: <AllTestsPage /> },
  // testlar (Describe)
  { path: "/tests/listening", element: <ListeningDetail /> },
  { path: "/tests/reading", element: <ReadingDetail /> },
  { path: "/tests/writing", element: <WritingDetail /> },
  { path: "/tests/speaking", element: <SpeakingDetail /> },
  { path: "/results", element: <ResultsPage /> },
  // testlar 
  { path: "/tests/reading/start", element: <ReadingTest /> },
  { path: "/tests/listening/start", element: < Listening/> },
  { path: "/tests/writing/start", element: < Writing/> },
  // { path: "/tests/speaking/start", element: <SpeakingDetail /> },
  // About sahifasi
  { path: "/about", element: <About /> },
];
