import Main from "../bodylar/main/main";
import AllTestsPage from "../bodylar/allTests/allTest";
import ListeningDetail from "../tests/listening/ListeningDetail";
import WritingDetail from "../tests/writing/WritingDetail";
import ReadingDetail from "../tests/reading/ReadingDetail";
import SpeakingDetail from "../tests/speaking/SpeakingDetail";
import ResultsPage from "../bodylar/results/results";
import About from "../bodylar/about/about";
export const appRoutes = [
  { path: "/", element: <Main /> },
  { path: "/tests", element: <AllTestsPage /> },
  // testlar
  {path: "/tests/listening",element: <ListeningDetail/>},
  {path: "/tests/reading",element: <ReadingDetail/>},
  {path: "/tests/writing",element: <WritingDetail/>},
  {path: "/tests/speaking",element: <SpeakingDetail/>},
  {path: "/results",element: <ResultsPage/>},
  // About sahifasi
  {path: "/about",element: <About/>},
];
