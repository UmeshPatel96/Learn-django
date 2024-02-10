let counter = 0
let secondarycounter = 10
let x = setInterval(() => {
    console.log(counter)
    if (counter < 10) {

        document.getElementById("red").style.cssText = 'box-shadow: 0px 0px 30px rgb(255, 0, 0); background-color: rgb(255, 0, 0);'
        document.getElementById("green").style.cssText = 'background-color: rgb(0, 73, 0);'
        document.getElementById("counter").innerText = secondarycounter - counter
    }
    else if (counter == 10) {
        document.getElementById("counter").innerText = secondarycounter
        document.getElementById("red").style.cssText = 'background-color: rgb(121, 6, 6);'
        document.getElementById("green").style.cssText = 'box-shadow: 0px 0px 30px rgb(15, 253, 15); background-color: rgb(15, 253, 15);'
    }
    else if (counter < 20 && counter > 10) {
        document.getElementById("counter").innerText = secondarycounter
        secondarycounter--
    }
    else if (counter = 20) {
        document.getElementById("counter").innerText = secondarycounter
        counter = 0
        secondarycounter = 10
    }
    counter++

}, 1000);