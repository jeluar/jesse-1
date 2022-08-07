basic.showLeds(`
    # . . . #
    # # . # #
    # . # . #
    # . . . #
    # . . . #
    `)
basic.showLeds(`
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    `)
basic.showLeds(`
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    . . # # #
    `)
basic.showLeds(`
    . # # # .
    . # . # .
    . # # # .
    . # . # .
    . # . # .
    `)
basic.showLeds(`
    . # # # .
    . # . . .
    . # # # .
    . . . # .
    . # # # .
    `)
basic.forever(function () {
    music.playTone(147, music.beat(BeatFraction.Whole))
    music.playTone(131, music.beat(BeatFraction.Breve))
})
