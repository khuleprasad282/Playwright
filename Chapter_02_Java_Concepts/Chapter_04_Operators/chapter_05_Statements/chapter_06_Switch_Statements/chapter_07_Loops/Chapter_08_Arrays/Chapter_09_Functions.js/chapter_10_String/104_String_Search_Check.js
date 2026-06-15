let url = "httpd://staging.vwo.com/api/login?retry=true";

url.includes("staging");
url.includes("Production");

url.startsWith("https");
url.startsWith("http://");
url.endsWith("true");

console.log(url.indexOf("a"));
console.log(url.lastIndexOf("a"));
console.log(url.lastIndexOf("nothere"));

console.log(url.search(/login/));
url.search(/\d+/);