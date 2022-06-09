import User from "./components/Pages/User";
import Profile from "./components/Pages/Profile";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<User user_page_url="https://reqres.in/api/users" />}
        />

        <Route
          path="/user/:id"
          element={<Profile profile_url="https://reqres.in/api/users" />}
        />
      </Routes>
    </>
  );
}

export default App;
