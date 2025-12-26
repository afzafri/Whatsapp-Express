var allCountryCodes = []; // Store all country codes
var choicesInstance = null; // Store Choices.js instance

window.onload = populate_code();

function populate_code()
{
	// Load JSON file using modern fetch API
	// JSON List of Phone dial code for each Country Courtesy of "Goles" : https://gist.github.com/Goles/3196253
	fetch('CountryCodes.json')
		.then(function(response) {
			return response.json();
		})
		.then(function(data) {
			// Store all country codes
			allCountryCodes = data;

			// Populate the select box with all countries
			populateSelect(allCountryCodes);

			// Initialize Choices.js for searchable dropdown
			initializeChoices();

			// Load last selected country from localStorage
			loadLastSelectedCountry();

			// Add event listener to save selection
			document.messageForm.dialcode.addEventListener('change', saveSelectedCountry);
		})
		.catch(function(error) {
			console.error('Error loading country codes:', error);
			alert('Failed to load country codes. Please refresh the page.');
		});
}

function populateSelect(countryList)
{
	var select = document.messageForm.dialcode;
	// Clear existing options except the first one
	select.innerHTML = '<option value="" disabled selected>Select Country Code</option>';

	// Frequently used countries (first 6 items in the list)
	var frequentlyUsedCount = 6;
	var frequentlyUsed = countryList.slice(0, Math.min(frequentlyUsedCount, countryList.length));
	var allCountries = countryList.slice(frequentlyUsedCount);

	// Add "Frequently Used" optgroup if we have frequently used countries
	if (frequentlyUsed.length > 0 && countryList.length > frequentlyUsedCount) {
		var frequentGroup = document.createElement("optgroup");
		frequentGroup.label = "Frequently Used";

		for(var i=0; i<frequentlyUsed.length; i++)
		{
			var option = document.createElement("option");
			option.text = frequentlyUsed[i].name + " ("+frequentlyUsed[i].dial_code+")";
			option.value = (frequentlyUsed[i].dial_code != null) ? frequentlyUsed[i].dial_code.replace("+", "") : "";
			frequentGroup.appendChild(option);
		}

		select.appendChild(frequentGroup);
	}

	// Add "All Countries" optgroup
	if (allCountries.length > 0 && countryList.length > frequentlyUsedCount) {
		var allGroup = document.createElement("optgroup");
		allGroup.label = "All Countries";

		for(var i=0; i<allCountries.length; i++)
		{
			var option = document.createElement("option");
			option.text = allCountries[i].name + " ("+allCountries[i].dial_code+")";
			option.value = (allCountries[i].dial_code != null) ? allCountries[i].dial_code.replace("+", "") : "";
			allGroup.appendChild(option);
		}

		select.appendChild(allGroup);
	} else {
		// If filtering resulted in fewer items, just show them without grouping
		for(var i=0; i<countryList.length; i++)
		{
			var option = document.createElement("option");
			option.text = countryList[i].name + " ("+countryList[i].dial_code+")";
			option.value = (countryList[i].dial_code != null) ? countryList[i].dial_code.replace("+", "") : "";
			select.appendChild(option);
		}
	}
}

function initializeChoices()
{
	var selectElement = document.getElementById('dialcode');
	choicesInstance = new Choices(selectElement, {
		searchEnabled: true,
		searchPlaceholderValue: 'Search country or code...',
		itemSelectText: '',
		shouldSort: false,
		position: 'bottom',
		removeItemButton: false,
		placeholder: true,
		placeholderValue: 'Select Country Code'
	});
}

function loadLastSelectedCountry()
{
	var lastSelected = localStorage.getItem('lastDialCode');
	if (lastSelected && choicesInstance) {
		choicesInstance.setChoiceByValue(lastSelected);
	}
}

function saveSelectedCountry()
{
	var select = document.messageForm.dialcode;
	if (select.value !== "") {
		localStorage.setItem('lastDialCode', select.value);
	}
}

function send()
{
	var dialcode = document.messageForm.dialcode.value;
	var phone = dialcode + document.messageForm.phone.value;
	var message = encodeURIComponent(document.messageForm.message.value); // properly encode the text for URL parameter

	// validation, check if phone number is valid number
	if(!isNaN(phone))
	{
		// Use WhatsApp's universal wa.me URL scheme (works for both mobile and desktop)
		// Format: https://wa.me/<phonenumber>?text=<message>
		var whatsappURL = "https://wa.me/" + phone;

		// Add message if provided
		if(message) {
			whatsappURL += "?text=" + message;
		}

		window.location = whatsappURL;
	}
	else
	{
		alert("Please enter a valid phone number.");
		document.messageForm.phone.focus();
	}

	return false;
}

// set current year
document.getElementById("currentYear").innerHTML = new Date().getFullYear();