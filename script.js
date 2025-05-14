const container = document.querySelector("#container");
const numberOfSquares = document.querySelector(".grid-number")


function displayItem(number) {
    let grid = number * number;
    for (let i = 0; i < grid; i++) {
        let item = document.createElement("div");
        item.setAttribute("class", "item");
        item.style["flex"] = `0 0 calc(100% / ${number})`
    
        item.addEventListener("mouseover", () => {
            let randomRGB = Math.floor(Math.random() * 256);
            let randomNumber = Math.random()
            item.style.backgroundColor = `rgb(${randomRGB},${randomRGB},${randomNumber})`
        })
    
        container.appendChild(item);
    }
}

numberOfSquares.addEventListener("click", () => {
    if(container.hasChildNodes()){
        while(container.firstChild){
            container.removeChild(container.firstChild)
        }
    }
    let num  = parseInt(prompt("How many squares do you want per row?"));
    if(num > 1 && num <= 100){
        displayItem(num);
    }else{
        alert("Invalid Number");
        return;
    }
})





