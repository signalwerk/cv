import React, { Component, Suspense } from "react";

/* eslint-disable import/no-webpack-loader-syntax */
import LI from "!babel-loader!@mdx-js/loader!../../LI.mdx";
import CV from "!babel-loader!@mdx-js/loader!../../CV.mdx";

import Container from "../Container";

import "./css/fonts.css";
import "./css/_root.css";
import "./css/a.css";
import "./css/code.css";
import "./css/em.css";
import "./css/heading.css";
import "./css/list.css";
import "./css/p.css";
import "./css/small.css";
import "./css/hr.css";

const options = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

const version = new Date(
  process.env.REACT_APP_BUILD_TIME * 1000
).toLocaleDateString("en-US", options);

class App extends Component {
  render() {
    return (
      <Container>
        <h1>Stefan Huber · Curriculum{"\u00A0"}Vitae</h1>
        <small>Updated · {version}</small>
        <Suspense fallback={<div>Loading – Curriculum Vitae...</div>}>
          <CV />
        </Suspense>
        <Suspense fallback={<div>Loading – Letter of Intent...</div>}>
          <LI />
        </Suspense>
      </Container>
    );
  }
}

export default App;
