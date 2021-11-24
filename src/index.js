import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値をの取得し初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = ""; //取得後の初期化

  //divタグ生成
  const div = document.createElement("div"); //JS上でHTMLのDOM生成
  div.className = "list-row"; //class名の付与

  //liタグ生成
  const li = document.createElement("li");
  li.innerText = inputText; //listの中の要素設定

  //divタグの子要素に各要素を設定
  div.appendChild(li);

  //未完了のリスト（ul）にdivを追加
  document.getElementById("incoplete-list").appendChild(div);
};

//add-buttonに対してクリックイベント時にonClickAdd関数を呼ぶ
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
