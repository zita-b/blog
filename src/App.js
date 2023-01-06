import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import Create from "./Create";
import Edit from "./Edit";
import BlogDetails from "./BlogDetails";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="bg">
          <Navbar />
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>

              <Route path="/create">
                <Create />
              </Route>

              <Route path="/blogs/:id">
                <BlogDetails />
              </Route>

              <Route path="/edit/:id">
                <Edit />
              </Route>

              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
