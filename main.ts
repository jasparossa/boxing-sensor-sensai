input.setAccelerometerRange(AcceleratorRange.OneG)
serial.writeString("started")
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    music.setVolume(47)
    serial.writeValue("s", input.acceleration(Dimension.Strength))
    if (input.acceleration(Dimension.Strength) > 1600) {
        music.playTone(247, music.beat(BeatFraction.Quarter))
        basic.pause(100)
    }
})
