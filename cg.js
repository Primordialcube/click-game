const gridItems = document.getElementsByClassName("grid-item")


function selectRandom() {
    return Math.floor(Math.random() * 101) + 1
}

selectRandom()
console.log(selectRandom());

