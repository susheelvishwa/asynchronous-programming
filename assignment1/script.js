let timer = document.querySelector("#timer")
let start = document.querySelector("#start");
let Stop = document.querySelector("#stop");
let reset = document.querySelector("#reset");


let i = 0;

function handlestart() {
    // console.log("start");

    function createtimer() {
        timer.innerHTML = i
    }

    id1 = setInterval(function () {
        createtimer()
        i++
    },1000)
}

function handleStop() {
    //   console.log("stop");
    clearInterval(id1)
}

function handlereset() {
    //   console.log("reset");
    clearInterval(id1)
    i = 0;
    timer.innerHTML = i;
}



start.addEventListener("click", function () {
    handlestart()
})

Stop.addEventListener("click", function () {
  handleStop();
});

reset.addEventListener("click", function () {
  handlereset();
});