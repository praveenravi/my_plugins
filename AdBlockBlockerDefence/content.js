hostnames = window.location.hostname;
res = false;
if(hostnames == "www.ndtv.com"){
	res = true;
}

if(res){
	document.getElementById('ins_storybody').style.display = '';
}else{
	//alert("false");
}

