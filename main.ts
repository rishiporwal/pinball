namespace SpriteKind {
    export const Wall = SpriteKind.create()
    export const LeftWall = SpriteKind.create()
    export const RightWall = SpriteKind.create()
    export const RightBumper = SpriteKind.create()
    export const LeftBumper = SpriteKind.create()
    export const Bouncer = SpriteKind.create()
    export const Jackpot = SpriteKind.create()
    export const tablewall = SpriteKind.create()
    export const TopWall = SpriteKind.create()
    export const LeftTableWall = SpriteKind.create()
    export const MultiBall = SpriteKind.create()
    export const OtherBall = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.OtherBall, SpriteKind.TopWall, function (sprite, otherSprite) {
    sprite.setVelocity(0, 20)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.TopWall, function (sprite, otherSprite) {
    sprite.setVelocity(0, 20)
})
sprites.onOverlap(SpriteKind.OtherBall, SpriteKind.tablewall, function (sprite, otherSprite) {
    sprite.setVelocity(-20, -20)
})
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.MultiBall, function (sprite, otherSprite) {
    Ghost(otherSprite)
    Multi1 = sprites.create(img`
. 1 1 . 
1 1 1 1 
1 1 1 1 
. 1 1 . 
`, SpriteKind.OtherBall)
    Multi1.setPosition(35, 80)
    Multi1.ay = 50
    pause(1000)
    Multi2 = sprites.create(img`
. 1 1 . 
1 1 1 1 
1 1 1 1 
. 1 1 . 
`, SpriteKind.OtherBall)
    Multi2.setPosition(35, 80)
    Multi2.ay = 50
})
function Start () {
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
    make_right_sides()
    makeleftsides()
    UpWall = sprites.create(img`
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
`, SpriteKind.TopWall)
    UpWall.setPosition(80, 38)
    info.setScore(0)
    up = false
    scene.setBackgroundImage(img`
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b d f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f d b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b d f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f d b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b d f f f f f f f f f f f f f f f f f f f f f f f f d d d d d d d f f f f f f f f f f f f f f f f f f d d d d d d d f f f f f f f f f f f f f f d f f f f d f f f f f f f f f f f f f f f f f f f f f f d b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b d f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f d f f f f f f f f f f f f f f f f f d f f f f f f d f f f f f f f f f f f f f d f f f f d f f f f f f f f f f f f f f f f f f f f f f d b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b d d f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f f d f f f f f f f f f f f f f f f f d f f f f f f f d f f f f f f f f f f f f d f f f f d f f f f f f f f f f f f f f f f f f f f f f d b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b d d f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f f d f f f f f f f f f f f f f f f f d f f f f f f f d f f f f f f f f f f f f d f f f f d f f f f f f f f f f f f f f f f f f f f f f d d b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b d d f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f f d f f f f f f f f f f f f f f f f d f f f f f f f d f f f f f f f f f f f f d f f f f d f f f f f f f f f f f f f f f f f f f f f f d d b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b d d f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f f d f f f f f f f f f f f f f f f f d f f f f f f f d f f f f f f f f f f f f d f f f f d f f f f f f f f f f f f f f f f f f f f f f d d b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f d f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f d f f f f f f f f f f f f f f f f f d f f f f f f f d f f f f f f f f f f f f d f f f f d f f f f f f f f f f f f f f f f f f f f f f d d b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f d f f f f f f f f f f f f f f f f f f f f f f f f d d d d d d d f f d f f f f f f f f f f f f f f f d f f f f f f f d f f f f f f f f f f f f d f f f f d f f f f f f f f f f f f f f f f f f f f f f d f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f d f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f f d f f f f f f f f f f f f d f f f f d f f f f f f f f f f f f f f f f f f f f f f d f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f d f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f f d f f f f f f f f f f f f d f f f f d f f f f f f f f f f f f f f f f f f f f f f d f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b f f f d f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f f f d f f d f f f f f f f f f f f f d f f f f f f f d f f f f f f f f f f f f d f f f f d f f f f f f f f f f f f f f f f f f f f f f d f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b f f f d f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f f f d f f d d d d d d d d d f f f f d f f f f f f f d f f f f f f f f f f f f d f f f f d f f f f f f f f f f f f f f f f f f f f f f d f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b f f f d f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f f f d f f d f f f f f f f f d f f f d f f f f f f d f f f f f f f f f f d f f d f f f f d f f f f f f f f f f f f f f f f f f f f f f d f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b f f f d f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f f f d f f d f f f f f f f f d d f f d d d d d d d f f f f f f f f d d d d f f d f f f f d f f f f f f f f f f f f f f f f f f f f f f d f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f d f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f f f d f f d f f f f f f f f f d f f d f f f f f f d d d f f f f d f f f d f f d f f f f d f f f f f f f f f f f f f f f f f f f f f f d f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f d f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f f f d f f d f f f f f f f f f d f f d f f f f f f f f f d f f d f f f f d f f d f f f f d f f f f f f f f f f f f f f f f f f f f f f d f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f d f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f f f d f f d f f f f f f f f f d f f d f f f f f f f f f d f f d f f f f d f f d f f f f d f f f f f f f f f f f f f f f f f f f f f f d f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f d f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f f f d f f d f f f f f f f f f d f f d f f f f f f f f f d f f d f f f f d f f d f f f f d f f f f f f f f f f f f f f f f f f f f f f d f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f d f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f f f d f f d f f f f f f f f f d f f d f f f f f f f f f d f f d f f f f d f f d f f f f d f f f f f f f f f f f f f f f f f f f f f f d f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f d f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f f f d f f d f f f f f f f f f d f f d f f f f f f f f f d f f d f f f f d f f d f f f f d f f f f f f f f f f f f f f f f f f f f f f d f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f d f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f f f d f f d f f f f f f f f f d f f d f f f f f f f f f d f f d f f f f d f f d f f f f d f f f f f f f f f f f f f f f f f f f f f f d f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f d f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f f f d f f d f f f f f f f f f d f f d f f f f f f f f f d f f d f f f f d f f d f f f f d f f f f f f f f f f f f f f f f f f f f f f d f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f d f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f f f d f f d f f f f f f f f f d f f d f f f f f f f f f d f f d f f f f d f f d f f f f d f f f f f f f f f f f f f f f f f f f f f f d f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f d f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f f f d f f d f f f f f f f f f d f f d f f f f f f f f f d f f d f f f f d f f d f f f f d f f f f f f f f f f f f f f f f f f f f f f d f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f d f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f f f d f f d f f f f f f f f f d f f d f f f f f f f f f d f f d f f f f d f f d f f f f d f f f f f f f f f f f f f f f f f f f f f f d f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f d f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f f f d f f d f f f f f f f f f d f f d f f f f f f f f f d f f d f f f f d f f d f f f f d f f f f f f f f f f f f f f f f f f f f f f d f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f d f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f f f d f f d f f f f f f f f f d f f d f f f f f f f f f d f f d f f f f d f f d f f f f d f f f f f f f f f f f f f f f f f f f f f f d f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f d f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f f f d f f d f f f f f f f f f d f f d f f f f f f f f f d f f d f f f f d f f d f f f f d f f f f f f f f f f f f f f f f f f f f f f d f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f d f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f f f d f f d f f f f f f f f f d f f d f f f f f f f f f d f f d f f f f d f f d f f f f d f f f f f f f f f f f f f f f f f f f f f f d f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f d f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f f f d f f d f f f f f f f f f d f f d f f f f f f f f f d f f d f f f f d f f d f f f f d f f f f f f f f f f f f f f f f f f f f f f d f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f d f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f f f d f f d f f f f f f f f f d f f d f f f f f f f f d f f f f d f f f d f f d f f f f d f f f f f f f f f f f f f f f f f f f f f f d f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f d f f f f f f f f f f f f f f f f f f f f f f f f d f f f f f f f f d f f d f f f f f f f f f d f f d d d d d d d d d f f f f f f d d d d f f d f f f f d f f f f f f f f f f f f f f f f f f f f f f d f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b 
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
    leftpedal = sprites.create(img`
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
    rightpedal = sprites.create(img`
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
    LeftPedalT = sprites.create(img`
. f f f f . . . . . . . . . . 
f f . f f f . . . . . . . . . 
b f f f f f f f f . . . . . . 
b b b f f f f f f f f . . . . 
. b b b b b f f f f f f f . . 
. . . b b b b b f f f f f f f 
. . . . . . b b b b b b b b b 
. . . . . . . . b b b b b b b 
`, SpriteKind.LeftBumper)
    LeftPedalT.setPosition(60, 85)
    RightPedalT = sprites.create(img`
. . . . . . . . . . f f f f . 
. . . . . . . . . f f f . f f 
. . . . . . f f f f f f f f b 
. . . . f f f f f f f f b b b 
. . f f f f f f f b b b b b . 
f f f f f f f b b b b b . . . 
b b b b b b b b b . . . . . . 
b b b b b b b . . . . . . . . 
`, SpriteKind.RightBumper)
    RightPedalT.setPosition(100, 85)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.LeftTableWall, function (sprite, otherSprite) {
    sprite.setVelocity(20, -20)
})
sprites.onOverlap(SpriteKind.OtherBall, SpriteKind.Jackpot, function (sprite, otherSprite) {
    Ghost(otherSprite)
    info.changeScoreBy(50)
})
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.tablewall, function (sprite, otherSprite) {
    sprite.setVelocity(-20, -20)
})
sprites.onOverlap(SpriteKind.OtherBall, SpriteKind.LeftWall, function (sprite, otherSprite) {
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
b . f f f f . b 
. . . b b . . . 
. . . b b . . . 
`, SpriteKind.Bouncer)
    bouncerSprite.setPosition(x, y)
    bouncerSprite.z = 100
}
function make_right_sides () {
    PinWall1 = sprites.create(img`
f f . . . . . . . . 
f f . . . . . . . . 
f f . . . . . . . . 
f f . . . . . . . . 
f f f . . . . . . . 
f f f . . . . . . . 
f f f . . . . . . . 
f f f . . . . . . . 
f f f f . . . . . . 
f f f f . . . . . . 
f f f f . . . . . . 
f f f f . . . . . . 
f f f f f . . . . . 
f f f f f . . . . . 
f f f f f . . . . . 
f f f f f . . . . . 
f f f f f f . . . . 
f f f f f f . . . . 
f f f f f f . . . . 
f f f f f f . . . . 
f f f f f f f . . . 
f f f f f f f . . . 
f f f f f f f . . . 
f f f f f f f f . . 
f f f f f f f f . . 
f f f f f f f f . . 
f f f f f f f f . . 
f f f f f f f f f . 
f f f f f f f f f . 
f f f f f f f f f . 
f f f f f f f f f . 
f f f f f f f f f f 
`, SpriteKind.tablewall)
    PinWall1.setPosition(135, 24)
    PinWall2 = sprites.create(img`
. f f f f f f f f f . . . . . . 
. f f f f f f f f f . . . . . . 
. f f f f f f f f f . . . . . . 
. f f f f f f f f f . . . . . . 
. . f f f f f f f f f . . . . . 
. . f f f f f f f f f . . . . . 
. . f f f f f f f f f . . . . . 
. . f f f f f f f f f . . . . . 
. . . f f f f f f f f f . . . . 
. . . f f f f f f f f f . . . . 
. . . f f f f f f f f f . . . . 
. . . . f f f f f f f f . . . . 
. . . . f f f f f f f f f . . . 
. . . . f f f f f f f f f . . . 
. . . . f f f f f f f f f . . . 
. . . . . f f f f f f f f . . . 
. . . . . f f f f f f f f f . . 
. . . . . f f f f f f f f f . . 
. . . . . f f f f f f f f f . . 
. . . . . . f f f f f f f f . . 
. . . . . . f f f f f f f f f . 
. . . . . . f f f f f f f f f . 
. . . . . . f f f f f f f f f . 
. . . . . . . f f f f f f f f . 
. . . . . . . f f f f f f f f f 
. . . . . . . f f f f f f f f f 
. . . . . . . f f f f f f f f f 
. . . . . . . . f f f f f f f f 
`, SpriteKind.tablewall)
    PinWall2.setPosition(138, 54)
    PinWall4 = sprites.create(img`
f f f f f f f f f . . . . . . 
f f f f f f f f f . . . . . . 
f f f f f f f f f . . . . . . 
. f f f f f f f f . . . . . . 
. f f f f f f f f f . . . . . 
. f f f f f f f f f . . . . . 
. f f f f f f f f f . . . . . 
. . f f f f f f f f . . . . . 
. . f f f f f f f f f . . . . 
. . f f f f f f f f f . . . . 
. . f f f f f f f f f . . . . 
. . f f f f f f f f f . . . . 
. . . f f f f f f f f f . . . 
. . . f f f f f f f f f . . . 
. . . f f f f f f f f f . . . 
. . . f f f f f f f f f . . . 
. . . . f f f f f f f f f . . 
. . . . f f f f f f f f f . . 
. . . . f f f f f f f f f . . 
. . . . f f f f f f f f f . . 
. . . . . f f f f f f f f f . 
. . . . . f f f f f f f f f . 
. . . . . f f f f f f f f f . 
. . . . . f f f f f f f f f . 
. . . . . . f f f f f f f f f 
. . . . . . f f f f f f f f f 
`, SpriteKind.tablewall)
    PinWall4.setPosition(152, 106)
}
function Start3 () {
    Create_Bouncer(60, 70)
    Create_Bouncer(100, 70)
    Create_Bouncer(110, 60)
    Create_Bouncer(50, 60)
    Jackpot = sprites.create(img`
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
    OffScreen = sprites.create(img`
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f b b b f d d 
`, SpriteKind.Enemy)
    OffScreen.setPosition(80, 119)
    Multiball = sprites.create(img`
. . . . . . . . 
f f f f f f f f 
f f e e e e f f 
b f f e e f f b 
b b f f f f b b 
. b b f f b b . 
. . b b b b . . 
. . . b b . . . 
`, SpriteKind.MultiBall)
    Multiball.setPosition(40, 85)
    Ball = sprites.create(img`
. e e . 
e e e e 
e e e e 
. e e . 
`, SpriteKind.Player)
    controller.moveSprite(Ball)
    Ball.setPosition(142, 100)
    pause(100)
    Ball.setVelocity(-20, -50)
    Ball.ay = 50
    info.setScore(0)
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
    game.splash("Score - " + info.score(), "High Score - " + info.highScore())
    game.over(false, effects.blizzard)
})
function makeleftsides () {
    PinWall1 = sprites.create(img`
f f . . . . . . . . 
f f . . . . . . . . 
f f . . . . . . . . 
f f . . . . . . . . 
f f f . . . . . . . 
f f f . . . . . . . 
f f f . . . . . . . 
f f f . . . . . . . 
f f f f . . . . . . 
f f f f . . . . . . 
f f f f . . . . . . 
f f f f . . . . . . 
f f f f f . . . . . 
f f f f f . . . . . 
f f f f f . . . . . 
f f f f f . . . . . 
f f f f f f . . . . 
f f f f f f . . . . 
f f f f f f . . . . 
f f f f f f . . . . 
f f f f f f f . . . 
f f f f f f f . . . 
f f f f f f f . . . 
f f f f f f f f . . 
f f f f f f f f . . 
f f f f f f f f . . 
f f f f f f f f . . 
f f f f f f f f f . 
f f f f f f f f f . 
f f f f f f f f f . 
f f f f f f f f f . 
f f f f f f f f f f 
`, SpriteKind.LeftTableWall)
    PinWall1.image.flipX()
    PinWall1.setPosition(25, 24)
    PinWall2 = sprites.create(img`
. f f f f f f f f f . . . . . . 
. f f f f f f f f f . . . . . . 
. f f f f f f f f f . . . . . . 
. f f f f f f f f f . . . . . . 
. . f f f f f f f f f . . . . . 
. . f f f f f f f f f . . . . . 
. . f f f f f f f f f . . . . . 
. . f f f f f f f f f . . . . . 
. . . f f f f f f f f f . . . . 
. . . f f f f f f f f f . . . . 
. . . f f f f f f f f f . . . . 
. . . . f f f f f f f f . . . . 
. . . . f f f f f f f f f . . . 
. . . . f f f f f f f f f . . . 
. . . . f f f f f f f f f . . . 
. . . . . f f f f f f f f . . . 
. . . . . f f f f f f f f f . . 
. . . . . f f f f f f f f f . . 
. . . . . f f f f f f f f f . . 
. . . . . . f f f f f f f f . . 
. . . . . . f f f f f f f f f . 
. . . . . . f f f f f f f f f . 
. . . . . . f f f f f f f f f . 
. . . . . . . f f f f f f f f . 
. . . . . . . f f f f f f f f f 
. . . . . . . f f f f f f f f f 
. . . . . . . f f f f f f f f f 
. . . . . . . . f f f f f f f f 
`, SpriteKind.LeftTableWall)
    PinWall2.image.flipX()
    PinWall2.setPosition(22, 54)
    PinWall3 = sprites.create(img`
. . . . . f f f f f f f f f . . . . . . 
. . . . . f f f f f f f f f . . . . . . 
. . . . . f f f f f f f f f . . . . . . 
. . . . . . f f f f f f f f . . . . . . 
. . . . . . f f f f f f f f f . . . . . 
. . . . . . f f f f f f f f f . . . . . 
. . . . . . f f f f f f f f f . . . . . 
. . . . . . . f f f f f f f f . . . . . 
. . . . . . . f f f f f f f f f . . . . 
. . . . . . . f f f f f f f f f . . . . 
. . . . . . . f f f f f f f f f . . . . 
. . . . . . . . f f f f f f f f . . . . 
. . . . . . . . f f f f f f f f f . . . 
. . . . . . . . f f f f f f f f f . . . 
. . . . . . . . . f f f f f f f f . . . 
. . . . . . . . . f f f f f f f f . . . 
. . . . . . . . . f f f f f f f f f . . 
. . . . . . . . . f f f f f f f f f . . 
. . . . . . . . . . f f f f f f f f . . 
. . . . . . . . . . f f f f f f f f . . 
. . . . . . . . . . f f f f f f f f f . 
. . . . . . . . . . f f f f f f f f f . 
. . . . . . . . . . . f f f f f f f f . 
. . . . . . . . . . . f f f f f f f f f 
. . . . . . . . . . . f f f f f f f f f 
. . . . . . . . . . . f f f f f f f f f 
. . . . . . . . . . . . f f f f f f f f 
`, SpriteKind.LeftTableWall)
    PinWall3.image.flipX()
    PinWall3.setPosition(17, 80)
    PinWall4 = sprites.create(img`
f f f f f f f f f . . . . . . 
f f f f f f f f f . . . . . . 
f f f f f f f f f . . . . . . 
. f f f f f f f f . . . . . . 
. f f f f f f f f f . . . . . 
. f f f f f f f f f . . . . . 
. f f f f f f f f f . . . . . 
. . f f f f f f f f . . . . . 
. . f f f f f f f f f . . . . 
. . f f f f f f f f f . . . . 
. . f f f f f f f f f . . . . 
. . f f f f f f f f f . . . . 
. . . f f f f f f f f f . . . 
. . . f f f f f f f f f . . . 
. . . f f f f f f f f f . . . 
. . . f f f f f f f f f . . . 
. . . . f f f f f f f f f . . 
. . . . f f f f f f f f f . . 
. . . . f f f f f f f f f . . 
. . . . f f f f f f f f f . . 
. . . . . f f f f f f f f f . 
. . . . . f f f f f f f f f . 
. . . . . f f f f f f f f f . 
. . . . . f f f f f f f f f . 
. . . . . . f f f f f f f f f 
. . . . . . f f f f f f f f f 
`, SpriteKind.LeftTableWall)
    PinWall4.image.flipX()
    PinWall4.setPosition(7, 106)
}
sprites.onOverlap(SpriteKind.OtherBall, SpriteKind.LeftBumper, function (sprite, otherSprite) {
    if (!(up)) {
        sprite.y += -2
        sprite.vx = 50
        up = true
    } else {
        sprite.vx = 20
        sprite.vy = -60
    }
})
sprites.onOverlap(SpriteKind.OtherBall, SpriteKind.RightBumper, function (sprite, otherSprite) {
    if (!(up)) {
        sprite.y += -2
        sprite.vx = -50
        up = true
    } else {
        sprite.vx = -20
        sprite.vy = -60
    }
})
sprites.onOverlap(SpriteKind.OtherBall, SpriteKind.RightWall, function (sprite, otherSprite) {
    sprite.y += -2
    sprite.vx = -50
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Jackpot, function (sprite, otherSprite) {
    Ghost(otherSprite)
    info.changeScoreBy(50)
})
sprites.onOverlap(SpriteKind.OtherBall, SpriteKind.Bouncer, function (sprite, otherSprite) {
    Ghost(otherSprite)
    sprite.vy += Math.randomRange(-20, 20)
    sprite.vx = Math.randomRange(-1, 1) * 30
    info.changeScoreBy(1)
})
function ramps () {
    for (let index = 0; index <= 8; index++) {
        Right_Wall(101 + 4 * index, 110 - 2 * index)
    }
    for (let index = 0; index <= 4; index++) {
        Right_Wall(101 + 4 * index, 100 - 2 * index)
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
}
sprites.onOverlap(SpriteKind.OtherBall, SpriteKind.LeftTableWall, function (sprite, otherSprite) {
    sprite.setVelocity(20, -20)
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
let PinWall3: Sprite = null
let Ball: Sprite = null
let Multiball: Sprite = null
let OffScreen: Sprite = null
let Jackpot: Sprite = null
let PinWall4: Sprite = null
let PinWall2: Sprite = null
let PinWall1: Sprite = null
let bouncerSprite: Sprite = null
let RightPedalT: Sprite = null
let LeftPedalT: Sprite = null
let rightpedal: Sprite = null
let leftpedal: Sprite = null
let up = false
let UpWall: Sprite = null
let Multi2: Sprite = null
let Multi1: Sprite = null
let Wall: Sprite = null
Start()
ramps()
Start3()
game.onUpdate(function () {
    if (controller.anyButton.isPressed()) {
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
        RightPedalT.setImage(img`
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
        LeftPedalT.setImage(img`
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
        RightPedalT.setImage(img`
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
        LeftPedalT.setImage(img`
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
