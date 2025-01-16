function ClickCounterGame(){
    let count = 0;

    const gameContainer = document.getElementById("game-container");

    let button1 = document.createElement("button");
    button1.textContent = "借金額";

    let button2 = document.createElement("button");
    button2.textContent = "返金額";
    
    let resetbutton = document.createElement("button");
    resetbutton.textContent = "白紙";

    let counter = document.createElement("p");
    counter.textContent = count;

    button1.addEventListener("click",function(){
        count=count+10000;
        counter.textContent = count;
    })
    button2.addEventListener("click",function(){
        count=count-10000+count/0.2;//どうやって小数点切り捨てるのか不明
        counter.textContent = count;

    })
    resetbutton.addEventListener("click",function(){
        count=0;
        counter.textContent = count;

    })
    gameContainer.appendChild(button1);
    gameContainer.appendChild(button2);
    gameContainer.appendChild(resetbutton);
    gameContainer.appendChild(counter);

}
ClickCounterGame();

