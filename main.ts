namespace SpriteKind {
    export const Wall = SpriteKind.create()
    export const LeftWall = SpriteKind.create()
    export const RightWall = SpriteKind.create()
    export const RightBumper = SpriteKind.create()
    export const LeftBumper = SpriteKind.create()
    export const Bouncer = SpriteKind.create()
    export const Jackpot = SpriteKind.create()
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.Bouncer, function (sprite, otherSprite) {
    Ghost(otherSprite)
    sprite.vy += Math.randomRange(-20, 20)
    sprite.vx = Math.randomRange(-1, 1) * 30
    info.changeScoreBy(1)
})
function Ghost (Sprite2: Sprite) {
    Sprite2.setFlag(SpriteFlag.Ghost, true)
    pause(500)
    Sprite2.setFlag(SpriteFlag.Ghost, false)
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
function Create_Bouncer (x: number, y: number) {
    bouncerSprite = sprites.create(img`
. . f f f f . . 
. f f f f f f . 
f f f f f f f f 
f f f b b f f f 
f f f . . f f f 
f f f f f f f f 
b f f f f f f b 
b b f f f f b b 
. b b b b b b . 
. . b b b b . . 
`, SpriteKind.Bouncer)
    bouncerSprite.setPosition(x, y)
}
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.splash("You lose!", "")
    game.splash("Score - " + info.score(), "High Score - " + info.highScore())
    info.setScore(0)
    Ball.setPosition(142, 100)
    Ball.setVelocity(-11, -50)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Jackpot, function (sprite, otherSprite) {
    Ghost(otherSprite)
    info.changeScoreBy(100)
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
let bouncerSprite: Sprite = null
let Wall: Sprite = null
let Ball: Sprite = null
let up = false
game.setDialogCursor(img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`)
info.setScore(0)
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
b b b b b f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f d d d f f f f f f f f f b b b b b 
b b b b b f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f b b f d d d f f f f f f f f b b b b b 
b b b b f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f b b b f d d f f f f f f f f f b b b b 
b b b b f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f b b b f d d f f f f f f f f f b b b b 
b b b b f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f b b b f d d f f f f f f f f f b b b b 
b b b b f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f b b b f d d f f f f f f f f f b b b b 
b b b f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f b b b f d d f f f f f f f f f b b b 
b b b f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f b b b f d d f f f f f f f f f b b b 
b b b f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f b b b f d d f f f f f f f f f b b b 
b b b f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f b b b f d d f f f f f f f f f b b b 
b b f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f b b b f d d f f f f f f f f f b b 
b b f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f b b b f d d f f f f f f f f f b b 
b b f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f b b b f d d f f f f f f f f f b b 
b b f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f b b b f d d f f f f f f f f f b b 
b f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f b b b f d d f f f f f f f f f b 
b f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f b b b f d d f f f f f f f f f b 
b f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f b b b f d d f f f f f f f f f b 
b f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f b b b f d d f f f f f f f f f b 
f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f b b b f d d f f f f f f f f f 
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
for (let index = 0; index <= 4; index++) {
    Right_Wall(100 + 4 * index, 100 - 2 * index)
}
for (let index = 0; index <= 2; index++) {
    Right_Wall(85 + 4 * index, 65 - 4 * index)
}
for (let index = 0; index <= 8; index++) {
    Left_Wall(60 - 4 * index, 110 - 2 * index)
}
for (let index = 0; index <= 4; index++) {
    Left_Wall(60 - 4 * index, 100 - 2 * index)
}
for (let index = 0; index <= 2; index++) {
    Left_Wall(75 - 4 * index, 65 - 4 * index)
}
Ball = sprites.create(img`
. e e . 
e e e e 
e e e e 
. e e . 
`, SpriteKind.Player)
Ball.setPosition(142, 100)
Ball.setVelocity(-11, -50)
info.setScore(0)
Ball.ay = 50
controller.moveSprite(Ball)
Create_Bouncer(60, 70)
Create_Bouncer(100, 70)
Create_Bouncer(110, 60)
Create_Bouncer(50, 60)
let Jackpot = sprites.create(img`
. . . f f . . . 
. . f f f f . . 
. f f b b f f . 
f f b b b b f f 
f f b b b b f f 
b f f b b f f b 
b b f f f f b b 
. b b f f b b . 
. . b b b b . . 
. . . b b . . . 
`, SpriteKind.Jackpot)
let OffScreen = sprites.create(img`
d d d d d d d d d d d d d d d d 
`, SpriteKind.Enemy)
OffScreen.setPosition(80, 119)
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
