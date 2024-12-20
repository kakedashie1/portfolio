// ハンバーガーメニューの開閉
document.getElementById("menu-icon").addEventListener("click", function (event) {
  const menu = document.getElementById("menu");
  if (menu.style.display === "block") {
    menu.style.display = "none"; // 非表示
  } else {
    menu.style.display = "block"; // 表示
  }
  event.stopPropagation(); // クリックイベントが親要素に伝播するのを防ぐ
});

// ページ全体のクリックでメニューを閉じる
document.addEventListener("click", function () {
  const menu = document.getElementById("menu");
  if (menu.style.display === "block") {
    menu.style.display = "none"; // メニューを閉じる
  }
});

// メニュー内のクリックでイベントを伝播させない
document.getElementById("menu").addEventListener("click", function (event) {
  event.stopPropagation(); // クリックイベントが親要素に伝播するのを防ぐ
});
