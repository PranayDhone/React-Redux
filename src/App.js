import { Fragment } from "react";
import { useSelector } from "react-redux";

import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Fragment>
      <Header />
      {!isAuth && <Auth />} agar isAuth nahi hai to vahi page show karega
      {isAuth && <UserProfile></UserProfile>} agar isAuth hai to userProfile
      page show karega
      <Counter />
    </Fragment>
  );
}

export default App;
