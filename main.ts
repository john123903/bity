namespace SpriteKind {
    export const GAme = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    game.over(false, effects.blizzard)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    game.over(false, effects.blizzard)
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 3 3 3 . . 3 3 3 . 3 . . . 
        . . . 3 . . 3 3 3 . 3 3 3 . . . 
        . . . 3 . 3 . . 3 3 . 3 . . . . 
        . . . 3 3 3 . . . 3 3 . 3 . . . 
        . . . 3 3 . . . . 3 . . 3 . . . 
        . . 3 . 3 . . . 3 . . . 3 3 . . 
        . . . . 3 . . . 3 3 . . . 3 . . 
        . . . . . 3 . 3 3 3 . . . 3 3 . 
        . . . . . . 3 3 3 . . . . . 3 . 
        . . . . . . . 3 . . . . . 3 . . 
        . . . . . . . 3 . . . . . 3 . . 
        . . . . . . . 3 3 3 3 3 3 . . . 
        . . . . . . . . . . 3 3 . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 3 3 3 . . . . . . . . . . 
        . . 3 3 . 3 . . . . . . . . . . 
        . . 3 . . 3 . . . 3 . 3 3 . . . 
        . . 3 . . 3 . . 3 3 3 3 . 3 3 . 
        . . 3 . . 3 . . 3 3 . . . . 3 . 
        . . 3 . . 3 . 3 3 . . . . . 3 . 
        . . 3 . . 3 . 3 . . . . . 3 3 . 
        . . 3 . . 3 . 3 3 . 3 3 3 . . . 
        . . 3 . . 3 . . 3 3 3 . . . . . 
        . . 3 . . 3 . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        3 3 3 3 3 3 3 . . . . . . . . . 
        3 . . . . . 3 3 3 3 3 . . . . . 
        3 . . . . . 3 . . . 3 . . . . . 
        3 . . . 3 3 3 3 3 3 3 3 3 . . . 
        3 . . . 3 . 3 3 3 3 3 3 3 3 . . 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . 
        . . . . 3 . . . . . . . 3 . . . 
        . . . . 3 . . . . . . . 3 . . . 
        . . . . 3 . . . . . . . 3 . . . 
        . . . . 3 . . . . . . . 3 . . . 
        . . . . 3 . . . . . . . 3 . . . 
        . . . . 3 . . . . . . . 3 . . . 
        . . . . 3 . . . . . . . 3 . . . 
        . . . . 3 3 3 3 3 3 3 3 3 . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 3 3 3 3 3 3 3 . . . . 
        . . . . . 3 . . . . . 3 . . . . 
        . . . . . 3 . . . . . 3 . . . . 
        . . . . . 3 . . . . . 3 . . . . 
        . . . . . 3 3 3 3 3 3 3 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 . . . . . . . . . . . . . . 3 
        3 . . . . . . . . . . . . . . 3 
        3 . . . . . . . . . . . . . . 3 
        3 . . . . . . . . . . . . . . 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    false
    )
    mySprite.say("PAUSE!")
    info.setScore(999)
    game.over(true, effects.splatter)
})
// This is how you connected if it listen
controller.player1.onEvent(ControllerEvent.Connected, function () {
    music.playMelody("C5 B B B G - - - ", 120)
    music.playMelody("C5 B B B G - - - ", 120)
})
let mySprite: Sprite = null
music.baDing.play()
mySprite = sprites.create(img`
    ...............bbbbbbbbbbbbbbbbbbb...............
    ...........bbbbdd111111111111111ddbbbb...........
    ........bbbd1111111111111111111111111dbbb........
    ......bbd11111111dddddddddddddd111111111dbb......
    ....bbd1111111ddd11111111111111dddd1111111dbb....
    ...bd111111ddd111111111111111111111ddd111111db...
    ..bd11111ddd111ddddddddddddddddddd111ddd11111db..
    .bd11111dd111dddd111111111111111dddd111dd11111db.
    .b11111d111ddd111111111111111111111ddd111d11111b.
    bd11111d1ddd1111111111111111111111111ddd1111111db
    b11111d1ddd111111111111111111111111111ddd1d11111b
    b11111ddddd111111111111111111111111111ddddd11111b
    b11111ddddd111111111111111111111111111dddbd11111b
    b111111dddd111111111111111111111111111dddb111111b
    bd111111dddd1111111111111111111111111dddbd11111db
    .b1111111dddd11111111111111111111111dddbd111111b.
    .bd1111111dbbdd1111111111111111111dddbbd111111db.
    ..bd11111111dbbdd111111111111111dddbbd1111111db..
    ...bd111111111dbbbbbbdddddddddddddd111111111db...
    ....bbd11111111111dbbbbbbbbbddd11111111111dbb....
    ......bbdd11111111111111111111111111111ddbb......
    ........bbbdd11111111111111111111111ddbbb........
    ...........bbbbbddd11111111111dddbbbbb...........
    ................bbbbbbbbbbbbbbbbb................
    `, SpriteKind.Player)
mySprite.say("Mity Games")
info.setLife(1)
game.onUpdateInterval(500, function () {
	
})
