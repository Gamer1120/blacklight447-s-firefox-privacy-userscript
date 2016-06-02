# blacklight447-s-firefox-privacy-userscript
Have you ever thought about hardening your Firefox? 
Did you ever wanted to be able to block the most things adblockers cannot? Well, with this new userscript you can!
This userscript is made to block broken crypto and makes Firefox spit out less identifible information on the internet.


First let me explain what a userscript is, and what it does(in case you don't know it yet).
A userscript in firefox is a way to tell Firefox what kind of settings you prefer, and it is mostly used to change advanced settings in firefox.
it is a file that the user himself must create, since it is not there by default.
When Firefox start's, it use's the prefs.js file to read what kind of settings a preferred, 
these are normally the standard settings.
Once the user creates or imports a user.js file, the userscript 
will override the standard prefs.js file and start up with the preferences stated in the userscript.

Now I will explain how to install this userscript.

Step 1: First open up a text editor, it doesn't matter which aslong as its a text editor,  

Step 2: Now, copy paste the text from the userscript I made to the text editor. 
        after that, click on save as, and name the userscript "users.js" (NOTE: without the quotation marks!)
        and save it to your documents folder.

Step 3: Now we need to locate your Firefox's default profiles folder, this step can differ from os to os. 
        But on Windows it is mostly looks like this: 
        this pc > (C:) > users > your username > Appdata > Roaming > Mozilla > Firefox > Profiles > random numbers and letters .default

Step 4: Once you have located the default profile folder, go to your document's folder, 
        and now copy paste the user.js file IN the default profile folder.

Step 5: Now the last thing we need to do is delete the prefs.js inside the default profle folder, since it still has the standard values.
        Now you just need to open Firefox. It will now generate a new prefs.js file with the values from the user.js file.


I will now explain how to deinstall the userscript in case you don't want to use it anymore.

Step 1: Locate the default profile again, and go to the user.js file

Step 2: Make sure Firefox is closed, once closed, delete the user.js file AND the prefs.js file.

Step 3: Now open up Firefox again, it will now regenerate a new prefs.js with the standard preferences, 
        and started up with the default Firefox values.

Side notes:
Although this userscript is a good start if you want to make your firefox more secure and more private, it is still lacking.
It does not provide anonimity, just better privacy and security. I really recommend using it along side other measures, 
plugins like Noscript and Ublock origin for example.
Also some sites may break when you use this script, if you really have to use that particulair site, you can choose to A: deinstall the script ( as explained above).
To B: alter the script in such a way that it works(NOTE: only do this if you know what you are doing).
Or C: use a different browser to visit the particulair site.

If anyone has tips for me to improve the script, wants to point out something I got wrong or missed, or simply wants to say thanks,
you are free to do so in the comments or you can email me at blacklight447@protonmail.com :) 
