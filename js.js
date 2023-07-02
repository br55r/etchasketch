const container = document.getElementById("container");
const resetButton = document.getElementById("resetButton");

resetButton.addEventListener("click", () => {
    let squaresPerSide = prompt("Enter the number of squares per side (maximum 100):");
    squaresPerSide = parseInt(squaresPerSide);

    if (isNaN(squaresPerSide) || squaresPerSide <= 0 || squaresPerSide > 100) {
        alert("Invalid input. Please enter a number between 1 and 100.");
        return;
    }

    clearGrid();
    makeGrid(squaresPerSide);
});

function clearGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function makeGrid(squaresPerSide) {
    container.style.setProperty("--grid-size", squaresPerSide);

    for (let c = 0; c < squaresPerSide * squaresPerSide; c++) {
        let cell = document.createElement("div");
        cell.innerText = c + 1;
        cell.className = "grid-item";
        container.appendChild(cell);
    }

    const gridItems = document.getElementsByClassName("grid-item");
    Array.from(gridItems).forEach((item) => {
        item.addEventListener("mouseover", () => {
            item.style.backgroundColor = getRandomColor();
        });
    });
}

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

makeGrid(16);

const videoBackground = document.getElementById('videoBackground');
videoBackground.src = 'SaveTube.io-Hiro .mp4';