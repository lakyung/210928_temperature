music.setVolume(20)
basic.forever(function () {
    basic.showNumber(input.temperature())
})
basic.forever(function () {
    if (31 <= input.temperature()) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        pins.digitalWritePin(DigitalPin.P5, 0)
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P15, 1)
        music.ringTone(523)
        basic.pause(100)
    } else if (27 <= input.temperature()) {
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P5, 0)
        pins.digitalWritePin(DigitalPin.P8, 1)
        pins.digitalWritePin(DigitalPin.P15, 0)
        music.stopAllSounds()
    } else {
        pins.digitalWritePin(DigitalPin.P2, 1)
        pins.digitalWritePin(DigitalPin.P5, 1)
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P15, 0)
    }
})
