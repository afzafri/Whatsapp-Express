window.onload = populate_code();

function populate_code()
{
	// load json file locally in pure JS using XMLHttpRequest
	// JSON List of Phone dial code for each Country Courtesy of "Goles" : https://gist.github.com/Goles/3196253 
	var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'CountryCodes.json', true); 
    xobj.onreadystatechange = function () 
    {
          if (xobj.readyState == 4 && xobj.status == "200") 
          {
            // Parse JSON string into object
	    	var listcodes = JSON.parse(xobj.responseText);

	    	console.log(listcodes);
          }
    };
    xobj.send(null);
}

function send()
{
	var phone = document.messageForm.phone.value;
	var message = encodeURI(document.messageForm.message.value); // need to encode the text
	
	window.location = "whatsapp://send?text="+message+"&phone="+phone+"";
	/* 
	this is Whatsapp's URL scheme
	read: 
	https://www.whatsapp.com/faq/en/general/26000030
	https://www.whatsapp.com/faq/en/android/28000012
	*/

	return false;
}