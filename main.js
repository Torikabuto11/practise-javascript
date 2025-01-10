function ClickCounterGame(){
    let count = 0;
    const gameContainer = document.getElementById("game-container");

    let button1 = document.createElement("button");
    button1.textContent = "借金額";

    let counter = document.createElement("p");
    counter.textContent = count;

    button1.addEventListener("click",function(){
        count=count+10000;
        counter.textContent = count;
    })
    gameContainer.appendChild(button1);
    gameContainer.appendChild(counter);

}
ClickCounterGame();