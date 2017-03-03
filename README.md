# Whatsapp Express
Quick, simple script to send Whatsapp text messages directly to a contact number without having to save the contact. Can be implement in a website.

# Installation
Drag and drop the files to your web

# Usage
- Browse the page that host this script with your mobile phone browser
- Fill in the form and hit send.

# Process
- What this script does is actually just executing the Whatsapp's URL Scheme. 
- Read:
  - https://www.whatsapp.com/faq/en/general/26000030
  - https://www.whatsapp.com/faq/en/android/28000012
- The URL is: whatsapp://send?text=```MESSAGE```&phone=```CONTACT```
  - ```MESSAGE``` = Your text message to send
  - ```CONTACT``` = Your receipient contact number. MUST include with the country code (without ```+``` sign). Ex: 60125678964

# License
This library is under ```MIT license```, please look at the LICENSE file
