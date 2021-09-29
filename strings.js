let name="harry";
let hisName="pankaj";
console.log(name+" "+hisName);

let html;
html="<h1>This is heading</h1>"+ 
"<p>this is paragraph</p>";
html=html.concat("harry " + "pankaj");
console.log(html);
console.log(html.length);
console.log(html.toUpperCase());
console.log(html[9]);
console.log(html.charAt(9));
console.log(html.indexOf("t"));
console.log(html.lastIndexOf("t"));
console.log(html.endsWith("j"));
console.log(html.includes("yyyyy"));
console.log(html.substring(0,8));
console.log(html.slice(0,7));
console.log(html.split(">"));
console.log(html.replace("p>this","p>it"));
console.log(html.indexOf('T'));

let fruit1="orange ";
let fruit2="apple";
let names="Suraj";
let myHTML=`Hello ${names}<h1>This Is A Heading</h1><p>This Is A Paragraph</p> You like ${fruit1} & ${fruit2} tydyhrffffffgdrthgfdsgreeth<h2>This is a boy</h2>`;
document.body.innerHTML=myHTML;