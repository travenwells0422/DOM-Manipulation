// DOM Manipulation
const header = document.createElement("header");
document.body.appendChild(header);

let h1Element = document.createElement("h1");
h1Element.innerText = "DOM Manipulation";
header.append(h1Element);

let main = document.createElement("main");
document.body.appendChild(main);

let section = document.createElement("section");
main.append(section);

const input = document.createElement("input");
section.append(input);
input.type = "text";
input.placeholder = "name";

const submitButton = document.createElement("button");
submitButton.innerText = "submit";
submitButton.id = "submit";
section.append(submitButton);

// Function for submit button
document.querySelector("#submit").addEventListener("click", submitOnclick);
function submitOnclick(e) {
    const value = document.querySelector("input").value;
    const h2Element = document.createElement("h2");
    h2Element.innerText = value;
    section.append(h2Element);
    e.preventDefault();
}
