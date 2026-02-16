import { Component, Suspense } from "react";

import CurriculumVitae from "../../CurriculumVitae.mdx";
import { MDXProvider } from "@mdx-js/react";

import Container from "../Container";
import { HeadingH1, HeadingH2, HeadingH3, version } from "../Headings";

import "../root";
import "./styles.css";

class App extends Component {
  render() {
    return (
      <Container>
        <MDXProvider
          components={{
            h1: HeadingH1,
            h2: HeadingH2,
            h3: HeadingH3,
          }}
        >
          <h1>Stefan Huber · Curriculum{"\u00A0"}Vitae</h1>
          <small>Updated · {version}</small>
          <Suspense fallback={<div>Loading – Curriculum Vitae...</div>}>
            <div className="app__part-cv">
              <CurriculumVitae />
            </div>
          </Suspense>
        </MDXProvider>
      </Container>
    );
  }
}

export default App;
