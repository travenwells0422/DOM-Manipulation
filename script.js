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
    h2Element.style.color = "white";

    const image = document.createElement("img");
    image.src = "/images/IMG_3561.JPG";
    image.style.width = "300px";
    image.style.height = "300px";
    image.style.objectFit = "container";
    image.style.objectPosition = "top";
    image.style.borderRadius = "4rem";

    section.append(h2Element);
    section.append(image);

    e.preventDefault();
}

// Inline - Styling
const body = document.querySelector("body");
body.style.backgroundColor = "black";
body.style.margin = "20px";

header.style.backgroundColor = "green";
header.style.height = "100px";
header.style.borderStyle = "solid";
header.style.borderWidth = "thick";
header.style.borderRadius = "2rem";
header.style.textAlign = "center";

h1Element.style.paddingTop = "10px";

main.style.marginTop = "40px";
