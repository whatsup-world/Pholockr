import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import ImageFormPage from "./components/ImageFormPage";
import ImageList from "./components/Image";
import ImageDetail from "./components/ImageDetail";
import ImageEditPage from "./components/ImageEditPage";
import * as sessionActions from "./store/session";
import {thunkGetAllImages} from "./store/image";
import {thunkGetComments} from "./store/comment";

import Navigation from "./components/Navigation";



function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(thunkGetAllImages());
    dispatch(thunkGetComments());
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
          <Route path="/images/:imageId">
            <ImageDetail />
          </Route>
          <Route path="/editimage">
            <ImageEditPage />
          </Route>
          <Route exact path="/upload">
            <ImageFormPage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
