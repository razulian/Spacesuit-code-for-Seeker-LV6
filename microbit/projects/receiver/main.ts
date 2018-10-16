radio.onDataPacketReceived( ({ receivedString }) =>  {
    radio.writeReceivedPacketToSerial()
})
serial.writeLine("Seeker [LV6]")
serial.writeLine("Space Suit Endpoint V1.0")
serial.writeLine("Waiting for data on radio. Please use radio group 70.")
radio.setGroup(70)


basic.forever(() => {
	
})