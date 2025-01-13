let names = ["Kevin", "Bob", "Janet"]


function spinthewheel() {
    document.getElementById("wheel").className = "spin"
    setTimeout(spinthewheel2electricboogaloo(), 5000)
}

function spinthewheel2electricboogaloo() {
    indexofname = getRandomInt(names.length)
    document.getElementById("outerwheel").innerHTML += names[indexofname]
    document.getElementById("wheel").className = ""

}

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random tysm!!
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }