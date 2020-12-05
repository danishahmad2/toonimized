import React, { Component, Suspense } from "react";
import Header from "../../Components/Header";
import Cover from "./Cover";
const Character = React.lazy(() => import("./getCharacter"));
const Opinions = React.lazy(() => import("./Opinions"));
const Customize = React.lazy(() => import("./Customize"));
const Choose = React.lazy(() => import("./Choose"));
const Artist = React.lazy(() => import("./Artist"));
const Works = React.lazy(() => import("./Works"));
const Footer = React.lazy(() => import("../../Components/Footer"));

export default class Home extends Component {
  render() {
    const { history } = this.props;
    return (
      <div>
        <Header History={history} />
        <Cover />
        <Suspense fallback={<div>Loading...</div>}>
          <Customize History={history} />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Choose />{" "}     
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Works />{" "}
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Opinions />{" "}
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Artist history={history} />{" "}
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Character history={history} />{" "}
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Footer History={history} />{" "}
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}></Suspense>
      </div>
    );
  }
}
