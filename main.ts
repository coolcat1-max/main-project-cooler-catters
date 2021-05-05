scene.onOverlapTile(SpriteKind.Player, sprites.castle.rock1, function (sprite, location) {
    game.over(true)
})
let mySprite = sprites.create(img`
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
tiles.setTilemap(tilemap`level2`)
tiles.placeOnRandomTile(mySprite, sprites.castle.rock2)
scene.cameraFollowSprite(mySprite)
info.startCountdown(10)
