// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "#root {\n    display: flex;\n    width: 100%;\n    height: 90vh;\n    color: white;\n    background-color: #1e1e1e;\n    font-family: monospace;\n    font-size: 18px;\n}\n\n.leftPanel {\n    width: 50%;\n}\n\n.rightPanel {\n    width: 50%;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}