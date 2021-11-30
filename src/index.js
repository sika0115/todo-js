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

  //button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ(div)を未完了リストから削除
    deleteFromIncompleteList(completeButton.parentNode);

    //完了リストに追加する要素
    const addTarget = completeButton.parentNode;

    //TODO内容取得
    const text = addTarget.firstElementChild.innerText; //liタグ（一番最初の子要素）の中身を取得

    //div以下の初期化
    addTarget.textContent = null; //初期化

    //liタグ生成
    const li = document.createElement("li");
    li.innerText = text; //liにtextが設定される
    //buttonタグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    //divタグの子要素に各要素設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    //完了したTODOリストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  //button(削除)タグ生成・・・要素を指定してDOMから削除する
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ(div)を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  //divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了のリスト（ul）にdivを追加
  document.getElementById("incomplete-list").appendChild(div);
};

//未完了リストから指定の要素を削除する
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target); //removeChildで子要素を消す
};

//add-buttonに対してクリックイベント時にonClickAdd関数を呼ぶ
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
