// DOM Manipulation
const header = document.createElement("header");
document.body.appendChild(header);

const h1Element = document.createElement("h1");
h1Element.innerText = "DOM Manipulation";
header.append(h1Element);

const main = document.createElement("main");
document.body.appendChild(main);

const section = document.createElement("section");
main.append(section);

const input = document.createElement("input");
section.append(input);
input.type = "text";
input.placeholder = "name";

const submitButton = document.createElement("button");
submitButton.innerText = "submit";
submitButton.type = "submit";
section.append(submitButton);
