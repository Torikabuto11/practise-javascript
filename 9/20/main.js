function changeColor(){
 
    document.getElementById("text").style.color = "red";
}
//document.querySelector("h1").style.color="red";


//document.getElementById("text").style.color = "red";
/*　これはドキュメントの中の「text」というIDを持っている
    タグのスタイルの色を赤にしてください*/

    let count = 0;
    
function increaseCount(){
    

    count++;
    document.getElementById("counter").innerText = count;
    if(count>4){
        count=0;
}
}

document.getElementById('btn').addEventListener('pointerdown', () => {
    const intervalId = setInterval(increment, 50)
  
    // document要素にイベント登録することで、クリックした後ボタンから動かしてもOK
    // once: true を指定して一度発火したらイベントを削除する
    document.addEventListener('pointerup', () => {        
      clearInterval(intervalId)
    }, { once: true })
  })
  
  
  const increment = () => {
  // インクリメント処理は記事の趣旨と関係ないので省略
    
function herasuCount(){
    

    count--;
    document.getElementById("counter").innerText = count;
}
