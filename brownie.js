//brownie stops you getting sued over cookies :)
//dynamic URL
const url = window.location.hostname;
//When page is loaded
window.addEventListener("load", isCookie);
//check for cookie using getCookie()
function isCookie() {
  let CookiePlaced = getCookie("BrownieCookie");
  if (CookiePlaced != url) {
    console.log(
      "Cookies were not previously accepted on " +
        url +
        " - displaying cookie bar"
    );
    bakebrownie();
  } else {
    console.log("Cookies have previously been accepted on: " + url);
  }
}
function getCookie(cname) {
  console.log("Searching for cookie, results:");
  var name = cname + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
// if theres no cookie show brownie
function bakebrownie() {
  let brownie = document.createElement("aside");
  document.body.appendChild(brownie);
  brownie.setAttribute("id", "Brownie");
  brownie.innerHTML =
    "<p>By continuing to browse " +
    url +
    " you agree to the use of cookies in your browser.</p>" +
    "<section id='buttons'><button id='eatbrownie'>Got it</button><a href='https://europa.eu/european-union/abouteuropa/cookies_en'>More info here</button></a>";
  document.getElementById("eatbrownie").addEventListener("click", eatbrownie);
}
//create a cookie,
function bakeCookie() {
  setCookie("BrownieCookie", url, 365);
}
//and remove brownie from dom
function eatbrownie() {
  document.body.removeChild(Brownie);
  console.log("Cookies accepted by user, creating cookie:");
  bakeCookie();
}
//method for adding a cookie to the browser
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  console.log("" + cname + "=" + cvalue + ";" + expires);
}

/*
Copyright 2018 Jack Gerrard

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
