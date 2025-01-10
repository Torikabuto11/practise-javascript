function RPS(){
    const choices = ["gu","choki","pa","muteki"];
    //この書き方は配列です。C言語参照
    
    // let select = document.createElement("select");
    // let option1 = document.createElement("option")
    // let option2 = document.createElement("option")
    // let option3 = document.createElement("option")
    // const gu = "gu"
    // option.value = "gu";
    // option.textContent = "gu";
    // select.appendChild(option1);
    // const choki = "choki"
    // option.value = "choki";
    // option.textContent = "choki";
    // select.appendChild(option2);
    // const pa = "pa"
    // option.value = "pa";
    // option.textContent = "pa";
    // select.appendChild(option3);
    
    // gameContainer.appendChild(select);


    let select = document.createElement("select");
    choices.forEach(choice =>{
        let option = document.createElement("option");
        option.value = choice;
        option.textContent = choice;
        select.appendChild(option);
    })
    gameContainer.appendChild(select);

    let image = document.createElement("img");
    image.alt = "Choice";
    image.style.width = "100px";
    image.style.height = "100px";
    image.src = "https://www.sozai-library.com/wp-content/uploads/2016/12/9357.jpg";

    gameContainer.appendChild(image);


    //forEach 配列など複数のデータがあるものを使える。全部やる関数。
    //配列.forEach(配列の中身 => {命令})


    
}
