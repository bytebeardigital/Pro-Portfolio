// Invoke this function on button click or whatever other use case
function setupInsta(){
	let appId = 332103212020700;
	let redUri = window.location.origin + "/IG-Feed";
	let url = `https://api.instagram.com/oauth/authorize?client_id=${appId}&redirect_uri=${redUri}&scope=user_profile,user_media&response_type=code`;
	window.open(url, "_blank").focus();
}

https://pro-portfolio.bytebeardigital.com/IG-Feed/?code=AQARKAsDD2Us4Xfy1ZkJaG9wHxZPgwV55_x97TXEQ6nqoz4zJOhyQ1mpApZEYoyvgNkJFVma7TRwrHJ-KtWFPgi5qqb-zKX5idYKUYMvVf1zoQ0NH4XEFNxN_ANtPK-h-Ygd5ow03dcmGtOD4UQN95CpogDIk7ff1ZrPfyoP2hVcnhqUEZht1NoYBhF6Qu07iGnwzX1M5KcDrbovh6XJOQ3E2uqgQEjksMpSZorPuRBJzg

https://api.instagram.com/oauth/authorize/?client_id=332103212020700&redirect_uri=https://pro-portfolio.bytebeardigital.com/IG-Feed/&response_type=token