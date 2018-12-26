import React, { lazy, Component, Suspense } from "react";
import { importMDX } from "mdx.macro";
import Container from "../Container";

import "./css/_root.css";
import "./css/a.css";
import "./css/code.css";
import "./css/em.css";
import "./css/heading.css";
import "./css/list.css";
import "./css/p.css";
import "./css/small.css";

const CV = lazy(() => importMDX("../../CV.mdx"));
const LI = lazy(() => importMDX("../../LI.mdx"));

class App extends Component {
  render() {
    return (
      <Container>
        <h1>Stefan Huber · Curriculum{"\u00A0"}Vitae</h1>
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
