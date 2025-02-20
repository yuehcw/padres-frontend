import RootLayout from "@/layouts/RootLayout";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage";
import LeaderboardPage from "./pages/Leaderboardpage";

function App() {
  return (
    <RootLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
      </Routes>
    </RootLayout>
  );
}

export default App;
