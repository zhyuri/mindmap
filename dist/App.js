import React from "../_snowpack/pkg/react.js";
import {render} from "../_snowpack/pkg/react-dom.js";
import {MindmapEditor} from "./MindmapEditor.js";
import {MindmapViewer} from "./MindmapViewer.js";
import "./App.css.proxy.js";
const App = /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
  className: "leftPanel"
}, /* @__PURE__ */ React.createElement(MindmapEditor, {
  defaultValue: "# comment"
})), /* @__PURE__ */ React.createElement("div", {
  className: "rightPanel"
}, /* @__PURE__ */ React.createElement(MindmapViewer, null)));
render(App, document.getElementById("root"));
