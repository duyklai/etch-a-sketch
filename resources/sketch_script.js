//JS file for etch-a-sketch
const body = document.querySelector('body');
var colorBtn = document.querySelector('#color');
let container = document.querySelector('#gridContainer');
let customColor = false;
var r,g,b;
const string = "1fr ";


//Creating a numDiv x numDiv grid of square divs
function generateGrid(numDiv)
{
    //Creates div grid by utilizing the CSS styling method
    //templateRows and templateCols both take string "1fr" a 'numDiv' number of times
    container.style.gridTemplateRows = string.repeat(numDiv);
    container.style.gridTemplateColumns = string.repeat(numDiv);

    //For loops creates each cell (div) element and adds it to classList where eventListener will be added
    for(let i = 0; i < numDiv*numDiv; i++)
    {
        const cell = document.createElement('div');
        cell.classList.add("cell");
        container.appendChild(cell);
        cell.addEventListener('mouseover', function(e) {
            if(customColor)
            {
                random();
                e.target.style.backgroundColor = `rgb(${r.toString()}, ${g.toString()}, ${b.toString()})`;
            }
            else
                e.target.style.backgroundColor = "black";
        });
    }
}

function random()
{
    customColor = true;
    r = Math.floor(Math.random()*255);
    b = Math.floor(Math.random()*255);
    g = Math.floor(Math.random()*255);
}

function remake()
{
    destroy();
    customColor = false;
    let userTemp = userDim();
    generateGrid(userTemp);
}

function userDim()
{
    let userNum = prompt("Please enter new grid dimension: ");
    return userNum;
}

function destroy()
{
    while(container.firstChild)
        container.removeChild(container.firstChild);
}

function changeColor()
{
    if (colorBtn.innerHTML == "Black")
    { 
        colorBtn.innerHTML = "Random";
        customColor = true;
    }
    else 
    {
        colorBtn.innerHTML = "Black";
        customColor = false;
    }
}