let dataPacket2 = ""
let dataPacket1 = ""
let dataString = ""
let bodyAcceleration = 0
let heartRatePulseTime = 0
let lastHeartRatePulse = 0
let heartRateInMilliseconds = 0
let soundLevelReadout = 0
let suitIdentifier = 0
let gsrReadout = 0
let heartRatePulse = 0
serial.writeLine("Seeker [LV6]")
serial.writeLine("Space Suit V1.0")
serial.writeLine("Remember to change the suitIdentifier in the code!")
suitIdentifier = 1
radio.setGroup(70)
basic.forever(() => {
    heartRatePulse = pins.digitalReadPin(DigitalPin.P2)
    gsrReadout = pins.analogReadPin(AnalogPin.P1)
    for (let index = 0; index <= 10; index++) {
        soundLevelReadout = soundLevelReadout + pins.analogReadPin(AnalogPin.P0)
    }
    if (heartRatePulse && lastHeartRatePulse == 0) {
        heartRateInMilliseconds = input.runningTime() - heartRatePulseTime
        heartRatePulseTime = input.runningTime()
    } else {

    }
    lastHeartRatePulse = heartRatePulse
    soundLevelReadout = soundLevelReadout / 10
    bodyAcceleration = input.acceleration(Dimension.Strength)
    // Radio is limited to a certain amount of bytes.
    dataString = "i:" + suitIdentifier + ";" + "h:" + heartRateInMilliseconds + ";" + "g:" + gsrReadout
    if (dataPacket1 != dataString) {
        radio.sendString(dataString)
        dataPacket1 = dataString
        basic.pause(15)
    }
    dataString = "i:" + suitIdentifier + ";" + "s:" + soundLevelReadout + ";" + "a:" + bodyAcceleration
    if (dataPacket2 != dataString) {
        radio.sendString(dataString)
        dataPacket2 = dataString
        basic.pause(15)
    }
})
