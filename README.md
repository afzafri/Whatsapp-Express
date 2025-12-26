# Whatsapp Express
Quick, simple script to send Whatsapp text messages directly to a contact number without having to save the contact. Can be implement in a website. <br>
Both Mobile and Desktop browser are supported. <br>
Demo: https://afzafri.github.io/Whatsapp-Express/ <br><br>
<img src="https://private-user-images.githubusercontent.com/14824387/530306705-d894423e-5325-4233-8263-f43da13b11d5.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjY3MzYxMTgsIm5iZiI6MTc2NjczNTgxOCwicGF0aCI6Ii8xNDgyNDM4Ny81MzAzMDY3MDUtZDg5NDQyM2UtNTMyNS00MjMzLTgyNjMtZjQzZGExM2IxMWQ1LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTEyMjYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUxMjI2VDA3NTY1OFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTc1N2JlYjIwZjk4Y2Q2ZjYyMGM0YTc0ZGRjY2MyMGU1ZjM4YzkxMThkYmQwMTY2ZGYwN2RiMjUzN2Q4OTQwMjkmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.siS5CnFUJNAgf1qnO_DKQG8mf8IQsUKIO-FPKHuHN5g" alt="Whatsapp Express Screenshot" width="250">

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
