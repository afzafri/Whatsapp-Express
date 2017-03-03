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

	    	for(var i=0;i<listcodes.length;i++)
	    	{
	    		// append each codes to select box
	    		var option = document.createElement("option");
				option.text = listcodes[i].name;
				option.value = listcodes[i].dial_code.replace("+", ""); // no need for '+' sign
				var select = document.messageForm.dialcode;
				select.appendChild(option);
	    	}
	    	
          }
    };
    xobj.send(null);
}

function send()
{
	var dialcode = document.messageForm.dialcode.value;
	var phone = document.messageForm.phone.value;
	var message = encodeURI(document.messageForm.message.value); // need to encode the text
	
	window.location = "whatsapp://send?text="+message+"&phone="+dialcode+phone+"";
	/* 
	this is Whatsapp's URL scheme
	read: 
	https://www.whatsapp.com/faq/en/general/26000030
	https://www.whatsapp.com/faq/en/android/28000012
	*/

	return false;
}