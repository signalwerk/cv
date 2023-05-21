import React, { Component, Suspense } from "react";

/* eslint-disable import/no-webpack-loader-syntax */
import LetterOfIntent from "../../LetterOfIntent.mdx";
import CurriculumVitae from "../../CurriculumVitae.mdx";
import { MDXProvider } from "@mdx-js/react";

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
import "./styles.css";

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z" />
    </svg>
  );
}
function headingToSlug(heading) {
  let newHeading = "";

  if (typeof heading === "string") {
    newHeading = heading;
  }

  if (Array.isArray(newHeading)) {
    newHeading = heading[0];
  }

  newHeading = newHeading
    .toLowerCase()
    .trim() // trim leading and trailing spaces
    .replace(/\s+/g, "-") // replace spaces with hyphens
    .replace(/[^a-z0-9-]/g, "") // remove characters that are not alphanumeric or hyphens
    .replace(/[-]+/g, "-"); // replace multiple hyphens with single hyphen

  return newHeading;
}

const Heading = ({ level, children }) => {
  const slug = headingToSlug(children);

  const Component = `h${level}`;

  return (
    <Component id={slug}>
      <a href={`#${slug}`}>
        <Icon />
      </a>
      {children}
    </Component>
  );
};

const HeadingH1 = (props) => <Heading level={1} {...props} />;
const HeadingH2 = (props) => <Heading level={2} {...props} />;
const HeadingH3 = (props) => <Heading level={3} {...props} />;

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
