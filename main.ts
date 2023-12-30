namespace SpriteKind {
    export const Items = SpriteKind.create()
    export const portails = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Items, function (sprite, otherSprite) {
    info.changeScoreBy(100)
    sprites.destroy(otherSprite, effects.hearts, 500)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    Dic_taDor.setImage(img`
        . . . . 5 5 5 5 . . . . . 
        . . 5 5 5 5 5 5 5 5 . . . 
        . 5 5 5 5 5 5 c 5 5 5 . . 
        5 5 5 5 5 5 c c 5 5 5 c . 
        5 5 5 c 5 5 5 5 5 5 5 c . 
        c c c 5 5 5 e e 5 5 c c . 
        5 5 5 5 5 e e 5 5 c c 5 . 
        5 5 5 b 6 e e 6 b 5 5 5 . 
        . f 4 1 6 4 4 6 1 4 f . . 
        . f e 4 4 4 4 4 4 e f . . 
        . f f f e e e e f f f . . 
        f e f b 7 7 7 7 b f e f . 
        e 4 f 7 7 7 7 7 7 f 4 e . 
        e e f 6 6 6 6 6 6 f e e . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    Dic_taDor.setImage(img`
        . . . . . . . . . . . . . 
        . . . 5 5 5 5 5 5 . . . . 
        . 5 5 5 5 5 5 5 5 5 . . . 
        . 5 5 5 5 5 5 c 5 5 5 . . 
        5 5 5 5 c 5 5 5 c 5 5 5 . 
        5 c 5 5 c c 5 5 5 c c 5 5 
        5 c c 5 5 5 5 e 5 5 5 5 5 
        5 5 f 5 5 5 5 e e f f f . 
        5 5 e e 5 b 6 e e f f f . 
        5 5 e 4 e 1 6 4 4 f f . . 
        . 5 5 f e 4 4 4 4 f . . . 
        . 4 4 4 e e e e f f . . . 
        . e 4 4 e 7 7 7 7 f . . . 
        . f e e f 6 6 6 6 f f . . 
        . f f f f f f f f f f . . 
        . . f f . . . f f f . . . 
        `)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    Dic_taDor.setImage(img`
        . . . . . . . . . . . . . 
        . . . . 5 5 5 5 5 5 . . . 
        . . . 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 c 5 5 5 5 5 5 . 
        . 5 5 5 c 5 5 5 c 5 5 5 5 
        5 5 c c 5 5 f c c 5 5 c 5 
        5 5 5 5 5 e 5 5 5 5 c c 5 
        . f f f e e 5 5 5 5 5 5 5 
        . f f f e e 6 b 5 e e 5 5 
        . . f f 4 4 6 1 e 4 e 5 5 
        . . . f 4 4 4 4 e f f 5 . 
        . . . f f e e e e 4 4 4 . 
        . . . f 7 7 7 7 e 4 4 e . 
        . . f f 6 6 6 6 f e e f . 
        . . f f f f f f f f f f . 
        . . . f f f . . . f f . . 
        `)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    Dic_taDor.setImage(img`
        . . . . . . . . . . . . . 
        . . . . . 5 5 5 5 . . . . 
        . . . 5 5 c c c c 5 5 . . 
        . 5 5 5 c c c c c c 5 5 . 
        5 5 c c c c c c c c c 5 5 
        5 c c c c 5 c c c c c c 5 
        . 5 5 5 5 c c c c 5 c c 5 
        . 5 5 5 5 c c 5 c c c 5 5 
        . 5 5 5 5 5 5 5 5 5 5 5 5 
        . 5 5 5 5 5 5 5 5 5 5 5 5 
        . . 5 5 5 5 5 5 5 5 5 5 . 
        . . e 5 5 5 5 5 5 5 5 5 . 
        . . e 5 5 5 5 5 5 5 5 e f 
        . . 4 c 7 7 7 7 7 e 4 4 e 
        . . e f f f f f f f e e . 
        . . . f f f . . . . . . . 
        `)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.portails, function (sprite2, otherSprite2) {
    game.gameOver(true)
    game.setGameOverEffect(true, effects.confetti)
})
let Next_Level: Sprite = null
let Dic_taDor: Sprite = null
info.setScore(0)
Dic_taDor = sprites.create(img`
    . . . . 5 5 5 5 . . . . . 
    . . 5 5 5 5 5 5 5 5 . . . 
    . 5 5 5 5 5 5 c 5 5 5 . . 
    5 5 5 5 5 5 c c 5 5 5 c . 
    5 5 5 c 5 5 5 5 5 5 5 c . 
    c c c 5 5 5 e e 5 5 c c . 
    5 5 5 5 5 e e 5 5 c c 5 . 
    5 5 5 b 9 e e 9 b 5 5 5 . 
    . f 4 1 9 4 4 9 1 4 f . . 
    . f e 4 4 4 4 4 4 e f . . 
    . f f f e e e e f f f . . 
    f e f b 7 7 7 7 b f e f . 
    e 4 f 7 7 7 7 7 7 f 4 e . 
    e e f 6 6 6 6 6 6 f e e . 
    . . . f f f f f f . . . . 
    . . . f f . . f f . . . . 
    `, SpriteKind.Player)
tiles.setCurrentTilemap(tilemap`level1`)
Dic_taDor.setPosition(12, 57)
controller.moveSprite(Dic_taDor)
scene.cameraFollowSprite(Dic_taDor)
for (let value of tiles.getTilesByType(assets.tile`myTile`)) {
    Next_Level = sprites.create(img`
        . . b b b . . . 
        . b 5 5 5 b . . 
        b 5 d 3 d 5 b . 
        b 5 3 5 1 5 b . 
        c 5 3 5 1 d c . 
        c 5 d 1 d d c . 
        . f d d d f . . 
        . . f f f . . . 
        `, SpriteKind.Items)
    tiles.placeOnTile(Next_Level, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
for (let value2 of tiles.getTilesByType(assets.tile`myTile0`)) {
    Next_Level = sprites.create(img`
        . . 1 1 1 . . . 
        . 1 a a a 1 . . 
        1 a f 8 f a 1 . 
        1 a 8 a 1 a 1 . 
        c a 8 a 1 f c . 
        c a f 1 f f c . 
        . 9 f f f 9 . . 
        . . 9 9 9 . . . 
        `, SpriteKind.portails)
    tiles.placeOnTile(Next_Level, value2)
    tiles.setTileAt(value2, assets.tile`transparency16`)
}
forever(function () {
    music.play(music.stringPlayable("C5 G E G C5 B D B ", 211), music.PlaybackMode.UntilDone)
})
