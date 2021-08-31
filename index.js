'use strict'

function executeScript() {
  let code = document.getElementById("code").value

  /*
  We'll insert the evaluation code as a <script type='module'> into the HTML body.
  This is done instead of a direct eval so that the browser can recognize ES6 import
  statements that'll be present in the evaluation code.
  https://www.sitepoint.com/using-es-modules/
  */

  let userScript = document.getElementById("userScript")
  if (userScript) userScript.remove()

  userScript = document.createElement('script')
  userScript.setAttribute("id", "userScript")
  userScript.setAttribute("type", "module")


  /*
  If we wanted to isolate scope, we can use the function wrapping technique from
  https://2ality.com/2014/01/eval.html : 'new Function()'

    let fn = new Function(`"use strict";\n ${code}`);
    fn()
  */
  userScript.text = `"use strict";\n ${code}`

  document.body.appendChild(userScript);
}
