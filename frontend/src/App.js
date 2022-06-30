import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import ImageFormPage from "./components/ImageFormPage";
import ImageList from "./components/Image";
import ImageDetail from "./components/ImageDetail";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/images">
            <ImageList />
          </Route>
          <Route exact path="/images/:imageId">
            <ImageDetail />
          </Route>
          <Route path="/images/new">
            <ImageFormPage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
