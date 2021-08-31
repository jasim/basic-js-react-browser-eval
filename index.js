'use strict'

function executeScript() {
  let code = document.getElementById("code").value

  /* Transpile with Babel to desugar JSX */
  code = `"use strict";\n ${code}`
  code = Babel.transform(code, {presets: ["react"]}).code;

  /*
  Evaluate the code. We do this by inserting it as a <script type='module'>.
  This is done instead of a direct eval so that we can utilize browser-side
  ES6 module imports. This way we can avoid an explicit bundling step.
  (https://www.sitepoint.com/using-es-modules/)
  */

  let userScript = document.getElementById("userScript")
  if (userScript) userScript.remove()

  userScript = document.createElement('script')
  userScript.setAttribute("id", "userScript")
  userScript.setAttribute("type", "module")


  /*
  If we wanted to isolate scope, we could use the function wrapping technique from
  https://2ality.com/2014/01/eval.html : 'new Function()'

    let fn = new Function(`"use strict";\n ${code}`);
    fn()
  */
  userScript.text = code

  document.body.appendChild(userScript);
}
