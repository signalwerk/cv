import { Component, Suspense } from "react";

/* eslint-disable import/no-webpack-loader-syntax */
import LetterOfIntent from "../../LetterOfIntentFontra.mdx";
import { MDXProvider } from "@mdx-js/react";

import Container from "../Container";
import { HeadingH1, HeadingH2, HeadingH3, version } from "../Headings";

import "../root";

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
          <Suspense fallback={<div>Loading – Letter of Intent...</div>}>
            <div className="app__part-li">
              <LetterOfIntent />
            </div>
          </Suspense>
        </MDXProvider>
      </Container>
    );
  }
}

export default App;
