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
       if(count<100000000){
            count=count+10000;

        }
        counter.textContent = count;
    })
    button2.addEventListener("click",function(){
        count=count+count/2000-1000;//どうやって小数点切り捨てるのか不明
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

function NumberGuessGame(){
    const gameContainer = document.getElementById("game-container");
    const randomNumber = Math.floor(Math.random() * 100)+1;
    let message = document.createElement("p");
    message.textContent = "数を当ててね";
    let input = document.createElement("input");
    input.type = "number";
    input.placeholder = "好きな数字を入力してください(1~100)"
    input.max = 100;
    input.min = 1;
    gameContainer.appendChild(message);
    gameContainer.appendChild(input);

    let button=document.createElement("button")
    button.textContent= "確認";

    button.addEventListener("click",function(){
        const val = parseInt(input.value)
        if(randomNumber == val){
            message.textContent = "正解"
        }else if(randomNumber < val){
            message.textContent = "大きい"
        }else{
            message.textContent = "小さい"
        }
        count++;
        countDisplay.textContent = `試行回数: ${count}`;

    })

    gameContainer.appendChild(button);
    let count= 0;
    const countDisplay = document.createElement("p")
    countDisplay.textContent = `試行回数: ${count}`;
    gameContainer.appendChild(countDisplay)
}

NumberGuessGame();
