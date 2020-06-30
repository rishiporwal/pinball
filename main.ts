namespace SpriteKind {
    export const Wall = SpriteKind.create()
    export const LeftWall = SpriteKind.create()
    export const RightWall = SpriteKind.create()
    export const RightBumper = SpriteKind.create()
    export const LeftBumper = SpriteKind.create()
}
function Left_Wall (x: number, y: number) {
    Wall = sprites.create(img`
f f . . 
f f f f 
b b f f 
b b b b 
. . b b 
`, SpriteKind.LeftWall)
    Wall.setPosition(x, y)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.RightBumper, function (sprite, otherSprite) {
    if (!(up)) {
        sprite.y += -2
        sprite.vx = -50
        up = true
    } else {
        sprite.vx = -20
        sprite.vy = -60
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.LeftWall, function (sprite, otherSprite) {
    sprite.y += -2
    sprite.vx = 50
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.LeftBumper, function (sprite, otherSprite) {
    if (!(up)) {
        sprite.y += -2
        sprite.vx = 50
        up = true
    } else {
        sprite.vx = 20
        sprite.vy = -60
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.RightWall, function (sprite, otherSprite) {
    sprite.y += -2
    sprite.vx = -50
})
function Right_Wall (x: number, y: number) {
    Wall = sprites.create(img`
. . f f 
f f f f 
f f b b 
b b b b 
b b . . 
`, SpriteKind.RightWall)
    Wall.setPosition(x, y)
}
let Wall: Sprite = null
let up = false
up = false
scene.setBackgroundImage(img`
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b d f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f d b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b d f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f d b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b d f f f f f f f f f f f f f f f f f f f f f f f f d d d d d d d f f f f f f f f f f f f f f f f f f d d d d d d d f f f f f f f f f f f f f f d f d f f f f f f f f f f f f f f f f f f f f f f f f f d b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b d f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f d f f f f f f f f f f f f f f f f f d f f f f f f d f f f f f f f f f f f f f d f d f f f f f f f f f f f f f f f f f f f f f f f f f d b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b d d f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f f d f f f f f f f f f f f f f f f f d f f f f f f f d f f f f f f f f f f f f d f d f f f f f f f f f f f f f f f f f f f f f f f f f d b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b d d f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f f d f f f f f f f f f f f f f f f f d f f f f f f f d f f f f f f f f f f f f d f d f f f f f f f f f f f f f f f f f f f f f f f f f d d b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b d d f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f f d f f f f f f f f f f f f f f f f d f f f f f f f d f f f f f f f f f f f f d f d f f f f f f f f f f f f f f f f f f f f f f f f f d d b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b d d f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f f d f f f f f f f f f f f f f f f f d f f f f f f f d f f f f f f f f f f f f d f d f f f f f f f f f f f f f f f f f f f f f f f f f d d b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f d f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f d f f f f f f f f f f f f f f f f f d f f f f f f f d f f f f f f f f f f f f d f d f f f f f f f f f f f f f f f f f f f f f f f f f d d b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f d f f f f f f f f f f f f f f f f f f f f f f f f d d d d d d d f f d f f f f f f f f f f f f f f f d f f f f f f f d f f f f f f f f f f f f d f d f f f f f f f f f f f f f f f f f f f f f f f f f d f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f d f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f f d f f f f f f f f f f f f d f d f f f f f f f f f f f f f f f f f f f f f f f f f d f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f d f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f f d f f f f f f f f f f f f d f d f f f f f f f f f f f f f f f f f f f f f f f f f d f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b f f f d f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f f f d f f d f f f f f f f f f f f f d f f f f f f f d f f f f f f f f f f f f d f d f f f f f f f f f f f f f f f f f f f f f f f f f d f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b f f f d f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f f f d f f d d d d d d d d d f f f f d f f f f f f f d f f f f f f f f f f f f d f d f f f f f f f f f f f f f f f f f f f f f f f f f d f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b f f f d f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f f f d f f d f f f f f f f f d f f f d f f f f f f d f f f f f f f f f f d f f d f d f f f f f f f f f f f f f f f f f f f f f f f f f d f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b f f f d f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f f f d f f d f f f f f f f f d d f f d d d d d d d f f f f f f f f d d d d f f d f d f f f f f f f f f f f f f f f f f f f f f f f f f d f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f d f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f f f d f f d f f f f f f f f f d f f d f f f f f f d d d f f f f d f f f d f f d f d f f f f f f f f f f f f f f f f f f f f f f f f f d f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f d f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f f f d f f d f f f f f f f f f d f f d f f f f f f f f f d f f d f f f f d f f d f d f f f f f f f f f f f f f f f f f f f f f f f f f d f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f d f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f f f d f f d f f f f f f f f f d f f d f f f f f f f f f d f f d f f f f d f f d f d f f f f f f f f f f f f f f f f f f f f f f f f f d f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f d f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f f f d f f d f f f f f f f f f d f f d f f f f f f f f f d f f d f f f f d f f d f d f f f f f f f f f f f f f f f f f f f f f f f f f d f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f d f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f f f d f f d f f f f f f f f f d f f d f f f f f f f f f d f f d f f f f d f f d f d f f f f f f f f f f f f f f f f f f f f f f f f f d f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f d f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f f f d f f d f f f f f f f f f d f f d f f f f f f f f f d f f d f f f f d f f d f d f f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f d f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f f f d f f d f f f f f f f f f d f f d f f f f f f f f f d f f d f f f f d f f d f d f f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f d f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f f f d f f d f f f f f f f f f d f f d f f f f f f f f f d f f d f f f f d f f d f d f f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f d f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f f f d f f d f f f f f f f f f d f f d f f f f f f f f f d f f d f f f f d f f d f d f f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f d f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f f f d f f d f f f f f f f f f d f f d f f f f f f f f f d f f d f f f f d f f d f d f f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f d f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f f f d f f d f f f f f f f f f d f f d f f f f f f f f f d f f d f f f f d f f d f d f f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f d f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f f f d f f d f f f f f f f f f d f f d f f f f f f f f f d f f d f f f f d f f d f d f f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f d f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f f f d f f d f f f f f f f f f d f f d f f f f f f f f f d f f d f f f f d f f d f d f f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f d f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f f f d f f d f f f f f f f f f d f f d f f f f f f f f f d f f d f f f f d f f d f d f f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f d f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f f f d f f d f f f f f f f f f d f f d f f f f f f f f f d f f d f f f f d f f d f d f f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f d f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f f f d f f d f f f f f f f f f d f f d f f f f f f f f f d f f d f f f f d f f d f d f f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f d f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f f f d f f d f f f f f f f f f d f f d f f f f f f f f d f f f f d f f f d f f d f d f f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f d f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f f f d f f d f f f f f f f f f d f f d d d d d d d d d f f f f f f d d d d f f d f d f f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f d f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f b b b b b b b b b b b b b b 
b b b b b b b b b b b b b f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f b b b b b b b b b b b b b b 
b b b b b b b b b b b b b f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f b b b b b b b b b b b b b 
b b b b b b b b b b b b b f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f b b b b b b b b b b b b b 
b b b b b b b b b b b b b f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f b b b b b b b b b b b b b 
b b b b b b b b b b b b f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f b b b b b b b b b b b b b 
b b b b b b b b b b b b f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f b b b b b b b b b b b b 
b b b b b b b b b b b b f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f b b b b b b b b b b b b 
b b b b b b b b b b b b f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f b b b b b b b b b b b b 
b b b b b b b b b b b f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f b b b b b b b b b b b b 
b b b b b b b b b b b f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f b b b b b b b b b b b 
b b b b b b b b b b b f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f b b b b b b b b b b b 
b b b b b b b b b b b f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f b b b b b b b b b b b 
b b b b b b b b b b f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f b b b b b b b b b b b 
b b b b b b b b b b f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f b b b b b b b b b b 
b b b b b b b b b b f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f b b b b b b b b b b 
b b b b b b b b b b f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f b b b b b b b b b b 
b b b b b b b b b f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f b b b b b b b b b b 
b b b b b b b b b f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f b b b b b b b b b 
b b b b b b b b b f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f b b b b b b b b b 
b b b b b b b b b f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f b b b b b b b b b 
b b b b b b b b f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f b b b b b b b b b 
b b b b b b b b f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f b b b b b b b b 
b b b b b b b b f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f b b b b b b b b 
b b b b b b b b f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f b b b b b b b b 
b b b b b b b f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f b b b b b b b 
b b b b b b b f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f b b b b b b b 
b b b b b b b f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f b b b b b b b 
b b b b b b b f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f b b b b b b b 
b b b b b b f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f b b b b b b 
b b b b b b f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f b b b b b b 
b b b b b b f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f b b b b b b 
b b b b b b f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f b b b b b b 
b b b b b f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f b b b b b 
b b b b b f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f b b b b b 
b b b b b f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f b b b b b 
b b b b b f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f b b b b b 
b b b b f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f b b b b 
b b b b f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f b b b b 
b b b b f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f b b b b 
b b b b f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f b b b b 
b b b f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f b b b 
b b b f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f b b b 
b b b f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f b b b 
b b b f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f b b b 
b b f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f b b 
b b f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f b b 
b b f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f b b 
b b f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f b b 
b f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f b 
b f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f b 
b f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f b 
b f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f b 
f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f 
`)
let leftpedal = sprites.create(img`
. f f f f . . . . . . . . . . 
f f . f f f . . . . . . . . . 
b f f f f f f f f . . . . . . 
b b b f f f f f f f f . . . . 
. b b b b b f f f f f f f . . 
. . . b b b b b f f f f f f f 
. . . . . . b b b b b b b b b 
. . . . . . . . b b b b b b b 
`, SpriteKind.LeftBumper)
leftpedal.setPosition(70, 115)
let rightpedal = sprites.create(img`
. . . . . . . . . . f f f f . 
. . . . . . . . . f f f . f f 
. . . . . . f f f f f f f f b 
. . . . f f f f f f f f b b b 
. . f f f f f f f b b b b b . 
f f f f f f f b b b b b . . . 
b b b b b b b b b . . . . . . 
b b b b b b b . . . . . . . . 
`, SpriteKind.RightBumper)
rightpedal.setPosition(90, 115)
for (let index = 0; index <= 8; index++) {
    Right_Wall(100 + 4 * index, 110 - 2 * index)
}
for (let index = 0; index <= 8; index++) {
    Left_Wall(60 - 4 * index, 110 - 2 * index)
}
let Ball = sprites.create(img`
. e e . 
e e e e 
e e e e 
. e e . 
`, SpriteKind.Player)
Ball.ay = 50
controller.moveSprite(Ball)
game.onUpdate(function () {
    if (controller.A.isPressed()) {
        rightpedal.setImage(img`
f f f f f f f f f f f f f f . 
b f f f f f f f f f f f . f f 
b b b f f f f f f f f f f f b 
. b b b b b b b f f f f b b b 
. . . b b b b b b b b b b b . 
. . . . . . . . b b b b . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
`)
        leftpedal.setImage(img`
. f f f f f f f f f f f f f f 
f f . f f f f f f f f f f f b 
b f f f f f f f f f f f b b b 
b b b f f f f b b b b b b b . 
. b b b b b b b b b b b . . . 
. . . b b b b . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
`)
        up = true
    } else {
        rightpedal.setImage(img`
. . . . . . . . . . f f f f . 
. . . . . . . . . f f f . f f 
. . . . . . f f f f f f f f b 
. . . . f f f f f f f f b b b 
. . f f f f f f f b b b b b . 
f f f f f f f b b b b b . . . 
b b b b b b b b b . . . . . . 
b b b b b b b . . . . . . . . 
`)
        leftpedal.setImage(img`
. f f f f . . . . . . . . . . 
f f . f f f . . . . . . . . . 
b f f f f f f f f . . . . . . 
b b b f f f f f f f f . . . . 
. b b b b b f f f f f f f . . 
. . . b b b b b f f f f f f f 
. . . . . . b b b b b b b b b 
. . . . . . . . b b b b b b b 
`)
        up = false
    }
})
