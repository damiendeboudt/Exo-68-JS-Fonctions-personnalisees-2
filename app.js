let myVar = document.getElementsByTagName("p");
console.log(myVar);
function random() {
    randomNumber = Math.random()*100;
    return Math.ceil(randomNumber);
}
for(let i =0; i < myVar.length; i++) {
    random();
    myVar[i].innerHTML = random()

}


