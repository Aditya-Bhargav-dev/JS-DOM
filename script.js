var box = document.createElement("div");
box.className="container";
box.style.backgroundColor='#eee';
box.style.textAlign="center";

//Use prompt to read a value from user and display it in the span element.
var span = document.createElement("span");
span.style.color="orange";
var userValue = prompt("Please enter text to display it in the span element.");
span.innerHTML=userValue + " (This is user entered text)";

//div used to change colour when a user moves the mouse over the element.
var divcolour = document.createElement("div");
divcolour.innerHTML="Hover on this to change colour";
divcolour.onmouseover=colour;
divcolour.onmouseout=reset;

//<h1> tag which contains a paragraph.
var h1 = document.createElement("h1");
h1.innerHTML="<p> This a paragraph. Click on any part of this to get x & y coordinates </p>"

h1.addEventListener('click',coordinates,true);

//<span> tag which the mouse X and Y coordinates.
var span1 = document.createElement("span");

//div to show console
var box1 = document.createElement("div");
box1.className="container";
box1.style.backgroundColor='black';
box1.style.color="yellow";
box1.style.textAlign="center";

//textarea for character counts.
var textarea = document.createElement("textarea");
var console = document.createElement("div");
console.innerHTML="Console:";
var consoletext = document.createElement("div");
textarea.oninput = counttext;

//appending elements to document body
box.append(divcolour,span,h1,span1);
box1.append(textarea,console,consoletext);

document.body.append(box,box1);

//Color a span/div element content when a user moves the mouse over the element.
function colour()
{
    divcolour.style.color='blue';
}

//Reset a span/div element content when a user moves the mouse over the element.
function reset()
{
    divcolour.style.color='black';
}

//Function to display the mouse X and Y coordinates in a <span> tag when you click on a <h1> tag which contains a paragraph.
function coordinates(e)
{
    var x = e.clientX;
    var y = e.clientY;
    var coords = "X coords: " + x + ", Y coords: " + y +'<br><br>';
    span1.innerHTML = coords;
}

//functiuon to count character in the textarea.
function counttext()
{
    consoletext.innerHTML=textarea.textLength;
}
