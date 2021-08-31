'use strict'

function executeScript() {
  let code = document.getElementById("code").value

  /* 2. new Function() - https://2ality.com/2014/01/eval.html */
  let fn = new Function(`"use strict";\n ${code}`);
  fn()
}
