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
- What this script ```process.js``` does is actually just executing WhatsApp's universal URL Scheme (wa.me)
- Read:
  - https://faq.whatsapp.com/5913398998672934
- The URL format:
  - Universal (works for both mobile and desktop):
    - https://wa.me/```CONTACT```?text=```MESSAGE```
  - ```CONTACT``` = Your recipient contact number. MUST include the country code (without ```+``` sign). Ex: 60125678964
  - ```MESSAGE``` = Your text message to send (URL encoded)

# Credits
- WhatsApp: https://www.whatsapp.com
- JSON List of Phone dial code for each Country Courtesy of "Goles" : https://gist.github.com/Goles/3196253
- Materialize: http://materializecss.com/
- Choices.js: https://github.com/Choices-js/Choices

# License
This library is under ```MIT license```, please look at the LICENSE file
