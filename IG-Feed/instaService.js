// Invoke this function on button click or whatever other use case
function setupInsta(){
	let appId = 332103212020700;
	let redUri = window.location.origin + "/IG-Feed";
	let url = `https://api.instagram.com/oauth/authorize?client_id=${appId}&redirect_uri=${redUri}&scope=user_profile,user_media&response_type=code`;
	window.open(url, "_blank").focus();
}