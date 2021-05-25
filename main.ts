scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    Animztion()
    mySprite.say("!!!!!!!!!!!!!!", 5000)
    info.changeScoreBy(1)
    game.over(true)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    Animztion()
})
function Animztion () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 5 5 5 5 5 5 5 . . . . 
        . . . . 5 5 d d d 5 5 5 . . . . 
        . . . 5 5 d d d d 5 5 5 . . . . 
        . . . 5 5 d d d d 5 5 5 . . . . 
        . . . 5 5 d d d d d 5 5 . . . . 
        . . . 5 5 d d d d d 5 5 . . . . 
        . . . 5 5 d d d d d 5 5 . . . . 
        . . . 5 5 d d d d d 5 5 . . . . 
        . . . 5 5 . d d d . . 5 . . . . 
        . . . 5 1 9 d d d 9 1 5 . . . . 
        . . . 1 1 9 9 d 9 9 1 1 . . . . 
        . . . 1 1 9 9 9 9 9 1 1 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 5 5 5 5 5 5 5 . . . . 
        . . . . 5 5 d d d 5 5 5 . . . . 
        . . . 5 5 d d d d 5 5 5 . . . . 
        . . . 5 5 d d d d 5 5 5 . . . . 
        . . . 5 5 d d d d d 5 5 . . . . 
        . . . 5 5 d d d d d 5 5 . . . . 
        . . . 5 5 d d d d d 5 5 . . . . 
        . . . 5 5 d d d d d 5 5 . . . . 
        . . . 5 5 . d d d . . 5 . . . . 
        . . . 5 1 9 d d d 9 1 5 . . . . 
        . . . 1 1 9 9 d 9 9 1 1 . . . . 
        . . . 1 1 9 9 9 9 9 1 1 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . 3 . . . 3 . . . . . . 3 . . . 
        . 3 . . . . . . . . . . 3 . 3 . 
        . . . . . 5 5 5 5 5 5 5 . . . . 
        . . . . 5 5 d d d 5 5 5 . . . . 
        . . . 5 5 d d d d 5 5 5 . . . . 
        . . . 5 5 d d d d 5 5 5 . . . . 
        . . . 5 5 d d d d d 5 5 . . . . 
        . . . 5 5 d d d d d 5 5 . . . . 
        . . . 5 5 d d d d d 5 5 . . . . 
        . . . 5 5 d d d d d 5 5 . . . . 
        . . . 5 5 . d d d . . 5 . . . . 
        . . . 5 1 9 d d d 9 1 5 . . . . 
        . . . 1 1 9 9 d 9 9 1 1 . . . . 
        . . . 1 1 9 9 9 9 9 1 1 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . a . . . . . . . . . . 
        . 3 . 3 . . . . a . . . 3 . . . 
        . 3 . . . 5 5 5 5 5 5 5 3 . 3 . 
        . . . . 5 5 d d d 5 5 5 3 . . . 
        . . . 5 5 d d d d 5 5 5 . . . . 
        . . . 5 5 d d d d 5 5 5 . . . . 
        . . . 5 5 d d d d d 5 5 . . . . 
        . . . 5 5 d d d d d 5 5 . . . . 
        . . . 5 5 d d d d d 5 5 . . . . 
        . . . 5 5 d d d d d 5 5 . . . . 
        . . . 5 5 . d d d . . 5 . . . . 
        . . . 5 1 9 d d d 9 1 5 . . . . 
        . . . 1 1 9 9 d 9 9 1 1 . . . . 
        . . . 1 1 9 9 9 9 9 1 1 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    false
    )
}
let mySprite: Sprite = null
info.setScore(0)
music.baDing.play()
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 5 5 5 5 5 5 5 . . . . . 
    . . . 5 5 d d d 5 5 5 . . . . . 
    . . 5 5 d d d d 5 5 5 . . . . . 
    . . 5 5 d d d d 5 5 5 . . . . . 
    . . 5 5 d d d d d 5 5 . . . . . 
    . . 5 5 d d d d d 5 5 . . . . . 
    . . 5 5 d d d d d 5 5 . . . . . 
    . . 5 5 d d d d d 5 5 . . . . . 
    . . 5 5 . d d d . . 5 . . . . . 
    . . 5 1 9 d d d 9 1 5 . . . . . 
    . . 1 1 9 9 d 9 9 1 1 . . . . . 
    . . 1 1 9 9 9 9 9 1 1 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setTilemap(tilemap`level3`)
tiles.placeOnRandomTile(mySprite, sprites.castle.rock2)
scene.cameraFollowSprite(mySprite)
let mySprite3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . 5 . . . . . 
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
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
