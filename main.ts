input.onPinPressed(TouchPin.P0, function () {
    control.reset()
})
let SPIDERMAN = game.createSprite(0, 2)
let MALEFICA = game.createSprite(randint(1, 4), randint(0, 4))
MALEFICA.set(LedSpriteProperty.Brightness, 100)
basic.forever(function () {
    while (input.buttonIsPressed(Button.A)) {
        SPIDERMAN.change(LedSpriteProperty.X, -1)
        basic.pause(100)
    }
    while (input.buttonIsPressed(Button.B)) {
        SPIDERMAN.change(LedSpriteProperty.X, 1)
        basic.pause(100)
    }
    while (input.logoIsPressed()) {
        SPIDERMAN.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
    }
    while (input.pinIsPressed(TouchPin.P2)) {
        SPIDERMAN.change(LedSpriteProperty.Y, 1)
        basic.pause(100)
    }
    if (SPIDERMAN.isTouching(MALEFICA)) {
        basic.showIcon(IconNames.Yes)
        music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
        game.gameOver()
    }
})
