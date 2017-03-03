function send()
{
	var phone = document.messageForm.phone.value;
	var message = encodeURI(document.messageForm.message.value); // need to encode the text
	
	window.location = "whatsapp://send?text="+message+"&phone="+location+"";
	/* 
	this is Whatsapp's URL scheme
	read: 
	https://www.whatsapp.com/faq/en/general/26000030
	https://www.whatsapp.com/faq/en/android/28000012
	*/

	return false;
}