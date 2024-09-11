document.addEventListener("click", function (event) {
	// "学認でログイン" ボタンの要素を取得
	let loginBtn = document.querySelector('[href="https://cclms.kyoto-su.ac.jp/auth/shibboleth/index.php"');
	loginBtn.click();
});
