# Spacesuit Code for Seeker [LV6]
This is code to be used in the spacesuit. Easiest way to use it is to have pxt in Node.JS installed.

Run the following command from inside the microbit-folder `pxt serve`
You should be able to use Microsoft Makecode in your webbrowser under `localhost:3232/index.html`
From there on out you can press the Projects-button to find the Receiver and Transmitter program. 

## Transmitter-code (Spacesuit):

You will have to change the suitIdentifier-variable for each new suit before programming the Microbit.
Sound sensor goes to Grove Shield P0-connector,  GSR to P1 and heartrate to P2.
You then only need to connect the Microbit to a USB powerbank to make untethered use of the sensors possible.


## Receiver-code (Radio -> Serial):

All data that is sent over the Microbit's radio will be forwarded over Serial as JSON-strings. (baudrate: 115200)
Received JSON-strings have the followign format: {t:MicrobitTimeAlive,s:SerialNumber,n:"Text"} where "Text" is the data that was sent over radio.
All sensor readings start with an identifier (e.g. "i:") and end with a semicolon. This should allow simple use of String search() method. 
No filtering is being done on the Microbit-transmitter. If you want to filter data then you must do that on the receiving end.

The following data is possible:
i: suit id
h: heartrate period in milliseconds
g: galvanic skin response value
s: soundlevel
a: acceleration 

**Examples of JSON-strings:**
> {"t":113727,"s":0,"n":"i:1;h:0;g:566"}
{"t":113744,"s":0,"n":"i:1;s:892;a:1025"}
{"t":113803,"s":0,"n":"i:1;s:878;a:1027"}
{"t":113863,"s":0,"n":"i:1;s:891;a:1028"}
{"t":113906,"s":0,"n":"i:1;h:0;g:566"}
{"t":113967,"s":0,"n":"i:1;h:0;g:567"}
{"t":114032,"s":0,"n":"i:1;s:889;a:1027"}
{"t":114079,"s":0,"n":"i:1;h:0;g:566"}
{"t":114140,"s":0,"n":"i:1;s:926;a:1010"}
