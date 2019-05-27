import React, { lazy, Component, Suspense } from "react";
import { importMDX } from "mdx.macro";
import Container from "../Container";
import Details from "../Details";

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

const CV = lazy(() => importMDX("../../CV.mdx"));
const LI = lazy(() => importMDX("../../LI.mdx"));

const options = {
  year: "numeric",
  month: "long",
  day: "numeric"
};

const version = new Date(
  process.env.REACT_APP_BUILD_TIME * 1000
).toLocaleDateString("en-US", options);

// Copied from http:jquery-howto.blogspot.com/2009/09/get-url-parameters-values-with-jquery.html
const getUrlVars = () => {
  var vars = [],
    hash;
  var hashes = window.location.href
    .slice(window.location.href.indexOf("?") + 1)
    .split("&");
  for (var i = 0; i < hashes.length; i++) {
    hash = hashes[i].split("=");
    vars.push(hash[0]);
    vars[hash[0]] = hash[1];
  }
  return vars;
};
const urlParams = getUrlVars();

class App extends Component {
  render() {
    return (
      <Container>
        {urlParams["details"] && (
          <Suspense fallback={<div>Loading – Details...</div>}>
            <Details />
          </Suspense>
        )}
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
