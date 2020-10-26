import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Top from "./components/pages/Top";
import Form from "./components/pages/Form";
import BlogDetail from "./components/pages/BlogDetail";
import EditBlog from "./components/pages/EditBlog";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Top />
        </Route>
        <Route path="/form">
          <Form />
        </Route>
        <Route path="/detail/:id">
          <BlogDetail />
        </Route>
        <Route path="/edit/:id">
          <EditBlog />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
