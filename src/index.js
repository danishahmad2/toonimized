import "./index.css";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { library } from "@fortawesome/fontawesome-svg-core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  faBars,
  faPaperPlane,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import Login from "./Screens/Admin/login";
import DashBoard from "./Screens/Admin/dashboard";
import Order from "./Screens/Admin/order";
import Overview from "./Screens/Admin/overview";
import firebase from './helper'
const Home = React.lazy(() => import("./Screens/Home"));
const Pricing = React.lazy(() => import("./Screens/Pricing"));
const Cart = React.lazy(() => import("./Screens/Cart"));
const Terms = React.lazy(() => import("./Screens/Terms"));
const Faqs = React.lazy(() => import("./Screens/Faqs"));
const Policy = React.lazy(() => import("./Screens/Policy"));
const Contact = React.lazy(() => import("./Screens/Contact"));
const Artists = React.lazy(() => import("./Screens/Artists"));
const Artist = React.lazy(() => import("./Components/ArtistDetail"));
const Gallary = React.lazy(() => import("./Screens/Gallary"));
const Ordered = React.lazy(() => import("./Screens/Order/Ordered"));
const Step1 = React.lazy(() => import("./Screens/Order/Step1"));
const Step2 = React.lazy(() => import("./Screens/Order/Step2"));
const Step3 = React.lazy(() => import("./Screens/Order/Step3"));
const Step4 = React.lazy(() => import("./Screens/Order/Step4"));
const Step5 = React.lazy(() => import("./Screens/Order/Step5"));
const Step6 = React.lazy(() => import("./Screens/Order/Step6"));

library.add(faShoppingCart, faBars, faPaperPlane);

class App extends Component {
  componentDidMount=()=>{
    firebase.analytics()
  }
  render(){
    return (
      <React.Suspense
        fallback={
          <div class="d-flex justify-content-center">
            <div class="spinner-border text-warning" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        }
      >
        <Router>
          <Switch>
            <Route path="/faqs" component={Faqs} />
            <Route exact path="/" component={Home} />
            <Route path="/pricing" component={Pricing} />
            <Route path="/terms" component={Terms} />
            <Route path="/artist" component={Artist} />
            <Route path="/policy" component={Policy} />
            <Route path="/contact" component={Contact} />
            <Route path="/gallery" component={Gallary} />
            <Route path="/artists" component={Artists} />
            <Route path="/orderstep1" component={Step1} />
            <Route path="/orderstep2" component={Step2} />
            <Route path="/orderstep3" component={Step3} />
            <Route path="/orderstep4" component={Step4} />
            <Route path="/orderstep5" component={Step5} />
            <Route path="/orderstep6" component={Step6} />
            <Route path="/orderDone" component={Ordered} />
            <Route path="/shoppingCart" component={Cart} />
            <Route path="/admin/dashboard/overview" component={Overview} />
            <Route path="/admin/dashboard/orders/:id" component={Order} />
            <Route path="/admin/dashboard/:active" component={DashBoard} />
            <Route path="/admin" component={Login} />
          </Switch>
        </Router>
      </React.Suspense>
    );
    
  }
};

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
