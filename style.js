  //背景色変更
//変更したい色リスト
const colors = ['lightblue', 'lightgreen', 'lightcoral'];
//今何番目なのか覚えておく変数
let currentIndex = 0;
//HTMLのonclick="changeColor()"から呼び出される関数
function changeColor() {
  //現在の番号の色を背景色にする
  document.body.style.backgroundColor = colors[currentIndex];
  //番号を一つ進める
  currentIndex++;

  //もし番号が色の数３つになったら０番に戻す
  if (currentIndex >= colors.length) {
    currentIndex = 0;
  }
}

//表示ボタンをクリックしたとき
function showText() {
  //HTMLの入力欄と表示させるエリアを取得
  const myInput = document.getElementById('text');
  const outputContainer = document.getElementById('output-container');

  const inputValue = myInput.value.trim();//前後の不要な空白を削除

  if (inputValue === "") {
    //入力欄が空の場合
    alert("入力値が空です。");//アラートを表示
    return;//ここで処理を終了(これ以降のコードは表示されない)
  }

  if (outputContainer.textContent === "表示エリア") {
    outputContainer.textContent = "";
  }

  //古いハイライトを探して古いハイライトを消す
  const oldItems = document.querySelectorAll('.text-item');
  oldItems.forEach(function (item) {
    item.classList.remove('text-item');
  });

  //入力欄に文字がある場合のみ、以下の処理が進む
  const newRow = document.createElement('div');//新しい行を作成
  newRow.textContent = inputValue;
  newRow.className = "text-item";

  //出力エリアの末尾に、作った新しい行を追加する
  outputContainer.appendChild(newRow);
}

// 【2】追加ボタンをクリックしたときに動く関数
function addTable() {
  const myInput = document.getElementById('text');
  const tableBody = document.getElementById('table-body');
  const showBtn = document.getElementById('show-btn');

  const inputValue = myInput.value.trim();

  if (inputValue === "") {
    alert("入力値が空です。");
    return;
  }

  const currentRows = tableBody.querySelectorAll('tr');
  if (currentRows.length >= 3) {
    currentRows[0].remove();//0番目の要素を削除
  }

// 表用のパーツ（行やマス、ボタン）を作成
  const newTr = document.createElement('tr');
  const textTd = document.createElement('td');
  const deleteTd = document.createElement('td');
  const deleteBtn = document.createElement('button');

  textTd.textContent = inputValue;
  textTd.className = "text-cell"; // CSSで左寄せにするクラス

  deleteBtn.textContent = "削除";
  deleteBtn.type = "button";


    // 削除ボタンが押されたときの動き
  deleteBtn.onclick = function () {
    newTr.remove(); // 行を消す
    updateTableStatus();//行数カウントとボタン状態の更新
  };

  // パーツを組み立てて表に追加
  deleteTd.appendChild(deleteBtn);
  newTr.appendChild(textTd);
  newTr.appendChild(deleteTd);
  tableBody.appendChild(newTr);

  updateTableStatus();//行数カウントとボタン状態の更新

  myInput.value = ""; // 入力欄を空にする
}

// 【3】テーブルの状態（行数カウント・表示ボタンの見た目）を更新する関数
function updateTableStatus() {
  const tableBody = document.getElementById('table-body');
  const showBtn = document.getElementById('show-btn');
  const rowCountSpan = document.getElementById('row-count');

  // 現在の行数をカウント
  const rowCount = tableBody.querySelectorAll('tr').length;

  // 数字の書き換え
  rowCountSpan.textContent = rowCount;

  // 3件以上になったら非表示クラス(hidden)を付け、3件未満なら外す
  if (rowCount >= 3) {
    showBtn.classList.add('hidden');
  } else {
    showBtn.classList.remove('hidden');
  }
}

for (let i = 1; i <= 5; i++){
  console.log(i);
}
