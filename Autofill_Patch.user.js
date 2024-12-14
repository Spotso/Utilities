// ==UserScript==
// @name         Autofill Patch
// @namespace    Spotso
// @version      2024-12-14
// @description  Patches input fields for password managers to autofill.
// @author       Anthony Ma
// @icon         https://raw.githubusercontent.com/Spotso/Logo/refs/heads/main/S_234x234_white.png
// @grant        none
// @include      https://online.simplii.com/*
// @include      https://www.cibconline.cibc.com/*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// @downloadURL  https://raw.githubusercontent.com/Spotso/Utilities/refs/heads/main/Autofill_Patch.user.js
// @updateURL    https://raw.githubusercontent.com/Spotso/Utilities/refs/heads/main/Autofill_Patch.meta.js
// ==/UserScript==

/*
References:
https://stackoverflow.com/a/39885771
https://github.com/Tampermonkey/tampermonkey/issues/553#issuecomment-417948210
https://api.jquery.com/category/selectors/
*/

/* globals jQuery, $, waitForKeyElements */

// domain name: jQuery selector
const selector = {
    "online.simplii.com": 'input[name="cardnumber"]',
    "www.cibconline.cibc.com": 'input[name="cardnumber"]'
};

waitForKeyElements(selector[window.location.hostname], changeClass);

function changeClass() {
    console.log("Input field patched to support autofill.");
    var elem = document.querySelector(selector[window.location.hostname]);
    var classname = elem.getAttribute("class");
    elem.setAttribute("class", `${classname} userName`);
}
