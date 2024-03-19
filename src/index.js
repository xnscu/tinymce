import * as editor from "./editor";

const heading = () => {
  const element = document.createElement("h1");
  element.innerText = "TinyMCE Vite demo";
  return element;
};

const editorArea = () => {
  const element = document.createElement("textarea");
  element.id = "editor";
  return element;
};

const parent = document.createElement("p");
parent.appendChild(editorArea());
document.body.appendChild(heading());
document.body.appendChild(parent);

editor.render();
