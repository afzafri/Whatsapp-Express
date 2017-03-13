# Whatsapp Express
Quick, simple script to send Whatsapp text messages directly to a contact number without having to save the contact. Can be implement in a website. <br>
Both Mobile and Desktop browser are supported. <br>
Demo: https://afzafri.github.io/Whatsapp-Express/ <br><br>
<img src="https://github.com/afzafri/Whatsapp-Express/blob/master/screenshot.png" alt="Whatsapp Express Screenshot" width="250">

# Installation
Drag and drop the files to your web

# Usage
- Browse the page that host this script with your mobile phone browser
- Fill in the form and hit send.

# Process
- What this script ```process.js``` does is actually just executing the Whatsapp's URL Scheme. 
- Read:
  - https://www.whatsapp.com/faq/en/general/26000030
  - https://www.whatsapp.com/faq/en/android/28000012
- The URL is: whatsapp://send?text=```MESSAGE```&phone=```CONTACT```
  - ```MESSAGE``` = Your text message to send
  - ```CONTACT``` = Your receipient contact number. MUST include with the country code (without ```+``` sign). Ex: 60125678964

# Credits
- Whatsapp: https://www.whatsapp.com
- JSON List of Phone dial code for each Country Courtesy of "Goles" : https://gist.github.com/Goles/3196253 
- Materialize: http://materializecss.com/
- Detect mobile browsers script: http://detectmobilebrowsers.com/

# License
This library is under ```MIT license```, please look at the LICENSE file
