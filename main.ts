enum RadioMessage {
    message1 = 49434
}
namespace SpriteKind {
    export const NPC = SpriteKind.create()
    export const Hitbox = SpriteKind.create()
    export const enmyproj = SpriteKind.create()
    export const SSG = SpriteKind.create()
    export const SFG = SpriteKind.create()
    export const G = SpriteKind.create()
    export const FG = SpriteKind.create()
    export const SG = SpriteKind.create()
    export const WP = SpriteKind.create()
    export const WS = SpriteKind.create()
    export const Spirit = SpriteKind.create()
    export const witchproj = SpriteKind.create()
    export const CFL = SpriteKind.create()
    export const Title = SpriteKind.create()
}
namespace StatusBarKind {
    export const EXP = StatusBarKind.create()
    export const MPHP = StatusBarKind.create()
}
function Walk () {
    if (lastdir == 0 && controller.up.isPressed()) {
        animation.runImageAnimation(
        Hero,
        [img`
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . f f f f f 2 2 f f f f f . . 
            . . f f e 2 e 2 2 e 2 e f f . . 
            . . f e 2 f 2 f f 2 f 2 e f . . 
            . . f f f 2 2 e e 2 2 f f f . . 
            . f f e f 2 f e e f 2 f e f f . 
            . f e e f f e e e e f e e e f . 
            . . f e e e e e e e e e e f . . 
            . . . f e e e e e e e e f . . . 
            . . e 4 f f f f f f f f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . . f f f f 2 2 f f f f . . . 
            . . f f e 2 e 2 2 e 2 e f f . . 
            . . f e 2 f 2 f f f 2 f e f . . 
            . . f f f 2 f e e 2 2 f f f . . 
            . . f e 2 f f e e 2 f e e f . . 
            . f f e f f e e e f e e e f f . 
            . f f e e e e e e e e e e f f . 
            . . . f e e e e e e e e f . . . 
            . . . e f f f f f f f f 4 e . . 
            . . . 4 f 2 2 2 2 2 e d d 4 . . 
            . . . e f f f f f f e e 4 . . . 
            . . . . f f f . . . . . . . . . 
            `,img`
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . f f f f f 2 2 f f f f f . . 
            . . f f e 2 e 2 2 e 2 e f f . . 
            . . f e 2 f 2 f f 2 f 2 e f . . 
            . . f f f 2 2 e e 2 2 f f f . . 
            . f f e f 2 f e e f 2 f e f f . 
            . f e e f f e e e e f e e e f . 
            . . f e e e e e e e e e e f . . 
            . . . f e e e e e e e e f . . . 
            . . e 4 f f f f f f f f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . . f f f f 2 2 f f f f . . . 
            . . f f e 2 e 2 2 e 2 e f f . . 
            . . f e f 2 f f f 2 f 2 e f . . 
            . . f f f 2 2 e e f 2 f f f . . 
            . . f e e f 2 e e f f 2 e f . . 
            . f f e e e f e e e f f e f f . 
            . f f e e e e e e e e e e f f . 
            . . . f e e e e e e e e f . . . 
            . . e 4 f f f f f f f f e . . . 
            . . 4 d d e 2 2 2 2 2 f 4 . . . 
            . . . 4 e e f f f f f f e . . . 
            . . . . . . . . . f f f . . . . 
            `],
        200,
        true
        )
        pauseUntil(() => !(controller.up.isPressed()))
    } else if (lastdir == 0 && !(controller.up.isPressed())) {
        animation.runImageAnimation(
        Hero,
        [img`
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . f f f f f 2 2 f f f f f . . 
            . . f f e 2 e 2 2 e 2 e f f . . 
            . . f e 2 f 2 f f 2 f 2 e f . . 
            . . f f f 2 2 e e 2 2 f f f . . 
            . f f e f 2 f e e f 2 f e f f . 
            . f e e f f e e e e f e e e f . 
            . . f e e e e e e e e e e f . . 
            . . . f e e e e e e e e f . . . 
            . . e 4 f f f f f f f f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `],
        200,
        false
        )
    }
    if (lastdir == 1 && controller.down.isPressed()) {
        animation.runImageAnimation(
        Hero,
        [img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . f f e 2 f f f f f f 2 e f f . 
            . f f f f f e e e e f f f f f . 
            . . f e f b f 4 4 f b f e f . . 
            . . f e 4 1 f d d f 1 4 e f . . 
            . . . f e 4 d d d d 4 e f e . . 
            . . f e f 2 2 2 2 e d d 4 e . . 
            . . e 4 f 2 2 2 2 e d d e . . . 
            . . . . f 4 4 5 5 f e e . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . f f f . . . . . . . . . 
            `,img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f e e 2 2 2 2 2 2 e f f . . 
            . f f e 2 f f f f f f 2 e f f . 
            . f f f f f e e e e f f f f f . 
            . . f e f b f 4 4 f b f e f . . 
            . . f e 4 1 f d d f 1 4 e f . . 
            . . e f e 4 d d d d 4 e f . . . 
            . . e 4 d d e 2 2 2 2 f e f . . 
            . . . e d d e 2 2 2 2 f 4 e . . 
            . . . . e e f 5 5 4 4 f . . . . 
            . . . . . f f f f f f f . . . . 
            . . . . . . . . . f f f . . . . 
            `],
        200,
        true
        )
        pauseUntil(() => !(controller.down.isPressed()))
    } else if (lastdir == 1 && !(controller.down.isPressed())) {
        animation.runImageAnimation(
        Hero,
        [img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `],
        200,
        false
        )
    }
    if (lastdir == 2 && controller.left.isPressed()) {
        animation.runImageAnimation(
        Hero,
        [img`
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e e f f . . . . 
            . . . f 2 2 2 e d d 4 . . . . . 
            . . . f 2 2 2 e d d e . . . . . 
            . . . f 5 5 4 f e e f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d e e e e e f . . . 
            . . . f e 4 e d d 4 f . . . . . 
            . . . f 2 2 e d d e f . . . . . 
            . . f f 5 5 f e e f f f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `,img`
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e e f f . . . . 
            . . . f 2 2 2 e d d 4 . . . . . 
            . . . f 2 2 2 e d d e . . . . . 
            . . . f 5 5 4 f e e f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e d d 4 . . . . 
            . . . f 2 2 2 2 e d d e . . . . 
            . . f f 5 5 4 4 f e e f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `],
        200,
        true
        )
        pauseUntil(() => !(controller.left.isPressed()))
    } else if (lastdir == 2 && !(controller.left.isPressed())) {
        animation.runImageAnimation(
        Hero,
        [img`
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e e f f . . . . 
            . . . f 2 2 2 e d d 4 . . . . . 
            . . . f 2 2 2 e d d e . . . . . 
            . . . f 5 5 4 f e e f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `],
        200,
        false
        )
    }
    if (lastdir == 3 && controller.right.isPressed()) {
        animation.runImageAnimation(
        Hero,
        [img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . f f e e 4 4 4 e f . . . 
            . . . . . 4 d d e 2 2 2 f . . . 
            . . . . . e d d e 2 2 2 f . . . 
            . . . . . f e e f 4 5 5 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e e e d d d f . . . 
            . . . . . f 4 d d e 4 e f . . . 
            . . . . . f e d d e 2 2 f . . . 
            . . . . f f f e e f 5 5 f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . f f . . . f f f . . . 
            `,img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . f f e e 4 4 4 e f . . . 
            . . . . . 4 d d e 2 2 2 f . . . 
            . . . . . e d d e 2 2 2 f . . . 
            . . . . . f e e f 4 5 5 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . 4 d d e 4 4 4 e f . . . 
            . . . . e d d e 2 2 2 2 f . . . 
            . . . . f e e f 4 4 5 5 f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . f f . . . f f f . . . 
            `],
        200,
        true
        )
        pauseUntil(() => !(controller.right.isPressed()))
    } else if (lastdir == 3 && !(controller.right.isPressed())) {
        animation.runImageAnimation(
        Hero,
        [img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . f f e e 4 4 4 e f . . . 
            . . . . . 4 d d e 2 2 2 f . . . 
            . . . . . e d d e 2 2 2 f . . . 
            . . . . . f e e f 4 5 5 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `],
        200,
        false
        )
    }
}
sprites.onOverlap(SpriteKind.Hitbox, SpriteKind.SSG, function (sprite, otherSprite) {
    dmgPlayer(7, "Slow", "Bleed", "", false)
})
sprites.onOverlap(SpriteKind.Hitbox, SpriteKind.SG, function (sprite, otherSprite) {
    dmgPlayer(6, "Slow", "", "", false)
})
controller.player3.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    lastdir3 = 0
})
controller.player2.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    if (MP == 0) {
        animation.runImageAnimation(
        spirit,
        [img`
            . . 8 8 8 8 8 8 . . 
            . . 8 8 2 2 8 8 . . 
            8 8 8 2 2 2 2 8 8 8 
            8 8 2 2 4 4 2 2 8 8 
            8 2 2 4 4 4 4 2 2 8 
            8 2 2 4 4 4 4 2 2 8 
            8 8 2 2 4 4 2 2 8 8 
            8 8 8 2 2 2 2 8 8 8 
            . . 8 8 2 2 8 8 . . 
            . . 8 8 8 8 8 8 . . 
            `,img`
            . . . . . . . . . . 
            . . 8 8 8 8 8 . . . 
            . 8 8 9 9 9 8 8 . . 
            . 8 9 9 4 9 9 8 . . 
            . 8 9 4 4 4 9 8 . . 
            . 8 9 9 4 9 9 8 . . 
            . 8 8 9 9 9 8 8 . . 
            . . 8 8 8 8 8 . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            `],
        200,
        false
        )
        music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.InBackground)
        if (inMenu == 0) {
            if (spirit.tileKindAt(TileDirection.Center, sprites.dungeon.floorLight3)) {
                locationx = spirit.tilemapLocation()
                locationy = spirit.tilemapLocation()
                tiles.setTileAt(tiles.getTileLocation(locationx.column, locationy.row), sprites.skillmap.islandTile4)
                tiles.setWallAt(tiles.getTileLocation(locationx.column, locationy.row), false)
            } else if (spirit.tileKindAt(TileDirection.Center, sprites.dungeon.floorLight3)) {
                locationx = spirit.tilemapLocation()
                locationy = spirit.tilemapLocation()
                tiles.setTileAt(tiles.getTileLocation(locationx.column, locationy.row), sprites.skillmap.islandTile4)
                tiles.setWallAt(tiles.getTileLocation(locationx.column, locationy.row), false)
                animation.stopAnimation(animation.AnimationTypes.All, spirit)
            }
        }
        pause(300)
    } else {
        SwingMP(2)
    }
})
function SpawnNPCs (Area: number, Map: string) {
    if (Map == "ovworld") {
        if (Area == 1) {
            NPCmarco = sprites.create(img`
                . . . f f f f f . . . . . 
                . f f f f f f f f f . . . 
                . f f f f f f c f f f . . 
                f f f f c f f f c f f . . 
                f c f f c c f f f c c f f 
                f c c f f f f e f f f f f 
                f f f f f f f e e f f f . 
                f f e e f b f e e f f . . 
                . f e 4 e 1 f 4 4 f . . . 
                . f f f e 4 4 4 4 f . . . 
                . . f e e e e e f f . . . 
                . . e 4 4 e 7 7 7 f . . . 
                . . e 4 4 e 7 7 7 f . . . 
                . . f e e f 6 6 6 f . . . 
                . . . f f f f f f . . . . 
                . . . . f f f . . . . . . 
                `, SpriteKind.NPC)
            tiles.placeOnTile(NPCmarco, tiles.getTileLocation(7, 7))
            NPCstacy = sprites.create(img`
                . f f f . f f f f . f f f . 
                f f f f f c c c c f f f f f 
                f f f f b c c c c b f f f f 
                f f f c 3 c c c c 3 c f f f 
                . f 3 3 c c c c c c 3 3 f . 
                . f c c c c c c c c c c f . 
                . f f c c c c c c c c f f . 
                . f f f c c c c c c f f f . 
                . f f f f f f f f f f f f . 
                . . f f f f f f f f f f . . 
                . . e f f f f f f f f e . . 
                . e 4 f f f f f f f f 4 e . 
                . 4 d f 3 3 3 3 3 3 c d 4 . 
                . 4 4 f 6 6 6 6 6 6 f 4 4 . 
                . . . . f f f f f f . . . . 
                . . . . f f . . f f . . . . 
                `, SpriteKind.NPC)
            tiles.placeOnTile(NPCstacy, tiles.getTileLocation(19, 6))
            NPCgrandpa = sprites.create(img`
                . . . . f f f f f . . . 
                . . f f e e e e e f . . 
                . f f e e e e e e e f . 
                f f f f e e e e e e e f 
                f f f f f e e e 4 e e f 
                f f f f e e e 4 4 e e f 
                f f f f 4 4 4 4 4 e f f 
                f f 4 e 4 f f 4 4 e f f 
                . f 4 d 4 d d d d f f . 
                . f f f 4 d d b b f . . 
                . . f e e 4 4 4 e f . . 
                . . 4 d d e 1 1 1 f . . 
                . . e d d e 1 1 1 f . . 
                . . f e e f 6 6 6 f . . 
                . . . f f f f f f . . . 
                . . . . f f f . . . . . 
                `, SpriteKind.NPC)
            tiles.placeOnTile(NPCgrandpa, tiles.getTileLocation(7, 16))
            NPCguardv1 = sprites.create(img`
                . . . . . f f f f . . . . . 
                . . . f f b b b b f f . . . 
                . . f b b c c c c b b f . . 
                . f b b b c d d c b b b f . 
                . f b b b c d d c b b b f . 
                f b b b c d d d d c b b b f 
                f b b c c 4 4 4 4 c c b b f 
                f b b f b f 4 4 f b f b b f 
                f b b 4 1 f d d f 1 4 b b f 
                . f b f d d d d d d f b f . 
                . f e f e 4 4 4 4 e f e f . 
                . e 4 f c b b b b c f 4 e . 
                . 4 4 c b b b b b b c 4 4 . 
                . 4 f b c c c b c b b f 4 . 
                . . f f c b c b c c f f . . 
                . . . . f f b b f f . . . . 
                `, SpriteKind.NPC)
            tiles.placeOnTile(NPCguardv1, tiles.getTileLocation(28, 19))
        }
        if (Area == 2) {
            NPCqdpxvill = sprites.create(img`
                . . . f f f f f . . . . . 
                . f f f f f f f f f . . . 
                . f f f f f f c f f f . . 
                f f f f c f f f c f f . . 
                f c f f c c f f f c c f f 
                f c c f f f f c f f f f f 
                f f f f f f f c c f f f . 
                f f c c f b f c c f f . . 
                . f c b c 1 f b b f . . . 
                . f f f c b b b b f . . . 
                . . f c c c c c f f . . . 
                . . f 4 4 4 4 5 5 f . . . 
                . . f 4 4 4 4 5 5 f . . . 
                . . f 8 8 8 6 6 6 f . . . 
                . . . f f f f f f . . . . 
                . . . . f f f . . . . . . 
                `, SpriteKind.NPC)
            tiles.placeOnTile(NPCqdpxvill, tiles.getTileLocation(42, 13))
            NPCqdpxvill = sprites.create(img`
                . . . f f f f f . . . . . 
                . f f f f f f f f f . . . 
                . f f f f f f c f f f . . 
                f f f f c f f f c f f . . 
                f c f f c c f f f c c f f 
                f c c f f f f c f f f f f 
                f f f f f f f c c f f f . 
                f f c c f b f c c f f . . 
                . f c b c 1 f b b f . . . 
                . f f f c b b b b f . . . 
                . . f c c c c c f f . . . 
                . . f 4 4 4 4 5 5 f . . . 
                . . f 4 4 4 4 5 5 f . . . 
                . . f 8 8 8 6 6 6 f . . . 
                . . . f f f f f f . . . . 
                . . . . f f f . . . . . . 
                `, SpriteKind.NPC)
            tiles.placeOnTile(NPCqdpxvill, tiles.getTileLocation(42, 16))
            NPCqdpxvill = sprites.create(img`
                . . . f f f f f . . . . . 
                . f f f f f f f f f . . . 
                . f f f f f f c f f f . . 
                f f f f c f f f c f f . . 
                f c f f c c f f f c c f f 
                f c c f f f f c f f f f f 
                f f f f f f f c c f f f . 
                f f c c f b f c c f f . . 
                . f c b c 1 f b b f . . . 
                . f f f c b b b b f . . . 
                . . f c c c c c f f . . . 
                . . f 4 4 4 4 5 5 f . . . 
                . . f 4 4 4 4 5 5 f . . . 
                . . f 8 8 8 6 6 6 f . . . 
                . . . f f f f f f . . . . 
                . . . . f f f . . . . . . 
                `, SpriteKind.NPC)
            tiles.placeOnTile(NPCqdpxvill, tiles.getTileLocation(42, 19))
            NPCguardv2 = sprites.create(img`
                . . . . . f f f f . . . . . 
                . . . f f b b b b f f . . . 
                . . f b b c c c c b b f . . 
                . f b b b c 5 5 c b b b f . 
                . f b b b 5 5 5 5 b b b f . 
                f b b b c d 5 5 d c b b b f 
                f b b c c 4 4 4 4 c c b b f 
                f b b f b f 4 4 f b f b b f 
                f b b 4 1 f d d f 1 4 b b f 
                . f b f d d d d d d f b f . 
                . f e f e 4 4 4 4 e f e f . 
                . e 4 f c b b b b c f 4 e . 
                . 4 4 c b b b b b b c 4 4 . 
                . 4 f b c c c b c b b f 4 . 
                . . f f c b c b c c f f . . 
                . . . . f f b b f f . . . . 
                `, SpriteKind.NPC)
            tiles.placeOnTile(NPCguardv2, tiles.getTileLocation(36, 19))
            NPCguardv2 = sprites.create(img`
                . . . . . f f f f . . . . . 
                . . . f f b b b b f f . . . 
                . . f b b c c c c b b f . . 
                . f b b b c 5 5 c b b b f . 
                . f b b b 5 5 5 5 b b b f . 
                f b b b c d 5 5 d c b b b f 
                f b b c c 4 4 4 4 c c b b f 
                f b b f b f 4 4 f b f b b f 
                f b b 4 1 f d d f 1 4 b b f 
                . f b f d d d d d d f b f . 
                . f e f e 4 4 4 4 e f e f . 
                . e 4 f c b b b b c f 4 e . 
                . 4 4 c b b b b b b c 4 4 . 
                . 4 f b c c c b c b b f 4 . 
                . . f f c b c b c c f f . . 
                . . . . f f b b f f . . . . 
                `, SpriteKind.NPC)
            tiles.placeOnTile(NPCguardv2, tiles.getTileLocation(38, 19))
            NPCguardv2gate = sprites.create(img`
                . . . . . f f f f . . . . . 
                . . . f f b b b b f f . . . 
                . . f b b c c c c b b f . . 
                . f b b b c 5 5 c b b b f . 
                . f b b b 4 4 4 4 b b b f . 
                f b b b c d 5 5 d c b b b f 
                f b b c c 4 4 4 4 c c b b f 
                f b b f b f 4 4 f b f b b f 
                f b b 4 1 f d d f 1 4 b b f 
                . f b f d d d d d d f b f . 
                . f e f e 4 4 4 4 e f e f . 
                . e 4 f c b b b b c f 4 e . 
                . 4 4 c b b b b b b c 4 4 . 
                . 4 f b c c c b c b b f 4 . 
                . . f f c b c b c c f f . . 
                . . . . f f b b f f . . . . 
                `, SpriteKind.NPC)
            tiles.placeOnTile(NPCguardv2gate, tiles.getTileLocation(52, 24))
            NPCguardv2gateb = sprites.create(img`
                . . . . . f f f f . . . . . 
                . . . f f b b b b f f . . . 
                . . f b b c c c c b b f . . 
                . f b b b c 5 5 c b b b f . 
                . f b b b 4 4 4 4 b b b f . 
                f b b b c d 5 5 d c b b b f 
                f b b c c 4 4 4 4 c c b b f 
                f b b f b f 4 4 f b f b b f 
                f b b 4 1 f d d f 1 4 b b f 
                . f b f d d d d d d f b f . 
                . f e f e 4 4 4 4 e f e f . 
                . e 4 f c b b b b c f 4 e . 
                . 4 4 c b b b b b b c 4 4 . 
                . 4 f b c c c b c b b f 4 . 
                . . f f c b c b c c f f . . 
                . . . . f f b b f f . . . . 
                `, SpriteKind.NPC)
            tiles.placeOnTile(NPCguardv2gateb, tiles.getTileLocation(63, 24))
            NPCguardv2gatec = sprites.create(img`
                . . . . . f f f f . . . . . 
                . . . f f b b b b f f . . . 
                . . f b b c c c c b b f . . 
                . f b b b c 5 5 c b b b f . 
                . f b b b 4 4 4 4 b b b f . 
                f b b b c d 5 5 d c b b b f 
                f b b c c 4 4 4 4 c c b b f 
                f b b f b f 4 4 f b f b b f 
                f b b 4 1 f d d f 1 4 b b f 
                . f b f d d d d d d f b f . 
                . f e f e 4 4 4 4 e f e f . 
                . e 4 f c b b b b c f 4 e . 
                . 4 4 c b b b b b b c 4 4 . 
                . 4 f b c c c b c b b f 4 . 
                . . f f c b c b c c f f . . 
                . . . . f f b b f f . . . . 
                `, SpriteKind.NPC)
            tiles.placeOnTile(NPCguardv2gatec, tiles.getTileLocation(52, 30))
            NPCguardv2gated = sprites.create(img`
                . . . . . f f f f . . . . . 
                . . . f f b b b b f f . . . 
                . . f b b c c c c b b f . . 
                . f b b b c 5 5 c b b b f . 
                . f b b b 4 4 4 4 b b b f . 
                f b b b c d 5 5 d c b b b f 
                f b b c c 4 4 4 4 c c b b f 
                f b b f b f 4 4 f b f b b f 
                f b b 4 1 f d d f 1 4 b b f 
                . f b f d d d d d d f b f . 
                . f e f e 4 4 4 4 e f e f . 
                . e 4 f c b b b b c f 4 e . 
                . 4 4 c b b b b b b c 4 4 . 
                . 4 f b c c c b c b b f 4 . 
                . . f f c b c b c c f f . . 
                . . . . f f b b f f . . . . 
                `, SpriteKind.NPC)
            tiles.placeOnTile(NPCguardv2gated, tiles.getTileLocation(63, 30))
            NPCgenvillv2 = sprites.create(img`
                . . . . . f f f f . . . . . 
                . . . f f 5 5 5 5 f f . . . 
                . . f 5 5 5 5 5 5 5 5 f . . 
                . f 5 5 5 5 5 5 5 5 5 5 f . 
                . f 5 5 5 d b b d 5 5 5 f . 
                f 5 5 5 b 4 4 4 4 b 5 5 5 f 
                f 5 5 c c 4 4 4 4 c c 5 5 f 
                f b b f b f 4 4 f b f b b f 
                f b b 4 1 f d d f 1 4 b b f 
                . f b f d d d d d d f b f . 
                . f e f e 4 4 4 4 e f e f . 
                . e 4 f 6 9 9 9 9 6 f 4 e . 
                . 4 d c 9 9 9 9 9 9 c d 4 . 
                . 4 f b 3 b 3 b 3 b b f 4 . 
                . . f f 3 b 3 b 3 3 f f . . 
                . . . . f f b b f f . . . . 
                `, SpriteKind.NPC)
            tiles.placeOnTile(NPCgenvillv2, tiles.getTileLocation(42, 4))
            NPCgenvillv2b = sprites.create(img`
                . . . . . f f f f f f . . . . . 
                . . . . f b 3 3 3 3 b f . . . . 
                . . . f b 3 3 3 3 3 3 b f . . . 
                . . f b 3 3 3 3 3 3 3 3 b f . . 
                . . f 3 3 3 3 3 3 3 3 3 3 f . . 
                . f 3 3 e b 3 e e 3 b e 3 3 f . 
                . f 3 3 f f e e e e f f 3 3 f . 
                . f b b f b f e e f b f b b f . 
                . f b b e 1 f 4 4 f 1 e b b f . 
                f f b b f 4 4 4 4 4 4 f b b f f 
                f b b f f f e e e e f f f b b f 
                . f e e f b d d d d b f e e f . 
                . . e 4 c d d d d d d c 4 e . . 
                . . e f b d b d b d b b f e . . 
                . . . f f 1 d 1 d 1 d f f . . . 
                . . . . . f f b b f f . . . . . 
                `, SpriteKind.NPC)
            tiles.placeOnTile(NPCgenvillv2b, tiles.getTileLocation(68, 19))
            NPCguardv2castle = sprites.create(img`
                . . . . . f f f f . . . . . 
                . . . f f b b b b f f . . . 
                . . f b b c 2 2 c b b f . . 
                . f b b b 2 5 5 2 b b b f . 
                . f b b 2 5 5 5 5 2 b b f . 
                f b b b c 2 5 5 2 c b b b f 
                f b b c c 4 4 4 4 c c b b f 
                f b b f b f 4 4 f b f b b f 
                f b b 4 1 f d d f 1 4 b b f 
                . f b f d d d d d d f b f . 
                . f e f e 4 4 4 4 e f e f . 
                . e 4 f c b b b b c f 4 e . 
                . 4 4 c b b b b b b c 4 4 . 
                . 4 f b c c c b c b b f 4 . 
                . . f f c b c b c c f f . . 
                . . . . f f b b f f . . . . 
                `, SpriteKind.NPC)
            tiles.placeOnTile(NPCguardv2castle, tiles.getTileLocation(73, 9))
            NPCguardv2castleb = sprites.create(img`
                . . . . . f f f f . . . . . 
                . . . f f b b b b f f . . . 
                . . f b b c 2 2 c b b f . . 
                . f b b b 2 5 5 2 b b b f . 
                . f b b 2 5 5 5 5 2 b b f . 
                f b b b c 2 5 5 2 c b b b f 
                f b b c c 4 4 4 4 c c b b f 
                f b b f b f 4 4 f b f b b f 
                f b b 4 1 f d d f 1 4 b b f 
                . f b f d d d d d d f b f . 
                . f e f e 4 4 4 4 e f e f . 
                . e 4 f c b b b b c f 4 e . 
                . 4 4 c b b b b b b c 4 4 . 
                . 4 f b c c c b c b b f 4 . 
                . . f f c b c b c c f f . . 
                . . . . f f b b f f . . . . 
                `, SpriteKind.NPC)
            tiles.placeOnTile(NPCguardv2castleb, tiles.getTileLocation(73, 16))
        }
    } else {
    	
    }
}
sprites.onCreated(SpriteKind.Projectile, function (sprite) {
    if (Sword == 1) {
    	
    } else if (Sword == 2) {
    	
    } else {
    	
    }
})
function dmgPlayer (dmg: number, stat1: string, stat2: string, stat3: string, ignoreDef: boolean) {
    if (ignoreDef) {
        HeroHP.value += dmg * -1
    } else {
        HeroHP.value += dmg * -1 + (Defense + Natdefence)
    }
    Statuseffect.push(stat1)
    Statuseffect.push(stat2)
    Statuseffect.push(stat3)
    music.play(music.createSoundEffect(WaveShape.Noise, 4841, 338, 255, 0, 100, SoundExpressionEffect.Vibrato, InterpolationCurve.Logarithmic), music.PlaybackMode.InBackground)
    pause(500)
}
function SetdDeftxt () {
    if (Shield == 1) {
        Defense = 1
    } else if (Shield == 2) {
        Defense = 3
    } else if (Shield == 3) {
        Defense = 5
    } else if (Shield == 4) {
        Defense = 7
    } else if (Shield == 5) {
        Defense = 9
    } else if (Shield == 6) {
        Defense = 12
    } else if (Shield == 7) {
        Defense = 15
    }
}
controller.player2.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    lastdir2 = 3
})
function NPCspeech (NPC: Sprite) {
    if (NPC == NPCmarco) {
        story.printCharacterText("Oh hi, are you new to town?")
        story.printCharacterText("Oh wait! Where's my manners, what is your name?")
        Name = game.askForString("")
        if (Name == "Marco") {
            story.printCharacterText("Hey! My name's Marco too! That's sooo cool", "Marco")
            story.printCharacterText("Oh! And here's your ID!", "Marco")
        } else if (Name == "Carmine") {
            story.printCharacterText("Your the... the fabled Carmine!?")
            story.printCharacterText("H.. Here's your Equipment!")
            Shield = 3
            Sword = 3
            game.splash("You got the laser sword", "and a super shield!")
            story.printCharacterText("Oh my god, I must tell the village!")
            story.printCharacterText("Oh and I'm Marco!")
            story.spriteMoveToLocation(NPCmarco, 200, NPCmarco.y, 45)
            story.spriteMoveToLocation(NPCmarco, NPCmarco.x, 300, 45)
            pause(100)
            sprites.destroy(NPCmarco)
        } else {
            story.printCharacterText("Oh! " + Name + " That's a nice name!")
            story.printCharacterText("My name's Marco. Nice to meet you!")
            story.printCharacterText("Oh! And here's your ID!", "Marco")
            game.splash("You have been given:", "An ID!")
        }
        if (p2SP == 1) {
            story.printCharacterText("Hey, what's that?", "Marco")
            story.printCharacterText("Does it have a name?", "Marco")
            game.splash("Do you have a name", "Spirit?")
            story.showPlayerChoices("Yes", "No")
            if (story.checkLastAnswer("Yes")) {
                name2 = game.askForString("")
                story.printCharacterText("Oh! " + name2 + ". That's a great name!", "Marco")
                story.printCharacterText("Bye " + Name + " and " + name2 + ", I hope you have a good time!", "Marco")
            } else {
                story.printCharacterText("No? Ok, Bye!!!", "Marco")
            }
        }
    }
    if (NPC == NPCgrandpa) {
        story.printCharacterText("Hello there, young one.")
        story.printCharacterText("I am Paul, or you can call me Old Paul")
        game.splash("Which do you prefer?")
        story.showPlayerChoices("Paul", "Old Paul")
        if (story.checkLastAnswer("Paul")) {
            Paul = story.getLastAnswer()
        } else {
            Paul = story.getLastAnswer()
        }
        story.printCharacterText("Understandable", Paul)
        story.printCharacterText("I would at your age too.", Paul)
        if (Name != "") {
            story.printCharacterText("Now, " + Name + ", Is that your name?", Paul)
            story.printCharacterText("Marco told the whole village", Paul)
            story.printCharacterText("Now...", Paul)
        }
        music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.UntilDone)
        pause(500)
        story.printCharacterText("Take my sword. I am much too old for it.", Paul)
        story.printCharacterText("Go have fun with it, but be careful!", Paul)
        game.splash("You have been given", "A trusty Sword!")
        Sword = 1
    }
    if (NPC == NPCstacy) {
        story.printCharacterText("Hey, leave me alone!")
        pause(1000)
        story.printCharacterText("You're still there?")
        if (Hero.tileKindAt(TileDirection.Center, assets.tile`myTile2`)) {
            story.printCharacterText("Oh good. I have to sort these books.")
            story.printCharacterText("The name's Stacy")
            if (Name != "") {
                story.printCharacterText("Hey, what was your name? " + Name + ", right?", "Stacy")
                story.printCharacterText("Well then, " + Name + ". Can you help me with this?", "Stacy")
            } else {
                story.printCharacterText("Well, can you help me with this?", "Stacy")
            }
            Sortbook = 1
            game.splash("New Quest:", "Sort books")
        }
    }
    if (NPC == NPCguardv1) {
        game.showLongText("Halt!", DialogLayout.Bottom)
        if (Name != "" && Sword > 0 && Shield > 0) {
            story.printCharacterText("Umm... nevermind go through. But you be careful out there Kid!", "Guard")
            Setmonsters(1, 6, false, 31, 13, 34, 24, true)
            SpawnNPCs(2, "ovworld")
            tiles.setWallAt(tiles.getTileLocation(29, 19), false)
            tiles.setWallAt(tiles.getTileLocation(29, 20), false)
            tiles.setWallAt(tiles.getTileLocation(29, 21), false)
            tiles.setTileAt(tiles.getTileLocation(29, 19), sprites.castle.tilePath2)
            tiles.setTileAt(tiles.getTileLocation(29, 20), sprites.castle.tilePath5)
            tiles.setTileAt(tiles.getTileLocation(29, 21), sprites.castle.tilePath8)
        } else if (Name != "" && Sword == 0 && Shield == 1) {
            story.printCharacterText("You need a Sword to pass", "Guard")
        } else if (Name != "" && Sword == 1 && Shield == 0) {
            story.printCharacterText("You need a Shield to pass", "Guard")
        } else if (Name == "" && Sword == 1 && Shield == 1) {
            story.printCharacterText("You need an ID to pass", "Guard")
        } else if (Name != "" && Sword == 0 && Shield == 0) {
            story.printCharacterText("You need a Sword and Shield to pass", "Guard")
        } else if (Name == "" && Sword == 0 && Shield == 1) {
            story.printCharacterText("You need a Sword and ID to pass", "Guard")
        } else if (Name == "" && Sword == 1 && Shield == 0) {
            story.printCharacterText("You need a Shield and ID to pass", "Guard")
        } else if (Name == "" && Sword == 0 && Shield == 0) {
            story.printCharacterText("You need a Sword, Shield and ID to pass", "Guard")
        }
    }
    if (NPC == NPCguardv2) {
        game.showLongText("Halt!", DialogLayout.Bottom)
        story.printCharacterText("Where do you come from?", "Guard")
        story.printCharacterText("Oh, the village there?", "Guard")
        story.printCharacterText("Well, you have a sword right?", "Guard")
        story.printCharacterText("Can you help us defeat these ghouls?", "Guard")
        game.splash("Will you help them?")
        story.showPlayerChoices("Yes", "No")
        if (story.checkLastAnswer("Yes")) {
            story.printCharacterText("Thanks for your help Kid!", "Guard")
            tiles.setWallAt(tiles.getTileLocation(37, 19), false)
            tiles.setWallAt(tiles.getTileLocation(37, 20), false)
            tiles.setWallAt(tiles.getTileLocation(37, 21), false)
            tiles.setTileAt(tiles.getTileLocation(37, 19), sprites.castle.tilePath2)
            tiles.setTileAt(tiles.getTileLocation(37, 20), sprites.castle.tilePath5)
            tiles.setTileAt(tiles.getTileLocation(37, 21), sprites.castle.tilePath8)
            for (let index = 0; index < 4; index++) {
                Setmonsters(1, 6, false, 41, 22, 46, 24, true)
                Setmonsters(2, 2, false, 41, 22, 46, 24, true)
                pause(5000)
            }
        } else {
            story.printCharacterText("No? Well you cant come in.", "Guard")
        }
    }
    if (NPC == NPCqdpxvill) {
        story.printCharacterText("Hey there Child!")
        story.printCharacterText("How do you like my place? Do you think it looks cool?")
        if (game.ask("Do you like", "this guy's house?")) {
            story.printCharacterText("You have nice taste Kid! If you want, there's a free one up top.")
        } else {
            game.showLongText("NO?", DialogLayout.Bottom)
            story.printCharacterText("You might want to change your mind.")
            for (let index = 0; index < 8; index++) {
                Setmonsters(1, 3, false, 47, 9, 50, 21, true)
                Setmonsters(2, 1, false, 47, 9, 50, 21, true)
                Setmonsters(1, 1, true, 47, 9, 50, 21, true)
                pause(5000)
            }
        }
    }
    if (NPC == NPCguardv2gate) {
        game.showLongText("Halt!", DialogLayout.Bottom)
        game.showLongText("...", DialogLayout.Bottom)
        story.printCharacterText("You cleared out the Ghouls?", "Guard")
        story.printCharacterText("Alright, I'll open the gates.", "Guard")
        tiles.setWallAt(tiles.getTileLocation(53, 25), false)
        tiles.setWallAt(tiles.getTileLocation(54, 25), false)
        tiles.setWallAt(tiles.getTileLocation(61, 25), false)
        tiles.setWallAt(tiles.getTileLocation(62, 25), false)
        tiles.setTileAt(tiles.getTileLocation(53, 25), sprites.dungeon.doorOpenSouth)
        tiles.setTileAt(tiles.getTileLocation(54, 25), sprites.dungeon.doorOpenSouth)
        tiles.setTileAt(tiles.getTileLocation(61, 25), sprites.dungeon.doorOpenSouth)
        tiles.setTileAt(tiles.getTileLocation(62, 25), sprites.dungeon.doorOpenSouth)
        pause(1000)
        tiles.setWallAt(tiles.getTileLocation(53, 27), false)
        tiles.setWallAt(tiles.getTileLocation(54, 27), false)
        tiles.setWallAt(tiles.getTileLocation(61, 27), false)
        tiles.setWallAt(tiles.getTileLocation(62, 27), false)
        tiles.setTileAt(tiles.getTileLocation(53, 27), sprites.dungeon.doorOpenSouth)
        tiles.setTileAt(tiles.getTileLocation(54, 27), sprites.dungeon.doorOpenSouth)
        tiles.setTileAt(tiles.getTileLocation(61, 27), sprites.dungeon.doorOpenSouth)
        tiles.setTileAt(tiles.getTileLocation(62, 27), sprites.dungeon.doorOpenSouth)
        pause(1000)
        tiles.setWallAt(tiles.getTileLocation(53, 29), false)
        tiles.setWallAt(tiles.getTileLocation(54, 29), false)
        tiles.setWallAt(tiles.getTileLocation(61, 29), false)
        tiles.setWallAt(tiles.getTileLocation(62, 29), false)
        tiles.setTileAt(tiles.getTileLocation(53, 29), sprites.dungeon.doorOpenSouth)
        tiles.setTileAt(tiles.getTileLocation(54, 29), sprites.dungeon.doorOpenSouth)
        tiles.setTileAt(tiles.getTileLocation(61, 29), sprites.dungeon.doorOpenSouth)
        tiles.setTileAt(tiles.getTileLocation(62, 29), sprites.dungeon.doorOpenSouth)
        tiles.setWallAt(tiles.getTileLocation(37, 19), true)
        tiles.setWallAt(tiles.getTileLocation(37, 20), true)
        tiles.setWallAt(tiles.getTileLocation(37, 21), true)
        tiles.setTileAt(tiles.getTileLocation(37, 19), sprites.builtin.brick)
        tiles.setTileAt(tiles.getTileLocation(37, 20), sprites.builtin.brick)
        tiles.setTileAt(tiles.getTileLocation(37, 21), sprites.builtin.brick)
        donetutorial = 1
    }
    if (NPC == NPCguardv2castle) {
        game.showLongText("Halt!", DialogLayout.Bottom)
        story.printCharacterText("You have yet to prove you are trustworthy.", "Guard")
        story.printCharacterText("You may not enter the castle! Now scram Kid!", "Guard")
    }
    pause(200)
}
controller.player4.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    if (inMenu == 0) {
        SwingMP(4)
    }
})
function StacysQuest () {
    pauseUntil(() => Booksort == 1)
    pause(500)
    game.showLongText("There we go!", DialogLayout.Bottom)
    game.showLongText("Now... I think you should have this shield", DialogLayout.Bottom)
    game.splash("You have been given", "A trusty Shield!")
    Shield = 1
    SetdDeftxt()
    pauseUntil(() => (0 as any) == (1 as any))
}
function Swing () {
    if (MP == 0) {
        if (Sword == 1) {
            music.play(music.melodyPlayable(music.zapped), music.PlaybackMode.InBackground)
            if (lastdir == 0) {
                Swrdswing = sprites.createProjectileFromSprite(img`
                    .......22.......
                    .....222222.....
                    ....222..222....
                    ...22......22...
                    ..22........22..
                    .22..........22.
                    ..............22
                    ...............2
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    `, Hero, 0, 0)
            } else if (lastdir == 1) {
                Swrdswing = sprites.createProjectileFromSprite(img`
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ...............2
                    ..............22
                    .22..........22.
                    ..22........22..
                    ...22......22...
                    ....222..222....
                    .....222222.....
                    .......22.......
                    `, Hero, 0, 0)
            } else if (lastdir == 2) {
                Swrdswing = sprites.createProjectileFromSprite(img`
                    ................................
                    .......2........................
                    ......22........................
                    .....22.........................
                    ....22..........................
                    ...22...........................
                    ...22...........................
                    ..22............................
                    ..22............................
                    ...22...........................
                    ...22...........................
                    ....22..........................
                    .....22.........................
                    ......22........................
                    .......22.......................
                    ........22......................
                    `, Hero, 0, 0)
            } else {
                Swrdswing = sprites.createProjectileFromSprite(img`
                    ................................
                    ........................2.......
                    ........................22......
                    .........................22.....
                    ..........................22....
                    ...........................22...
                    ...........................22...
                    ............................22..
                    ............................22..
                    ...........................22...
                    ...........................22...
                    ..........................22....
                    .........................22.....
                    ........................22......
                    .......................22.......
                    ......................22........
                    `, Hero, 0, 0)
            }
            Swrdswing.z = 4
            pause(100)
            sprites.destroy(Swrdswing)
            pause(640 - SwingSpeed * 10)
        } else if (Sword == 2) {
            music.play(music.melodyPlayable(music.zapped), music.PlaybackMode.InBackground)
            music.play(music.createSoundEffect(WaveShape.Triangle, 1957, 1, 255, 0, 250, SoundExpressionEffect.Tremolo, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
            if (lastdir == 0) {
                Swrdswing = sprites.createProjectileFromSprite(img`
                    .......22.......
                    .....222222.....
                    ....222..222....
                    ...22......22...
                    ..22........22..
                    .22..........22.
                    ..............22
                    ...............2
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    `, Hero, 0, -50)
            } else if (lastdir == 1) {
                Swrdswing = sprites.createProjectileFromSprite(img`
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ...............2
                    ..............22
                    .22..........22.
                    ..22........22..
                    ...22......22...
                    ....222..222....
                    .....222222.....
                    .......22.......
                    `, Hero, 0, 50)
            } else if (lastdir == 2) {
                Swrdswing = sprites.createProjectileFromSprite(img`
                    ................................
                    .......2........................
                    ......22........................
                    .....22.........................
                    ....22..........................
                    ...22...........................
                    ...22...........................
                    ..22............................
                    ..22............................
                    ...22...........................
                    ...22...........................
                    ....22..........................
                    .....22.........................
                    ......22........................
                    .......22.......................
                    ........22......................
                    `, Hero, -50, 0)
            } else {
                Swrdswing = sprites.createProjectileFromSprite(img`
                    ................................
                    ........................2.......
                    ........................22......
                    .........................22.....
                    ..........................22....
                    ...........................22...
                    ...........................22...
                    ............................22..
                    ............................22..
                    ...........................22...
                    ...........................22...
                    ..........................22....
                    .........................22.....
                    ........................22......
                    .......................22.......
                    ......................22........
                    `, Hero, 50, 0)
            }
            Swrdswing.z = 4
            pause(400)
            sprites.destroy(Swrdswing)
            pause(600 - SwingSpeed * 10)
        } else {
            music.play(music.createSoundEffect(WaveShape.Triangle, 1957, 1, 255, 0, 250, SoundExpressionEffect.Tremolo, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
            if (lastdir == 0) {
                Swrdswing = sprites.createProjectileFromSprite(img`
                    .....22222......
                    .....222222.....
                    ....22222222....
                    ...2222222.22...
                    ..22.22222..22..
                    .22..22222...22.
                    .....22222....22
                    ...............2
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    `, Hero, 0, -150)
            } else if (lastdir == 1) {
                Swrdswing = sprites.createProjectileFromSprite(img`
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ...............2
                    ......22222...22
                    .22...22222..22.
                    ..22..22222.22..
                    ...22.2222222...
                    ....22222222....
                    .....222222.....
                    ......22222.....
                    `, Hero, 0, 150)
            } else if (lastdir == 2) {
                Swrdswing = sprites.createProjectileFromSprite(img`
                    ................................
                    .......2........................
                    ......22........................
                    .....22.........................
                    ....22..........................
                    ...22...........................
                    222222222.......................
                    222222222.......................
                    222222222.......................
                    222222222.......................
                    222222222.......................
                    ....22..........................
                    .....22.........................
                    ......22........................
                    .......22.......................
                    ........22......................
                    `, Hero, -150, 0)
            } else {
                Swrdswing = sprites.createProjectileFromSprite(img`
                    ................................
                    ........................2.......
                    ........................22......
                    .........................22.....
                    ..........................22....
                    .......................222222222
                    .......................222222222
                    .......................222222222
                    .......................222222222
                    .......................222222222
                    ...........................22...
                    ..........................22....
                    .........................22.....
                    ........................22......
                    .......................22.......
                    ......................22........
                    `, Hero, 150, 0)
            }
            Swrdswing.z = 4
            pause(500)
            sprites.destroy(Swrdswing)
            pause(100 - SwingSpeed * 5)
        }
    }
}
controller.player3.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    lastdir3 = 1
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(Paused)) {
        Paused = true
        if (MP == 0) {
            Menu = miniMenu.createMenu(
            miniMenu.createMenuItem("Stats", img`
                1 1 1 1 1 6 1 1 
                1 1 3 1 1 6 1 1 
                8 1 3 1 1 6 1 7 
                8 1 3 1 4 6 7 7 
                8 1 3 1 4 1 7 7 
                8 2 3 1 4 1 7 7 
                8 2 3 1 4 1 7 7 
                8 2 3 5 4 1 7 7 
                `),
            miniMenu.createMenuItem("Save", img`
                1 1 1 f f f f f 
                1 1 f c c b b f 
                1 f b b b b b f 
                f b b d d b b f 
                f f f d d f f f 
                f 1 1 1 1 1 1 f 
                f 1 1 1 1 1 1 f 
                f f f f f f f f 
                `),
            miniMenu.createMenuItem("Item", img`
                1 c c c c c c 1 
                1 c b e e b c 1 
                1 c e b b e c 1 
                1 c b e e b c 1 
                1 c e b b e c 1 
                1 c b e e b c 1 
                1 c e b b e c 1 
                1 c c c c c c 1 
                `),
            miniMenu.createMenuItem("Upgrade", img`
                1 1 1 2 4 1 1 1 
                1 7 7 2 4 5 5 1 
                7 2 7 2 4 5 4 5 
                7 2 7 2 4 5 4 5 
                1 1 7 2 4 5 1 1 
                1 1 7 2 4 5 1 1 
                1 1 7 2 4 5 1 1 
                1 1 1 1 1 1 1 1 
                `),
            miniMenu.createMenuItem("Quit", img`
                1 1 2 2 2 2 1 1 
                1 2 1 1 1 1 2 1 
                2 1 1 1 1 2 1 2 
                2 1 1 1 2 1 1 2 
                2 1 1 2 1 1 1 2 
                2 1 2 1 1 1 1 2 
                1 2 1 1 1 1 2 1 
                1 1 2 2 2 2 1 1 
                `)
            )
        } else {
            Menu = miniMenu.createMenu(
            miniMenu.createMenuItem("Quit", img`
                1 1 2 2 2 2 1 1 
                1 2 1 1 1 1 2 1 
                2 1 1 1 1 2 1 2 
                2 1 1 1 2 1 1 2 
                2 1 1 2 1 1 1 2 
                2 1 2 1 1 1 1 2 
                1 2 1 1 1 1 2 1 
                1 1 2 2 2 2 1 1 
                `)
            )
        }
        Menu.setPosition(Hero.x, Hero.y)
        Menu.z = 100
        Menu.setDimensions(85, 100)
        Menu.setMenuStyleProperty(miniMenu.MenuStyleProperty.ScrollIndicatorColor, 1)
        Menu.setStyleProperty(miniMenu.StyleKind.Title, miniMenu.StyleProperty.Alignment, 5)
        Menu.setTitle("Menu")
        Menu.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Foreground, 6)
        Menu.onButtonPressed(controller.A, function (selection, selectedIndex) {
            if (selectedIndex == 0) {
                if (p2SP == 1) {
                    game.showLongText("P1: " + ("Name: " + Name) + ("ATK:" + Sword) + ("DEF:" + Defense), DialogLayout.Full)
                    game.showLongText("P2: " + ("Name: " + Name), DialogLayout.Full)
                } else {
                    game.showLongText("Name: " + Name + ("ATK:" + Sword) + ("DEF:" + Defense), DialogLayout.Full)
                }
            } else if (selectedIndex == 1) {
                Menu.close()
                story.showPlayerChoices("Save 1", "Save 2", "Save 3", "Cancel")
                if (story.checkLastAnswer("Save 1")) {
                    SaveLoad(true, 1)
                } else if (story.checkLastAnswer("Save 2")) {
                    blockSettings.writeNumberArray("Save 2", [
                    2,
                    HeroHP.max,
                    exp,
                    exp2lvl,
                    level,
                    Sword,
                    Shield,
                    Natdefence,
                    HPpnts,
                    Natdefpnt,
                    Speedpnts,
                    Speed,
                    Swingpnts,
                    Map,
                    spwnpoint,
                    Area
                    ])
                    blockSettings.writeString("Save 2 Name", Name)
                    blockSettings.writeString("Save 2 Name2", name2)
                    blockSettings.writeString("Save 2 MapName", Mapname)
                    game.splash("Saved!")
                } else if (story.checkLastAnswer("Save 3")) {
                    blockSettings.writeNumberArray("Save 3", [
                    3,
                    HeroHP.max,
                    exp,
                    exp2lvl,
                    level,
                    Sword,
                    Shield,
                    Natdefence,
                    HPpnts,
                    Natdefpnt,
                    Speedpnts,
                    Swingpnts,
                    Map,
                    spwnpoint,
                    Area
                    ])
                    blockSettings.writeString("Save 3 Name", Name)
                    blockSettings.writeString("Save 3 Name2", name2)
                    blockSettings.writeString("Save 3 MapName", Mapname)
                    game.splash("Saved!")
                } else {
                	
                }
            } else if (selectedIndex == 2) {
                if (!(invintoryopen)) {
                    item = Inventory.create_item("HPchoc", img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . b b b b b b b . . . . 
                        . . . . . b e e c e e b . . . . 
                        . . . . . b e e c e e b . . . . 
                        . . . . . b c c c c c b . . . . 
                        . . . . . b e e c e e b . . . . 
                        . . . . . b e e c e e b . . . . 
                        . . . . . b c c c c c b . . . . 
                        . . . . . b e e c e e b . . . . 
                        . . . . . b e e c e e b . . . . 
                        . . . . . b c c c c c b . . . . 
                        . . . . . b e e c e e b . . . . 
                        . . . . . b e e c e e b . . . . 
                        . . . . . b c c c c c b . . . . 
                        . . . . . b b b b b b b . . . . 
                        . . . . . . . . . . . . . . . . 
                        `, "An infinite bar that gives you +10HP")
                    inventory = Inventory.create_inventory([item], 1)
                    inventory.set_number(InventoryNumberAttribute.SelectedIndex, 0)
                    inventory.set_color(InventoryColorAttribute.InventoryText, 9)
                    inventory.set_color(InventoryColorAttribute.InventorySelectedOutline, 9)
                    inventory.set_color(InventoryColorAttribute.InventoryBackground, 8)
                    inventory.set_color(InventoryColorAttribute.InventorySelectedOutline, 6)
                    inventory.setPosition(Hero.x, Hero.y)
                    Menu.close()
                    invintoryopen = true
                    pause(100)
                    if (controller.right.isPressed()) {
                        inventory.change_number(InventoryNumberAttribute.SelectedIndex, 1)
                    } else if (controller.left.isPressed()) {
                        inventory.change_number(InventoryNumberAttribute.SelectedIndex, -1)
                    }
                    if (controller.B.isPressed()) {
                        sprites.destroy(inventory)
                        Paused = false
                    }
                    if (controller.A.isPressed()) {
                        inventory.set_items([])
                        HeroHP.value += 10
                        inventory.update()
                    }
                }
            } else if (selectedIndex == 3) {
                Menu.close()
                UpgradeMenu = miniMenu.createMenu(
                miniMenu.createMenuItem("Health", img`
                    1 1 1 2 7 1 1 1 
                    1 1 1 2 7 1 1 1 
                    1 1 1 2 7 1 1 1 
                    2 2 2 2 7 7 7 7 
                    2 2 2 2 7 7 7 7 
                    1 1 1 2 7 1 1 1 
                    1 1 1 2 7 1 1 1 
                    1 1 1 2 7 1 1 1 
                    `),
                miniMenu.createMenuItem("Move Speed", img`
                    1 1 1 1 1 1 1 1 
                    1 1 f f f 1 1 1 
                    1 f b b b f 1 1 
                    f c b b d f 1 1 
                    f c b b b d f 1 
                    1 f c c b b b f 
                    d d f f c c c f 
                    d d d d f f f f 
                    `),
                miniMenu.createMenuItem("Swing Speed", img`
                    1 4 4 4 1 1 f f 
                    4 5 5 5 1 f d f 
                    5 1 1 1 f d f 1 
                    1 f 1 f d f 1 1 
                    1 1 f d f 4 5 1 
                    1 f c f 1 1 4 5 
                    f c f 1 f 1 4 5 
                    f f 1 1 1 1 1 1 
                    `),
                miniMenu.createMenuItem("Defence", img`
                    1 f f f f f f 1 
                    f c c c c c c f 
                    f c 8 8 8 1 c f 
                    f c 8 9 1 8 c f 
                    f c 8 9 9 8 c f 
                    1 f c 8 8 c f 1 
                    1 1 f c c f 1 1 
                    1 1 1 f f 1 1 1 
                    `)
                )
                UpgradeMenu.setPosition(Hero.x, Hero.y)
                Menu.z = 100
                Menu.setDimensions(85, 120)
                Menu.setMenuStyleProperty(miniMenu.MenuStyleProperty.ScrollIndicatorColor, 1)
                Menu.setStyleProperty(miniMenu.StyleKind.Title, miniMenu.StyleProperty.Alignment, 5)
                Menu.setTitle("Upgrade Stats")
                Menu.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Foreground, 6)
                UpgradeMenu.onButtonPressed(controller.A, function (selection, selectedIndex) {
                    if (skillpnts > 0) {
                        if (selectedIndex == 0) {
                            if (!(HPpnts == HPpntMax)) {
                                HPpnts += 1
                                if (HPpnts < 5) {
                                    HeroHP.max = Math.ceil(HeroHP.max * 1.5)
                                } else if (HPpnts > 4 && HPpnts < 7) {
                                    HeroHP.max = Math.ceil(HeroHP.max * 1.3)
                                } else {
                                    if (HPpnts > 6 && HPpnts < 10) {
                                        HeroHP.max = Math.ceil(HeroHP.max * 1.15)
                                    } else {
                                        HeroHP.max = 300
                                    }
                                }
                            }
                            HeroHP.value = HeroHP.max
                            UpgradeMenu.setTitle("HP" + " +" + HPpnts)
                        } else if (selectedIndex == 1) {
                            if (!(Speedpnts == SpeedpntMax)) {
                                Speedpnts += 1
                                pnt2speed = pnt2speed * 1.25
                                UpgradeMenu.setTitle("SP" + " +" + Speedpnts)
                            }
                        } else if (selectedIndex == 2) {
                            if (!(Swingpnts == SwingpntMax)) {
                                Swingpnts += 1
                                SwingSpeed = SwingSpeed * 1.25
                                UpgradeMenu.setTitle("SSP" + " +" + Swingpnts)
                            }
                        } else {
                            if (!(Natdefpnt == NatdefpntMax)) {
                                Natdefpnt += 1
                                Natdefence += 1
                                UpgradeMenu.setTitle("ND" + " +" + Natdefpnt)
                            }
                            skillpnts += -1
                        }
                    }
                })
                UpgradeMenu.onSelectionChanged(function (selection, selectedIndex) {
                    UpgradeMenu.setTitle("Upgrade Stats")
                })
                UpgradeMenu.onButtonPressed(controller.B, function (selection, selectedIndex) {
                    UpgradeMenu.close()
                    Paused = false
                })
            } else {
                game.splash("Are you sure you", "Want to Quit Now?")
                Menu.close()
                story.showPlayerChoices("Yes", "No")
                if (story.checkLastAnswer("Yes")) {
                    game.reset()
                } else {
                    Paused = false
                }
            }
            if (selection == "Quit") {
                Menu.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Foreground, 2)
            } else {
                Menu.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Foreground, 0)
            }
        })
    } else {
        Menu.close()
        Paused = false
    }
})
sprites.onOverlap(SpriteKind.WS, SpriteKind.Projectile, function (sprite, otherSprite) {
    if (randint(0, 1) == 0) {
        killEnemy(5, true, fastghoul, "Sad", sprite, 1, 1, 1, false, randint(1, 3))
    } else {
        killEnemy(5, true, strongghoul, "Sad", sprite, 1, 1, 1, false, randint(1, 3))
    }
})
function setVariables () {
    Booksort = 0
    exp = 0
    exp2lvl = 25
    Credits = 0
    Map = 1
    spwnpoint = 0
    Statuseffect = []
    HPpntMax = 10
    SpeedpntMax = 6
    SwingpntMax = 5
    NatdefpntMax = 4
    skillpnts = 20
    spriteutils.setLifeImage(img`
        . f f . f f . 
        f 2 2 f 2 2 f 
        f 2 2 2 2 2 f 
        . f 2 2 2 f . 
        . . f 2 f . . 
        . . . f . . . 
        `)
}
info.onCountdownEnd(function () {
    info.stopCountdown()
    if (info.player1.score() > info.player2.score() && (info.player1.score() > info.player3.score() && info.player1.score() > info.player4.score())) {
        story.printCharacterText("Player one Wins!")
    } else if (info.player2.score() > info.player1.score() && (info.player2.score() > info.player3.score() && info.player2.score() > info.player4.score())) {
        story.printCharacterText("Player two Wins!")
    } else if (info.player3.score() > info.player1.score() && (info.player3.score() > info.player2.score() && info.player3.score() > info.player4.score())) {
        story.printCharacterText("Player three Wins!")
    } else if (info.player4.score() > info.player1.score() && (info.player4.score() > info.player2.score() && info.player4.score() > info.player3.score())) {
        story.printCharacterText("Player four Wins!")
    }
    story.showPlayerChoices("Play again", "Quit")
    if (story.checkLastAnswer("Play again")) {
    	
    } else {
    	
    }
})
sprites.onOverlap(SpriteKind.SG, SpriteKind.Projectile, function (sprite, otherSprite) {
    killEnemy(3, false, ghoul, "Sad", sprite, 1, 1, 1, false, 1)
})
controller.player4.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    lastdir4 = 1
})
controller.player3.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    if (inMenu == 0) {
        SwingMP(3)
    }
})
controller.player4.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    lastdir4 = 2
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (MP == 0) {
        animation.runImageAnimation(
        spirit,
        [img`
            . . 8 8 8 8 8 8 . . 
            . . 8 8 7 7 8 8 . . 
            8 8 8 7 7 7 7 8 8 8 
            8 8 7 7 6 6 7 7 8 8 
            8 7 7 6 6 6 6 7 7 8 
            8 7 7 6 6 6 6 7 7 8 
            8 8 7 7 6 6 7 7 8 8 
            8 8 8 7 7 7 7 8 8 8 
            . . 8 8 7 7 8 8 . . 
            . . 8 8 8 8 8 8 . . 
            `,img`
            . . . . . . . . . . 
            . . 8 8 8 8 8 . . . 
            . 8 8 9 9 9 8 8 . . 
            . 8 9 9 7 9 9 8 . . 
            . 8 9 7 7 7 9 8 . . 
            . 8 9 9 7 9 9 8 . . 
            . 8 8 9 9 9 8 8 . . 
            . . 8 8 8 8 8 . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            `],
        500,
        false
        )
        music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.InBackground)
        pause(500)
        if (inMenu == 0) {
            HeroHP.value += Math.ceil(2 * (level * randint(HeroHP.value, HeroHP.max) / 10))
        }
        animation.stopAnimation(animation.AnimationTypes.All, spirit)
        pause(2000)
    }
})
controller.player4.onEvent(ControllerEvent.Connected, function () {
    if (MP == 0) {
        spiritp4 = sprites.create(img`
            . . . . . . . . . . 
            . . 5 5 5 5 5 . . . 
            . 5 5 6 6 6 5 5 . . 
            . 5 6 6 7 6 6 5 . . 
            . 5 6 7 7 7 6 5 . . 
            . 5 6 6 7 6 6 5 . . 
            . 5 5 6 6 6 5 5 . . 
            . . 5 5 5 5 5 . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            `, SpriteKind.Spirit)
        controller.player4.moveSprite(spiritp4, 50, 50)
        spiritp4.setStayInScreen(true)
        spiritp4.setFlag(SpriteFlag.GhostThroughWalls, true)
        spiritp4.z = 10
    } else {
        setMpPlayers(4)
        setMPhpbars(4)
        if (MPmap == 11) {
            tiles.placeOnTile(Hitbox4, tiles.getTileLocation(8, 6))
        }
    }
    p4 = 1
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (inMenu == 0) {
        if (Sword != 0) {
            Swing()
            SwingMP(1)
        }
    }
})
function setMPhpbars (plyr: number) {
    if (plyr == 1) {
        HeroMPHP = statusbars.create(20, 2, StatusBarKind.MPHP)
        HeroMPHP.max = 20
        HeroMPHP.value = HeroMPHP.value
        HeroMPHP.setColor(2, 0)
        HeroMPHP.attachToSprite(Hitbox)
    } else if (plyr == 2) {
        HeroMPHP2 = statusbars.create(20, 2, StatusBarKind.MPHP)
        HeroMPHP2.max = 20
        HeroMPHP2.value = HeroMPHP2.value
        HeroMPHP2.setColor(8, 0)
        HeroMPHP2.attachToSprite(Hitbox2)
    } else if (plyr == 3) {
        HeroMPHP3 = statusbars.create(20, 2, StatusBarKind.MPHP)
        HeroMPHP3.max = 20
        HeroMPHP3.value = HeroMPHP3.value
        HeroMPHP3.setColor(5, 0)
        HeroMPHP3.attachToSprite(Hitbox3)
    } else if (plyr == 4) {
        HeroMPHP4 = statusbars.create(20, 2, StatusBarKind.MPHP)
        HeroMPHP4.max = 20
        HeroMPHP4.value = HeroMPHP4.value
        HeroMPHP4.setColor(7, 0)
        HeroMPHP4.attachToSprite(Hitbox4)
    }
}
function Respawn () {
    HeroHP.value = HeroHP.max
    HeroEXP.value = HeroEXP.value / 2
    if (spwnpoint == 0) {
        tiles.placeOnTile(Hitbox, tiles.getTileLocation(13, 2))
    } else if (spwnpoint == 1) {
        tiles.placeOnTile(Hitbox, tiles.getTileLocation(55, 4))
    } else if (spwnpoint == 2) {
        tiles.placeOnTile(Hitbox, tiles.getTileLocation(13, 2))
    } else if (spwnpoint == 3) {
        tiles.placeOnTile(Hitbox, tiles.getTileLocation(13, 2))
    }
}
function SetEXPbar () {
    HeroEXP = statusbars.create(60, 5, StatusBarKind.EXP)
    HeroEXP.setBarBorder(1, 15)
    HeroEXP.positionDirection(CollisionDirection.Bottom)
    HeroEXP.setColor(9, 8)
    HeroEXP.setOffsetPadding(-50, 7)
    HeroEXP.setStatusBarFlag(StatusBarFlag.LabelAtEnd, true)
}
controller.player3.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    lastdir3 = 3
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    lastdir = 0
    if (Map == 2) {
        flashlight.direction = 270
    }
})
controller.player3.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    lastdir3 = 2
})
function setMenu () {
    color.startFadeFromCurrent(color.Black, 0)
    scene.setBackgroundImage(img`
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999111199999999999999999999999999999999999999999999999999999999999999999999999999999911119999999999999999999999999999999999999999999999999999
        9999999999999999999991111119999999999999999999999999999999999999999999999999999999999999999999999999999111111999999999999999999999999999999999999999999999999999
        9999999999999999999991111119911999999999999999999999999999999999999999999999999999999999999999999999999111111991199999999999999999999999999999999999999999999999
        9999999999999999991111111119111119999999999999999999999999999999999999999999999999999999999999999999111111111911111999999999999999999999999999999999999999999999
        9999999999999999911111111111111119999999999999999999999999999999999999999999999999999999999999999991111111111111111999999999999999999999999999999999999999999999
        9999999999999999111111111111111111199999999999999999999999999999999999999999999999999999999999999911111111111111111119999999999999999999999999999999999999999999
        9999999999999999111111111111111111119999999999999999999999999999999999999999999999999999999999999911111111111111111111999999999999999999999999999999999999999999
        9999999999999999911111111111111111119991199999999999999999999999999999999999999999999999999999999991111111111111111111999119999999999999999999999999999999999999
        9999999999999111191111111111111111119911111999999999999999999999999999999999999999999999999999911119111111111111111111991111199999999999999999999999999999999999
        9999999999991111119111111111111111199911111999999999999999999999999999999999999999999999999999111111911111111111111119991111199999999999999999999999999999999999
        9999999999991111111111111111111111911111111199999999999999999999999999999999999999999999999999111111111111111111111191111111119999999999999999999999999999999999
        9999999999991111111111111111111111111111111199999999999999999999999999999999999999999999999999111111111111111111111111111111119999999999999999999999999999999999
        9999999999999111111111111111111111111111111199999999999999999999999999999999999999999999999999911111111111111111111111111111119999999999999999999999999999999999
        9911199991111911111111111111111111111111111991199999999999991111999999999999999999991119999111191111111111111111111111111111199119999999999999111199999999999999
        9111119911111111111111111111111111111111111911119999999999911111199999999999999999911111991111111111111111111111111111111111191111999999999991111119999999999999
        9111119111111111111111111111111111111111111911119999999999911111191119999999999999911111911111111111111111111111111111111111191111999999999991111119111999999999
        9911111111111111111111111111111111111111111111119999999999999111111111999999999999991111111111111111111111111111111111111111111111999999999999911111111199999999
        9111111111111111111111111111111111111111111111199999999911119111111111999999999999911111111111111111111111111111111111111111111119999999991111911111111199999999
        1111111111111111111111111111111111111111111111119999999111111111111119999999999199111111111dd1111111111111111111111111111111111111999999911111111111111999999999
        1111111111111111111111111111111111111111111111111911199111111111111111111999999ddd111111111ddd111111111111111111111111111111111111191119911111111111111111199999
        1111111111111111111111111111111111111111111111111111111111111111111111111199991ddd111111111ddd111111111111111111111111111111111111111111111111111111111111119999
        11111111111111111111111111111111111111111111111111111111111111111111111111999ddddddd111111ddddd11111111111111111111111111111111111111111111111111111111111119999
        11111111111111111111111111111111111111111ddddddddd111111111111111111111111111ddddddd111111ddddd111111111111111111111111111111111111111111dddddddddd1111111111111
        11111111111111111111111111111111111111111ddddddddd111111111111111111111111111ddddddd111111ddddd111111111111111111111111111111111111111111dddddddddd1111111111111
        1111111111111111111ddd1111111111111111111d11dddddd111111111111111111111111111d11dddd11111ddddddd11111111111111111111dd1111111111111111111dd1d1ddddd1111111111111
        111111111111111111ddddd111111111111111111ddddddd1d111111111111111111111111111ddddddd11111ddddddd1111111111111111111dddd111111111111111111dddddd11dd1111111111111
        11111111111111111dddddd111111111111111111ddddddddd1111111111d11111111ddddd111d1ddddd11111ddddddd11111111111111111dddddd111111111111111111dddddddddd1111111111111
        11111111111111111ddd1d111111d111111111111ddddddddd111111111dd11111111ddddd111ddddddd11111ddddddd11111111111111111ddd1d111111dd11111111111dddd1ddddd11111111dd111
        11111111111111111dddddd11111d111111111111ddddddd1d111111111dd11111111ddddd111ddddddd11111ddddddd11111111111111111dddddd11111dd11111111111ddddddd1dd11111111dd111
        11111111ddd111111dd11d11111ddd11111111111ddddddddd11dddddd1dd11111111ddddd111ddddddd11111ddddddd111111111dd111111ddd1d11111ddd11111111111dddddddddd1ddddddddd111
        d1dd1111ddddddddddd1ddd111ddddd1111111111ddddddd1d11d11ddd1dd111111111dd1dd11ddddddd111dddddddddd1dd1111ddddddddddddd1d1111dddd1111111111dddddd11dd1d11dddddd111
        dddd11111d1dd1ddddddddd111ddddd1111111111ddddddddd11dddd1d1dd11111111dddddd11dd1dddd111ddddddddddddd1111dd1ddd1dddddddd1111dddd1111111111dddddddddd1dddd1dddd111
        dd1d11111ddd1111ddddddd111ddddd1111111111ddddddddd11dddd1dddd11111111dddddd11ddddddd111ddddddddddd1d1111dddd1d11ddddddd1111dddd1111111111dddddddddd1dddd1dddd111
        dddd1111dddddddddddddddd11dddddd11dd1dd1ddddddddddd1d11dddddd11111111dddddd11ddddddd111ddddddddddddd1111dddddddddddddddd11dddddd111d11ddddddddddddd1d11dddddd111
        dd1d1111dddddddddddddddd11dddddd11ddddddddddddddddd1ddddddddd11d11d11dddddd11ddddddd111ddddddddddd1d1111dddddddddddddddd11dddddd111dddddddddddddddd1ddddddddd111
        ddddd1dd1d1ddddddddddddd11ddddddd1dddd11ddddddddddddd11bbddddddd1ddd11dd1dd11ddddddd111ddddddddddddddd1ddd1ddddddddddddd11ddddddd111d11ddddddbddddddd11bbbddd1dd
        ddddd1dddddddddddddddddddd1dddddd1dddddddddbbbdddddddddbbbdddddd1ddd1dddddd11ddddddd111ddddddddddddddd1dddddddddddddddddddddddddd1ddddddddddbbdddddddddbbbddd1dd
        ddddd1ddddddddddddddddddddddddddd1dddddddddbbbdddddddddbbbdddddddddddddddddddddddddd111ddddddddddddddd1dddddddddddddddddddddddddd1ddddddddddbbdddddddddbbbdddddd
        ddddd1ddddddddddddddddddddddddddd1dddddddbbbbbbbddddddbbbbbddddddddddddddddddddddddddd1ddddddddddddddd1dddddddddddddddddddddddddd1d1ddddddbbbbbbbdddddbbbbbddddd
        dddddbbbbbbbbbddddddddddddddddddd1dddddddbbbbbbbddddddbbbbbddddddddddddddddddddddddddd1ddddddddddddddbbbbbbbbbbdddddddddddddddddd1ddddddddbbbbbbbdddddbbbbbddddd
        dddddbbbbbbbbbddddddddddddddddddd1dddddddbbbbbbbddddddbbbbbddddddddddddddddddddddddddd1ddddddddddddddbbbbbbbbbbdddddddddddddddddd1ddddddddbbbbbbbdddddbbbbbddddd
        dddddbddbbbbbbddddddddddddddddddd1dddddddbddbbbbdddddbbbbbbbdd111dddddddddddddddbbdddd1ddddddddddddddbbdbdbbbbbdddddddddddddddddd1ddddddddbbbbbbbddddbbbbbbbb11d
        dddddbbbbbbbdbddddddddddddddddddd1dddddddbbbbbbbdddddbbbbbbbddd11ddddddddddddddbbbbddd1ddddddddddddddbbbbbbddbbdddddddddddddddddd1ddddddddbbbbbbbddddbbbbbbbbddd
        dddddbbbbbbbbbddddddddddbddddddddbbbbbdddbdbbbbbdddddbbbbbbbddddddddddd1dddddbbbbbbddd1ddddddddddddddbbbbbbbbbbdddddddddddddddddddbbbbddddbbbdbbbddddbbbbbbbbddd
        dddddbbbbbbbbbdddddddddbbddddddddbbbbbdddbbbbbbbdddddbbbbbbbdd1ddddddddddddddbbbdbddddddbbdddddddddddbbbbdbbbbbddddddddbbdddddddddbbbbddddbbbdbbbddddbbbbbbbbd1d
        dddddbbbbbbbdbdddddddddbbddddddddbbbbbdddbbbbbbbdddddbbbbbbbdd111ddddddddddddbbbbbbdddddbbdddddddddddbbbbbbbdbbddddddddbbddddddddbbbbbbdddbbbbbbbddddbbbbbbbb11d
        dddddbbbbbbbbbddbbbbbbdbbddddddddbbbbbdddbbbbbbbdddddbbbbbbbdddddddddbb1dddddbbbdbdddddbbbdddddddddddbbbbbbbbbbdbbbbbbbbbddddddddbbbbbbdddbbbdbbbddddbbbbbbbbddd
        dddddbbbbbbbdbddbddbbbdbbdddddddddbbdbbddbbbbbbbdddbbbbbbbbbbdbbddddbbbbbbbbbbbbbdbddddbbbbddddddddddbbbbbbddbbdbddbbbbbbddddddddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
        dddddbbbbbbbbbddbbbbdbdbbddddddddbbbbbbddbbdbbbbdddbbbbbbbbbbbbbddddbbdbbbdbbbbbbbbddddbbbbddddddddddbbbbbbbbbbdbbbbdbbbbddddddddbbbbbbbddbbbbdbbddbbbbbbbbbbbbb
        dddddbbbbbbbbbddbbbbdbbbbddddddddbbbbbbddbbbbbbbdddbbbbbbbbbbbdbddddbbbbdbddbbbbbbbddddbbbbddddddddddbbbbbbbbbbdbbbbdbbbbddddddddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
        dbbdbbbbbbbbbbbdbddbbbbbbddddddddbbbbbbddbbbbbbbdddbbbbbbbbbbbbbddddbbbbbbbbbbbbbbbbddbbbbbbdddbddbbbbbbbbbbbbbdbddbbbbbbddddddddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbdbbbbbbbbbddbddbddbbbbbbddbbbbbbbdddbbbbbbbbbbbdbddddbbbbbbbbbbbbbbbbddbbbbbbdddbbbbbbbbbbbbbbbbdbbbbbbbbbdddddbddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
        bbddbbbbbbbbbbbbbddddbbbbbbbdbbbddbbdbbddbbbbbbbdddbbbbbbbbbbbbbbbdbbbdbbbbbbbbbbbbbddbbbbbbbdddbddbbbbbbbbbbbbbbddbdbbbbdbbdbbbdbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbdbbbbbbddbbbbbbbdddbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbdbbbbbbbbbbbddbbbbdbbddbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbddbdbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbbb
        bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbb7bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbb7bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbb7bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbb7
        bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77
        bb77bb77b77bb77bbb77b77bbbb77b7b77b7777bbb77bb77b77bb77bbb77b77bbbb77b7b77b7777bbb77bb77b77bb77bbb77b77bbbb77b7b77b7777bbb77bb77b77bb77bbb77b77bbbb77b7b77b7777b
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        `)
    Titletxtsprite = sprites.create(img`
        ..11111111111111111111111111111111..
        .1111111111111111111111111111111111.
        11fffff111fffff11111f11f1111ffffff11
        1ffffff111ff1ff1111ffffff111ffffff11
        1ff111111fff1fff111ffffff111ff111111
        1ff111111ff111ff11ff1ff1ff11ffffff11
        1ff1fff11ff111ff11ff1111ff11ffffff11
        1ff111ff1fffffff1ff111111ff1ff111111
        1fffffff1ff111ff1ff111111ff1ffffff11
        11fffff11ff111ff1ff111111ff1ffffff11
        .1111111111111111111111111111111111.
        ..11111111111111111111111111111111..
        `, SpriteKind.Title)
    Titletxtsprite.setPosition(80, 36)
    scaling.scaleToPercent(Titletxtsprite, 200, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    Menuselect = 0
    pause(500)
    color.startFadeFromCurrent(color.originalPalette, 500)
    pause(200)
    Startbutton = sprites.create(img`
        ..11111111111111111111111111111111111111..
        .1111111111111111111111111111111111111111.
        11111ffff11fffff111fff111ffff11fffff1f1111
        1111f11111111f1111f111f11f111f111f111f1111
        1111f11111111f1111f111f11f111f111f111f1111
        1111f11111111f1111f111f11f111f111f111f1111
        11111ffff1111f1111fffff11ffff1111f111f1111
        111111111f111f111f11111f1f111f111f111f1111
        111111111f111f111f11111f1f111f111f111f1111
        111111111f111f111f11111f1f111f111f11111111
        11111ffff1111f111f11111f1f111f111f111f1111
        .1111111111111111111111111111111111111111.
        ..11111111111111111111111111111111111111..
        `, SpriteKind.Title)
    Startbutton.setPosition(80, 60)
    Loadbutton = sprites.create(img`
        ..111111111111111111111111111
        .1111111111111111111111111111
        1111f11111ffff1111ff111fff111
        1111f1111f1111f11f11f11f11f11
        1111f1111f1111f11f11f11f111f1
        1111f1111f1111f11f11f11f111f1
        1111f1111f1111f11ffff11f111f1
        1111f1111f1111f1f1111f1f111f1
        1111f1111f1111f1f1111f1f111f1
        1111f1111f1111f1f1111f1f111f1
        1111ffff11ffff11f1111f1ffff11
        .1111111111111111111111111111
        ..111111111111111111111111111
        `, SpriteKind.Title)
    Loadbutton.setPosition(44, 60)
    Tutorialbutton = sprites.create(img`
        ...11111111111111111111111111111111111111...
        ..1111111111111111111111111111111111111111..
        .111111111111111111111111111111111111111111.
        11111111111111111111111111111111111111111111
        1fffff1f111f1fffff11fff11fff11fff11ff11f1111
        111f111f111f111f111f111f1f11f11f11f11f1f1111
        111f111f111f111f111f111f1f11f11f11f11f1f1111
        111f111f111f111f111f111f1fff111f11ffff1f1111
        111f111f111f111f111f111f1f11f11f11f11f1f1111
        111f111f111f111f111f111f1f11f11f11f11f1f1111
        111f1111fff1111f1111fff11f11f1fff1f11f1fff11
        11111111111111111111111111111111111111111111
        .111111111111111111111111111111111111111111.
        ..1111111111111111111111111111111111111111..
        ...11111111111111111111111111111111111111...
        `, SpriteKind.Title)
    Tutorialbutton.setPosition(80, 80)
    MPbutton = sprites.create(img`
        ...111111111111111111111111111111111111111111111111111111111...
        ..11111111111111111111111111111111111111111111111111111111111..
        .1111111111111111111111111111111111111111111111111111111111111.
        111f11111f1f111f1f11fffff1fffff1fff11f1111ff11f111f1ffff1fff111
        111ff111ff1f111f1f1111f11111f111f11f1f111f11f11f1f11f1111f11f11
        111f1f1f1f1f111f1f1111f11111f111f11f1f111f11f111f111f1111f11f11
        111f11f11f1f111f1f1111f11111f111fff11f111ffff111f111ffff1fff111
        111f11111f1f111f1f1111f11111f111f1111f111f11f111f111f1111f11f11
        111f11111f1f111f1f1111f11111f111f1111f111f11f111f111f1111f11f11
        111f11111f1f111f1f1111f11111f111f1111f111f11f111f111f1111f11f11
        111f11111f11fff11fff11f111fffff1f1111fff1f11f111f111ffff1f11f11
        111111111111111111111111111111111111111111111111111111111111111
        .1111111111111111111111111111111111111111111111111111111111111.
        ..11111111111111111111111111111111111111111111111111111111111..
        ...111111111111111111111111111111111111111111111111111111111...
        `, SpriteKind.Title)
    MPbutton.setPosition(80, 100)
    Cursor = sprites.create(img`
        a a . . . . . . 
        a c a . . . . . 
        a c c a . . . . 
        a c c c a . . . 
        a c c c c a . . 
        a a a a a . . . 
        . . . . a a . . 
        . . . . . a . . 
        `, SpriteKind.Title)
    Cursor.z = 3
}
sprites.onOverlap(SpriteKind.FG, SpriteKind.Projectile, function (sprite, otherSprite) {
    killEnemy(2, false, ghoul, "Sad", sprite, 1, 1, 1, false, 1)
})
function setMpPlayers (plyrnum: number) {
    if (plyrnum == 1) {
        Hero = sprites.create(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `, SpriteKind.Player)
        Hitbox = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f f f f f . . . . . 
            `, SpriteKind.Hitbox)
        Hero.z = 5
        Hero.setFlag(SpriteFlag.Ghost, true)
        Hitbox.setFlag(SpriteFlag.Invisible, true)
        if (MPmap == 11) {
            tiles.placeOnTile(Hitbox, tiles.getTileLocation(1, 1))
            setMPhpbars(1)
        } else {
        	
        }
    } else if (plyrnum == 2) {
        Hero2 = sprites.create(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 9 9 f f f . . . . 
            . . . f f f 9 9 9 9 f f f . . . 
            . . f f f 8 8 8 8 8 8 f f f . . 
            . . f f 8 9 9 9 9 9 9 8 8 f . . 
            . . f 8 9 f f f f f f 9 8 f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 6 6 6 6 e e f . . . 
            . . e 4 f 8 8 8 8 8 8 f 4 e . . 
            . . 4 d f 8 8 8 8 8 8 f d 4 . . 
            . . 4 4 f 6 6 5 5 6 6 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `, SpriteKind.Player)
        Hitbox2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f f f f f . . . . . 
            `, SpriteKind.Hitbox)
        Hero2.z = 5
        Hero2.setFlag(SpriteFlag.Ghost, true)
        Hitbox2.setFlag(SpriteFlag.Invisible, true)
        if (MPmap == 11) {
            tiles.placeOnTile(Hitbox2, tiles.getTileLocation(8, 1))
            setMPhpbars(2)
        } else {
        	
        }
    } else if (plyrnum == 3) {
        Hero3 = sprites.create(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 4 4 f f f . . . . 
            . . . f f f 4 4 4 4 f f f . . . 
            . . f f f 5 5 5 5 5 5 f f f . . 
            . . f f 5 e e e e e e 5 5 f . . 
            . . f 5 e f f f f f f e 5 f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 5 5 5 5 5 5 f 4 e . . 
            . . 4 d f 5 5 5 5 5 5 f d 4 . . 
            . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `, SpriteKind.Player)
        Hitbox3 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f f f f f . . . . . 
            `, SpriteKind.Hitbox)
        Hero3.z = 5
        Hero3.setFlag(SpriteFlag.Ghost, true)
        Hitbox3.setFlag(SpriteFlag.Invisible, true)
        if (MPmap == 11) {
            tiles.placeOnTile(Hitbox3, tiles.getTileLocation(1, 6))
            setMPhpbars(3)
        } else {
        	
        }
    } else if (plyrnum == 4) {
        Hero4 = sprites.create(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 9 9 f f f . . . . 
            . . . f f f 9 9 9 9 f f f . . . 
            . . f f f 7 7 7 7 7 7 f f f . . 
            . . f f 7 5 5 5 5 5 5 7 7 f . . 
            . . f 7 5 f f f f f f 5 7 f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 7 7 7 7 7 7 f 4 e . . 
            . . 4 d f 7 7 7 7 7 7 f d 4 . . 
            . . 4 4 f 9 9 9 9 9 9 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `, SpriteKind.Player)
        Hitbox4 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f f f f f . . . . . 
            `, SpriteKind.Hitbox)
        Hero4.z = 5
        Hero4.setFlag(SpriteFlag.Ghost, true)
        Hitbox4.setFlag(SpriteFlag.Invisible, true)
        if (MPmap == 11) {
            tiles.placeOnTile(Hitbox4, tiles.getTileLocation(8, 6))
            setMPhpbars(4)
        } else {
        	
        }
    }
    Speed = 35
    Sword = 1
    Shield = 1
}
sprites.onOverlap(SpriteKind.SFG, SpriteKind.Projectile, function (sprite, otherSprite) {
    killEnemy(5, true, fastghoul, "Sad", sprite, 1, 1, 1, false, randint(1, 3))
})
function SetHPbar () {
    info.setLife(3)
    HeroHP = statusbars.create(100, 6, StatusBarKind.Health)
    HeroHP.setBarBorder(1, 15)
    HeroHP.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
    HeroHP.setColor(7, 12, 2)
    HeroHP.positionDirection(CollisionDirection.Bottom)
    HeroHP.setOffsetPadding(-30, 0)
    HeroHP.max = 16
    HeroHP.value = HeroHP.max
    HeroHP.setStatusBarFlag(StatusBarFlag.LabelAtEnd, true)
}
sprites.onOverlap(SpriteKind.G, SpriteKind.Projectile, function (sprite, otherSprite) {
    killEnemy(1, false, ghoul, "Sad", sprite, 1, 1, 1, false, 1)
})
sprites.onOverlap(SpriteKind.Hitbox, SpriteKind.WS, function (sprite, otherSprite) {
    dmgPlayer(5, "Cold", "", "", false)
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    if (info.life() > 0) {
        color.startFade(color.originalPalette, color.White, 200)
        pause(200)
        info.changeLifeBy(-1)
        Respawn()
        color.startFade(color.White, color.originalPalette, 500)
        pause(500)
        game.splash("You have been brought", "back to a safe place")
    } else {
        color.startFadeFromCurrent(color.originalPalette, 200)
        pause(500)
        game.setGameOverMessage(false, "You have fallen...")
        game.setGameOverEffect(false, color.Darken)
        game.setGameOverPlayable(false, music.melodyPlayable(music.powerDown), false)
        pause(200)
        game.gameOver(false)
    }
})
function SwingMP (plyr: number) {
    if (MP == 1) {
        music.play(music.melodyPlayable(music.zapped), music.PlaybackMode.InBackground)
        if (plyr == 1) {
            if (lastdir == 0) {
                Swrdswing = sprites.createProjectileFromSprite(img`
                    .......22.......
                    .....222222.....
                    ....222..222....
                    ...22......22...
                    ..22........22..
                    .22..........22.
                    ..............22
                    ...............2
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    `, Hero, 0, 0)
            } else if (lastdir == 1) {
                Swrdswing = sprites.createProjectileFromSprite(img`
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ...............2
                    ..............22
                    .22..........22.
                    ..22........22..
                    ...22......22...
                    ....222..222....
                    .....222222.....
                    .......22.......
                    `, Hero, 0, 0)
            } else if (lastdir == 2) {
                Swrdswing = sprites.createProjectileFromSprite(img`
                    ................................
                    .......2........................
                    ......22........................
                    .....22.........................
                    ....22..........................
                    ...22...........................
                    ...22...........................
                    ..22............................
                    ..22............................
                    ...22...........................
                    ...22...........................
                    ....22..........................
                    .....22.........................
                    ......22........................
                    .......22.......................
                    ........22......................
                    `, Hero, 0, 0)
            } else {
                Swrdswing = sprites.createProjectileFromSprite(img`
                    ................................
                    ........................2.......
                    ........................22......
                    .........................22.....
                    ..........................22....
                    ...........................22...
                    ...........................22...
                    ............................22..
                    ............................22..
                    ...........................22...
                    ...........................22...
                    ..........................22....
                    .........................22.....
                    ........................22......
                    .......................22.......
                    ......................22........
                    `, Hero, 0, 0)
            }
        } else if (plyr == 2) {
            if (lastdir2 == 0) {
                Swrdswing2 = sprites.createProjectileFromSprite(img`
                    .......88.......
                    .....888888.....
                    ....888..888....
                    ...88......88...
                    ..88........88..
                    .88..........88.
                    ..............88
                    ...............8
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    `, Hero2, 0, 0)
            } else if (lastdir2 == 1) {
                Swrdswing2 = sprites.createProjectileFromSprite(img`
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ...............8
                    ..............88
                    .88..........88.
                    ..88........88..
                    ...88......88...
                    ....888..888....
                    .....888888.....
                    .......88.......
                    `, Hero2, 0, 0)
            } else if (lastdir2 == 2) {
                Swrdswing2 = sprites.createProjectileFromSprite(img`
                    ................................
                    .......8........................
                    ......88........................
                    .....88.........................
                    ....88..........................
                    ...88...........................
                    ...88...........................
                    ..88............................
                    ..88............................
                    ...88...........................
                    ...88...........................
                    ....88..........................
                    .....88.........................
                    ......88........................
                    .......88.......................
                    ........88......................
                    `, Hero2, 0, 0)
            } else {
                Swrdswing2 = sprites.createProjectileFromSprite(img`
                    ................................
                    ........................8.......
                    ........................88......
                    .........................88.....
                    ..........................88....
                    ...........................88...
                    ...........................88...
                    ............................88..
                    ............................88..
                    ...........................88...
                    ...........................88...
                    ..........................88....
                    .........................88.....
                    ........................88......
                    .......................88.......
                    ......................88........
                    `, Hero2, 0, 0)
            }
        } else if (plyr == 3) {
            if (lastdir3 == 0) {
                Swrdswing3 = sprites.createProjectileFromSprite(img`
                    .......55.......
                    .....555555.....
                    ....555..555....
                    ...55......55...
                    ..55........55..
                    .55..........55.
                    ..............55
                    ...............5
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    `, Hero3, 0, 0)
            } else if (lastdir3 == 1) {
                Swrdswing3 = sprites.createProjectileFromSprite(img`
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ...............5
                    ..............55
                    .55..........55.
                    ..55........55..
                    ...55......55...
                    ....555..555....
                    .....555555.....
                    .......55.......
                    `, Hero3, 0, 0)
            } else if (lastdir3 == 2) {
                Swrdswing3 = sprites.createProjectileFromSprite(img`
                    ................................
                    .......5........................
                    ......55........................
                    .....55.........................
                    ....55..........................
                    ...55...........................
                    ...55...........................
                    ..55............................
                    ..55............................
                    ...55...........................
                    ...55...........................
                    ....55..........................
                    .....55.........................
                    ......55........................
                    .......55.......................
                    ........55......................
                    `, Hero3, 0, 0)
            } else {
                Swrdswing3 = sprites.createProjectileFromSprite(img`
                    ................................
                    ........................5.......
                    ........................55......
                    .........................55.....
                    ..........................55....
                    ...........................55...
                    ...........................55...
                    ............................55..
                    ............................55..
                    ...........................55...
                    ...........................55...
                    ..........................55....
                    .........................55.....
                    ........................55......
                    .......................55.......
                    ......................55........
                    `, Hero3, 0, 0)
            }
        } else if (plyr == 4) {
            if (lastdir4 == 0) {
                Swrdswing4 = sprites.createProjectileFromSprite(img`
                    .......77.......
                    .....777777.....
                    ....777..777....
                    ...77......77...
                    ..77........77..
                    .77..........77.
                    ..............77
                    ...............7
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    `, Hero4, 0, 0)
            } else if (lastdir4 == 1) {
                Swrdswing4 = sprites.createProjectileFromSprite(img`
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ...............7
                    ..............77
                    .77..........77.
                    ..77........77..
                    ...77......77...
                    ....777..777....
                    .....777777.....
                    .......77.......
                    `, Hero4, 0, 0)
            } else if (lastdir4 == 2) {
                Swrdswing4 = sprites.createProjectileFromSprite(img`
                    ................................
                    .......7........................
                    ......77........................
                    .....77.........................
                    ....77..........................
                    ...77...........................
                    ...77...........................
                    ..77............................
                    ..77............................
                    ...77...........................
                    ...77...........................
                    ....77..........................
                    .....77.........................
                    ......77........................
                    .......77.......................
                    ........77......................
                    `, Hero4, 0, 0)
            } else {
                Swrdswing4 = sprites.createProjectileFromSprite(img`
                    ................................
                    ........................7.......
                    ........................77......
                    .........................77.....
                    ..........................77....
                    ...........................77...
                    ...........................77...
                    ............................77..
                    ............................77..
                    ...........................77...
                    ...........................77...
                    ..........................77....
                    .........................77.....
                    ........................77......
                    .......................77.......
                    ......................77........
                    `, Hero4, 0, 0)
            }
        }
        Swrdswing.z = 4
        pause(120)
        if (plyr == 1) {
            sprites.destroy(Swrdswing)
        } else if (plyr == 2) {
            sprites.destroy(Swrdswing2)
        } else if (plyr == 3) {
            sprites.destroy(Swrdswing3)
        } else if (plyr == 4) {
            sprites.destroy(Swrdswing4)
        }
        pause(280)
    }
}
function killEnemy (EXP: number, Spwnonkill: boolean, Enemy: Sprite, Sound: string, Dead: Sprite, cnum1: number, cnum2: number, cnum3: number, Chance: boolean, Amount: number) {
    exp += EXP
    sprites.destroy(Dead, effects.disintegrate, 350)
    if (Sound == "Sad") {
        music.play(music.createSoundEffect(WaveShape.Noise, 2849, 2002, 255, 0, 500, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    }
    pause(500)
    if (Spwnonkill) {
        for (let index = 0; index < Amount; index++) {
            if (randint(cnum1, cnum2) > cnum3) {
                location = Dead.tilemapLocation()
                Setmonsters(1, 3, true, location.column + randint(-1, 1), location.column + randint(-1, 1), 1, 1, false)
            }
        }
    }
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    lastdir = 1
    if (Map == 2) {
        flashlight.direction = 90
    }
})
sprites.onOverlap(SpriteKind.SSG, SpriteKind.Projectile, function (sprite, otherSprite) {
    killEnemy(8, true, fastghoul, "Sad", sprite, 1, 1, 1, false, randint(1, 3))
})
controller.player2.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    lastdir2 = 2
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    lastdir = 3
    if (Map == 2) {
        flashlight.direction = 0
    }
})
sprites.onOverlap(SpriteKind.Hitbox, SpriteKind.WP, function (sprite, otherSprite) {
    dmgPlayer(4, "Bleed", "", "", false)
})
controller.player4.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    lastdir4 = 0
})
sprites.onOverlap(SpriteKind.Hitbox, SpriteKind.G, function (sprite, otherSprite) {
    dmgPlayer(4, "", "", "", false)
})
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    lastdir2 = 0
})
function setMPMap (horde: boolean, mapid: number) {
    if (horde) {
        if (mapid == 1) {
            tiles.setCurrentTilemap(tilemap`level16`)
            scene.setBackgroundColor(13)
            tiles.placeOnTile(Hitbox, tiles.getTileLocation(1, 1))
            tiles.placeOnTile(Hitbox2, tiles.getTileLocation(8, 1))
            if (p3 == 1) {
                tiles.placeOnTile(Hitbox3, tiles.getTileLocation(1, 6))
            }
            if (p4 == 1) {
                tiles.placeOnTile(Hitbox4, tiles.getTileLocation(8, 6))
            }
            MPmap = 11
            info.startCountdown(120)
        } else if (mapid == 2) {
            tiles.setCurrentTilemap(tilemap`level20`)
            MPmap = 12
        }
    } else {
        if (mapid == 1) {
            tiles.setCurrentTilemap(tilemap`level22`)
            MPmap = 21
        } else if (mapid == 2) {
            tiles.setCurrentTilemap(tilemap`level24`)
            MPmap = 22
        } else if (mapid == 3) {
            tiles.setCurrentTilemap(tilemap`level26`)
            MPmap = 23
        } else if (mapid == 4) {
            tiles.setCurrentTilemap(tilemap`level28`)
            MPmap = 24
        }
    }
}
function WalkMP3 () {
    if (lastdir3 == 0 && controller.player3.isPressed(ControllerButton.Up)) {
        animation.runImageAnimation(
        Hero3,
        [img`
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . f f f f f 5 5 f f f f f . . 
            . . f f e 5 e 5 5 e 5 e f f . . 
            . . f e 5 f 5 f f 5 f 5 e f . . 
            . . f f f 5 5 e e 5 5 f f f . . 
            . f f e f 5 f e e f 5 f e f f . 
            . f e e f f e e e e f e e e f . 
            . . f e e e e e e e e e e f . . 
            . . . f e e e e e e e e f . . . 
            . . e 4 f f f f f f f f 4 e . . 
            . . 4 d f 5 5 5 5 5 5 f d 4 . . 
            . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . . f f f f 5 5 f f f f . . . 
            . . f f e 5 e 5 5 e 5 e f f . . 
            . . f e 5 f 5 f f f 5 f e f . . 
            . . f f f 5 f e e 5 5 f f f . . 
            . . f e 5 f f e e 5 f e e f . . 
            . f f e f f e e e f e e e f f . 
            . f f e e e e e e e e e e f f . 
            . . . f e e e e e e e e f . . . 
            . . . e f f f f f f f f 4 e . . 
            . . . 4 f 4 4 4 4 4 e d d 4 . . 
            . . . e f f f f f f e e 4 . . . 
            . . . . f f f . . . . . . . . . 
            `,img`
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . f f f f f 5 5 f f f f f . . 
            . . f f e 5 e 5 5 e 5 e f f . . 
            . . f e 5 f 5 f f 5 f 5 e f . . 
            . . f f f 5 5 e e 5 5 f f f . . 
            . f f e f 5 f e e f 5 f e f f . 
            . f e e f f e e e e f e e e f . 
            . . f e e e e e e e e e e f . . 
            . . . f e e e e e e e e f . . . 
            . . e 4 f f f f f f f f 4 e . . 
            . . 4 d f 5 5 5 5 5 5 f d 4 . . 
            . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . . f f f f 5 5 f f f f . . . 
            . . f f e 5 e 5 5 e 5 e f f . . 
            . . f e f 5 f f f 5 f 5 e f . . 
            . . f f f 5 5 e e f 5 f f f . . 
            . . f e e f 5 e e f f 5 e f . . 
            . f f e e e f e e e f f e f f . 
            . f f e e e e e e e e e e f f . 
            . . . f e e e e e e e e f . . . 
            . . e 4 f f f f f f f f e . . . 
            . . 4 d d e 4 4 4 4 4 f 4 . . . 
            . . . 4 e e f f f f f f e . . . 
            . . . . . . . . . f f f . . . . 
            `],
        200,
        true
        )
        pauseUntil(() => !(controller.player3.isPressed(ControllerButton.Up)))
    } else if (lastdir3 == 0 && !(controller.player3.isPressed(ControllerButton.Up))) {
        animation.runImageAnimation(
        Hero3,
        [img`
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . f f f f f 5 5 f f f f f . . 
            . . f f e 5 e 5 5 e 5 e f f . . 
            . . f e 5 f 5 f f 5 f 5 e f . . 
            . . f f f 5 5 e e 5 5 f f f . . 
            . f f e f 5 f e e f 5 f e f f . 
            . f e e f f e e e e f e e e f . 
            . . f e e e e e e e e e e f . . 
            . . . f e e e e e e e e f . . . 
            . . e 4 f f f f f f f f 4 e . . 
            . . 4 d f 5 5 5 5 5 5 f d 4 . . 
            . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `],
        200,
        false
        )
    }
    if (lastdir3 == 1 && controller.player3.isPressed(ControllerButton.Down)) {
        animation.runImageAnimation(
        Hero3,
        [img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 5 5 f f f . . . . 
            . . . f f f 5 5 5 5 f f f . . . 
            . . f f f 4 4 4 4 4 4 f f f . . 
            . . f f 4 5 5 5 5 5 5 4 4 f . . 
            . . f 4 5 f f f f f f 5 4 f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 5 5 5 5 5 5 f 4 e . . 
            . . 4 d f 5 5 5 5 5 5 f d 4 . . 
            . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f 5 5 f f f . . . . 
            . . . f f f 5 5 5 5 f f f . . . 
            . . f f f 4 4 4 4 4 4 f f f . . 
            . . f f 4 5 5 5 5 5 5 4 4 f . . 
            . f f 4 5 f f f f f f 5 4 f f . 
            . f f f f f e e e e f f f f f . 
            . . f e f b f 4 4 f b f e f . . 
            . . f e 4 1 f d d f 1 4 e f . . 
            . . . f e 4 d d d d 4 e f e . . 
            . . f e f 5 5 5 5 e d d 4 e . . 
            . . e 4 f 5 5 5 5 e d d e . . . 
            . . . . f 4 4 4 4 f e e . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . f f f . . . . . . . . . 
            `,img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 5 5 f f f . . . . 
            . . . f f f 5 5 5 5 f f f . . . 
            . . f f f 4 4 4 4 4 4 f f f . . 
            . . f f 4 5 5 5 5 5 5 4 4 f . . 
            . . f 4 5 f f f f f f 5 4 f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 5 5 5 5 5 5 f 4 e . . 
            . . 4 d f 5 5 5 5 5 5 f d 4 . . 
            . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f 5 5 f f f . . . . 
            . . . f f f 5 5 5 5 f f f . . . 
            . . f f f 4 4 4 4 4 4 f f f . . 
            . . f f 4 5 5 5 5 5 5 4 4 f . . 
            . f f 4 5 f f f f f f 5 4 f f . 
            . f f f f f e e e e f f f f f . 
            . . f e f b f 4 4 f b f e f . . 
            . . f e 4 1 f d d f 1 4 e f . . 
            . . e f e 4 d d d d 4 e f . . . 
            . . e 4 d d e 5 5 5 5 f e f . . 
            . . . e d d e 5 5 5 5 f 4 e . . 
            . . . . e e f 4 4 4 4 f . . . . 
            . . . . . f f f f f f f . . . . 
            . . . . . . . . . f f f . . . . 
            `],
        200,
        true
        )
        pauseUntil(() => !(controller.player3.isPressed(ControllerButton.Down)))
    } else if (lastdir3 == 1 && !(controller.player3.isPressed(ControllerButton.Down))) {
        animation.runImageAnimation(
        Hero3,
        [img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 5 5 f f f . . . . 
            . . . f f f 5 5 5 5 f f f . . . 
            . . f f f 4 4 4 4 4 4 f f f . . 
            . . f f 4 5 5 5 5 5 5 4 4 f . . 
            . . f 4 5 f f f f f f 5 4 f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 5 5 5 5 5 5 f 4 e . . 
            . . 4 d f 5 5 5 5 5 5 f d 4 . . 
            . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `],
        200,
        true
        )
    }
    if (lastdir3 == 2 && controller.player3.isPressed(ControllerButton.Left)) {
        animation.runImageAnimation(
        Hero3,
        [img`
            . . . . f f f f f f . . . . . . 
            . . . f 5 f e e e e f f . . . . 
            . . f 5 5 5 f e e e e f f . . . 
            . . f 4 4 4 4 f f e e e f . . . 
            . f 5 5 5 5 5 5 5 f f f f . . . 
            . f 5 5 f f f f 4 4 4 4 f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e e f f . . . . 
            . . . f 5 5 5 e d d 4 . . . . . 
            . . . f 5 5 5 e d d e . . . . . 
            . . . f 4 4 4 f e e f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 5 f e e e e f f . . . . 
            . . f 5 5 5 f e e e e f f . . . 
            . . f 4 4 4 4 f f e e e f . . . 
            . f 5 5 5 5 5 5 5 f f f f . . . 
            . f 5 5 f f f f 4 4 4 4 f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d e e e e e f . . . 
            . . . f e 4 e d d 4 f . . . . . 
            . . . f 5 5 e d d e f . . . . . 
            . . f f 4 4 f e e f f f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `,img`
            . . . . f f f f f f . . . . . . 
            . . . f 5 f e e e e f f . . . . 
            . . f 5 5 5 f e e e e f f . . . 
            . . f 4 4 4 4 f f e e e f . . . 
            . f 5 5 5 5 5 5 5 f f f f . . . 
            . f 5 5 f f f f 4 4 4 4 f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e e f f . . . . 
            . . . f 5 5 5 e d d 4 . . . . . 
            . . . f 5 5 5 e d d e . . . . . 
            . . . f 4 4 4 f e e f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 5 f e e e e f f . . . . 
            . . f 5 5 5 f e e e e f f . . . 
            . . f 4 4 4 4 f f e e e f . . . 
            . f 5 5 5 5 5 5 5 f f f f . . . 
            . f 5 5 f f f f 4 4 4 4 f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e d d 4 . . . . 
            . . . f 5 5 5 5 e d d e . . . . 
            . . f f 4 4 4 4 f e e f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `],
        200,
        true
        )
        pauseUntil(() => !(controller.player3.isPressed(ControllerButton.Left)))
    } else if (lastdir3 == 2 && !(controller.player3.isPressed(ControllerButton.Left))) {
        animation.runImageAnimation(
        Hero3,
        [img`
            . . . . f f f f f f . . . . . . 
            . . . f 5 f e e e e f f . . . . 
            . . f 5 5 5 f e e e e f f . . . 
            . . f 4 4 4 4 f f e e e f . . . 
            . f 5 5 5 5 5 5 5 f f f f . . . 
            . f 5 5 f f f f 4 4 4 4 f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e e f f . . . . 
            . . . f 5 5 5 e d d 4 . . . . . 
            . . . f 5 5 5 e d d e . . . . . 
            . . . f 4 4 4 f e e f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `],
        200,
        false
        )
    }
    if (lastdir3 == 3 && controller.player3.isPressed(ControllerButton.Right)) {
        animation.runImageAnimation(
        Hero3,
        [img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 5 f . . . 
            . . . f f e e e e f 5 5 5 f . . 
            . . . f e e e f f 4 4 4 4 f . . 
            . . . f f f f 5 5 5 5 5 5 5 f . 
            . . . f 4 4 4 4 f f f f 5 5 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . f f e e 4 4 4 e f . . . 
            . . . . . 4 d d e 5 5 5 f . . . 
            . . . . . e d d e 5 5 5 f . . . 
            . . . . . f e e f 4 4 4 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 5 f . . . 
            . . . f f e e e e f 5 5 5 f . . 
            . . . f e e e f f 4 4 4 4 f . . 
            . . . f f f f 5 5 5 5 5 5 5 f . 
            . . . f 4 4 4 4 f f f f 5 5 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e e e d d d f . . . 
            . . . . . f 4 d d e 4 e f . . . 
            . . . . . f e d d e 5 5 f . . . 
            . . . . f f f e e f 4 4 f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . f f . . . f f f . . . 
            `,img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 5 f . . . 
            . . . f f e e e e f 5 5 5 f . . 
            . . . f e e e f f 4 4 4 4 f . . 
            . . . f f f f 5 5 5 5 5 5 5 f . 
            . . . f 4 4 4 4 f f f f 5 5 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . f f e e 4 4 4 e f . . . 
            . . . . . 4 d d e 5 5 5 f . . . 
            . . . . . e d d e 5 5 5 f . . . 
            . . . . . f e e f 4 4 4 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 5 f . . . 
            . . . f f e e e e f 5 5 5 f . . 
            . . . f e e e f f 4 4 4 4 f . . 
            . . . f f f f 5 5 5 5 5 5 5 f . 
            . . . f 4 4 4 4 f f f f 5 5 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . 4 d d e 4 4 4 e f . . . 
            . . . . e d d e 5 5 5 5 f . . . 
            . . . . f e e f 4 4 4 4 f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . f f . . . f f f . . . 
            `],
        200,
        true
        )
        pauseUntil(() => !(controller.player3.isPressed(ControllerButton.Right)))
    } else if (lastdir3 == 3 && !(controller.player3.isPressed(ControllerButton.Right))) {
        animation.runImageAnimation(
        Hero3,
        [img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 5 f . . . 
            . . . f f e e e e f 5 5 5 f . . 
            . . . f e e e f f 4 4 4 4 f . . 
            . . . f f f f 5 5 5 5 5 5 5 f . 
            . . . f 4 4 4 4 f f f f 5 5 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . f f e e 4 4 4 e f . . . 
            . . . . . 4 d d e 5 5 5 f . . . 
            . . . . . e d d e 5 5 5 f . . . 
            . . . . . f e e f 4 4 4 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `],
        200,
        false
        )
    }
}
function Mapswitch (_from: string, to: string, shortcut: number) {
    sprites.destroyAllSpritesOfKind(SpriteKind.NPC)
    sprites.destroyAllSpritesOfKind(SpriteKind.SSG)
    sprites.destroyAllSpritesOfKind(SpriteKind.SFG)
    sprites.destroyAllSpritesOfKind(SpriteKind.G)
    sprites.destroyAllSpritesOfKind(SpriteKind.FG)
    sprites.destroyAllSpritesOfKind(SpriteKind.SG)
    sprites.destroyAllSpritesOfKind(SpriteKind.WP)
    sprites.destroyAllSpritesOfKind(SpriteKind.WS)
    sprites.destroyAllSpritesOfKind(SpriteKind.witchproj)
    if (_from == "ovworld" && to == "cave") {
        tiles.setCurrentTilemap(tilemap`level14`)
        tiles.placeOnTile(Hitbox, tiles.getTileLocation(57, 44))
        Map = 2
        SpawnNPCs(1, "cave")
        multilights.toggleLighting(true)
        lantern.setBreathingEnabled(true)
        multilights.addLightSource(Hero, 8)
        multilights.addFlashLightSource(
        Hero,
        0,
        60,
        60
        )
        flashlight = multilights.flashlightSourceAttachedTo(Hero)
    } else if (_from == "cave" && to == "ovworld") {
        tiles.setCurrentTilemap(tilemap`level2`)
        tiles.placeOnTile(Hitbox, tiles.getTileLocation(57, 44))
        Map = 1
        SpawnNPCs(1, "ovworld")
        SpawnNPCs(2, "ovworld")
        multilights.toggleLighting(false)
    } else if (_from == "Save" && to == "ovworld") {
        tiles.setCurrentTilemap(tilemap`level2`)
        tiles.placeOnTile(Hitbox, tiles.getTileLocation(57, 44))
        Map = 1
        SpawnNPCs(1, "ovworld")
        SpawnNPCs(2, "ovworld")
        multilights.toggleLighting(false)
    }
    Mapname = to
}
function WalkMP2 () {
    if (lastdir2 == 0 && controller.player2.isPressed(ControllerButton.Up)) {
        animation.runImageAnimation(
        Hero2,
        [img`
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . f f f f f 8 8 f f f f f . . 
            . . f f e 8 e 8 8 e 8 e f f . . 
            . . f e 8 f 8 f f 8 f 8 e f . . 
            . . f f f 8 8 e e 8 8 f f f . . 
            . f f e f 8 f e e f 8 f e f f . 
            . f e e f f e e e e f e e e f . 
            . . f e e e e e e e e e e f . . 
            . . . f e e e e e e e e f . . . 
            . . e 4 f f f f f f f f 4 e . . 
            . . 4 d f 9 9 9 9 9 9 f d 4 . . 
            . . 4 4 f 6 6 6 6 6 6 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . . f f f f 8 8 f f f f . . . 
            . . f f e 8 e 8 8 e 8 e f f . . 
            . . f e 8 f 8 f f f 8 f e f . . 
            . . f f f 8 f e e 8 8 f f f . . 
            . . f e 8 f f e e 8 f e e f . . 
            . f f e f f e e e f e e e f f . 
            . f f e e e e e e e e e e f f . 
            . . . f e e e e e e e e f . . . 
            . . . e f f f f f f f f 4 e . . 
            . . . 4 f 9 9 9 9 9 e d d 4 . . 
            . . . e f f f f f f e e 4 . . . 
            . . . . f f f . . . . . . . . . 
            `,img`
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . f f f f f 8 8 f f f f f . . 
            . . f f e 8 e 8 8 e 8 e f f . . 
            . . f e 8 f 8 f f 8 f 8 e f . . 
            . . f f f 8 8 e e 8 8 f f f . . 
            . f f e f 8 f e e f 8 f e f f . 
            . f e e f f e e e e f e e e f . 
            . . f e e e e e e e e e e f . . 
            . . . f e e e e e e e e f . . . 
            . . e 4 f f f f f f f f 4 e . . 
            . . 4 d f 9 9 9 9 9 9 f d 4 . . 
            . . 4 4 f 6 6 6 6 6 6 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . . f f f f 8 8 f f f f . . . 
            . . f f e 8 e 8 8 e 8 e f f . . 
            . . f e f 8 f f f 8 f 8 e f . . 
            . . f f f 8 8 e e f 8 f f f . . 
            . . f e e f 8 e e f f 8 e f . . 
            . f f e e e f e e e f f e f f . 
            . f f e e e e e e e e e e f f . 
            . . . f e e e e e e e e f . . . 
            . . e 4 f f f f f f f f e . . . 
            . . 4 d d e 9 9 9 9 9 f 4 . . . 
            . . . 4 e e f f f f f f e . . . 
            . . . . . . . . . f f f . . . . 
            `],
        200,
        true
        )
        pauseUntil(() => !(controller.player2.isPressed(ControllerButton.Up)))
    } else if (lastdir2 == 0 && !(controller.player2.isPressed(ControllerButton.Up))) {
        animation.runImageAnimation(
        Hero2,
        [img`
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . f f f f f 8 8 f f f f f . . 
            . . f f e 8 e 8 8 e 8 e f f . . 
            . . f e 8 f 8 f f 8 f 8 e f . . 
            . . f f f 8 8 e e 8 8 f f f . . 
            . f f e f 8 f e e f 8 f e f f . 
            . f e e f f e e e e f e e e f . 
            . . f e e e e e e e e e e f . . 
            . . . f e e e e e e e e f . . . 
            . . e 4 f f f f f f f f 4 e . . 
            . . 4 d f 9 9 9 9 9 9 f d 4 . . 
            . . 4 4 f 6 6 6 6 6 6 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `],
        200,
        false
        )
    }
    if (lastdir2 == 1 && controller.player2.isPressed(ControllerButton.Down)) {
        animation.runImageAnimation(
        Hero2,
        [img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 8 8 f f f . . . . 
            . . . f f f 8 8 8 8 f f f . . . 
            . . f f f 9 9 9 9 9 9 f f f . . 
            . . f f 9 8 8 8 8 8 8 9 9 f . . 
            . . f 9 8 f f f f f f 8 9 f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 6 6 6 6 e e f . . . 
            . . e 4 f 8 8 8 8 8 8 f 4 e . . 
            . . 4 d f 8 8 8 8 8 8 f d 4 . . 
            . . 4 4 f 6 6 5 5 6 6 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f 8 8 f f f . . . . 
            . . . f f f 8 8 8 8 f f f . . . 
            . . f f f 9 9 9 9 9 9 f f f . . 
            . . f f 9 8 8 8 8 8 8 9 9 f . . 
            . f f 9 8 f f f f f f 8 9 f f . 
            . f f f f f e e e e f f f f f . 
            . . f e f b f 4 4 f b f e f . . 
            . . f e 4 1 f d d f 1 4 e f . . 
            . . . f e 4 d d d d 4 e f e . . 
            . . f e f 8 8 8 8 e d d 4 e . . 
            . . e 4 f 8 8 8 8 e d d e . . . 
            . . . . f 6 6 5 5 f e e . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . f f f . . . . . . . . . 
            `,img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 8 8 f f f . . . . 
            . . . f f f 8 8 8 8 f f f . . . 
            . . f f f 9 9 9 9 9 9 f f f . . 
            . . f f 9 8 8 8 8 8 8 9 9 f . . 
            . . f 9 8 f f f f f f 8 9 f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 6 6 6 6 e e f . . . 
            . . e 4 f 8 8 8 8 8 8 f 4 e . . 
            . . 4 d f 8 8 8 8 8 8 f d 4 . . 
            . . 4 4 f 6 6 5 5 6 6 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f 8 8 f f f . . . . 
            . . . f f f 8 8 8 8 f f f . . . 
            . . f f f 9 9 9 9 9 9 f f f . . 
            . . f f 9 8 8 8 8 8 8 9 9 f . . 
            . f f 9 8 f f f f f f 8 9 f f . 
            . f f f f f e e e e f f f f f . 
            . . f e f b f 4 4 f b f e f . . 
            . . f e 4 1 f d d f 1 4 e f . . 
            . . e f e 4 d d d d 4 e f . . . 
            . . e 4 d d e 8 8 8 8 f e f . . 
            . . . e d d e 8 8 8 8 f 4 e . . 
            . . . . e e f 5 5 6 6 f . . . . 
            . . . . . f f f f f f f . . . . 
            . . . . . . . . . f f f . . . . 
            `],
        200,
        true
        )
        pauseUntil(() => !(controller.player2.isPressed(ControllerButton.Down)))
    } else if (lastdir2 == 1 && !(controller.player2.isPressed(ControllerButton.Down))) {
        animation.runImageAnimation(
        Hero2,
        [img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 8 8 f f f . . . . 
            . . . f f f 8 8 8 8 f f f . . . 
            . . f f f 9 9 9 9 9 9 f f f . . 
            . . f f 9 8 8 8 8 8 8 9 9 f . . 
            . . f 9 8 f f f f f f 8 9 f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 6 6 6 6 e e f . . . 
            . . e 4 f 8 8 8 8 8 8 f 4 e . . 
            . . 4 d f 8 8 8 8 8 8 f d 4 . . 
            . . 4 4 f 6 6 5 5 6 6 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `],
        200,
        true
        )
    }
    if (lastdir2 == 2 && controller.player2.isPressed(ControllerButton.Left)) {
        animation.runImageAnimation(
        Hero2,
        [img`
            . . . . f f f f f f . . . . . . 
            . . . f 8 f e e e e f f . . . . 
            . . f 8 8 8 f e e e e f f . . . 
            . . f 9 9 9 9 f f e e e f . . . 
            . f 8 8 8 8 8 8 8 f f f f . . . 
            . f 8 8 f f f f 9 9 9 9 f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e e f f . . . . 
            . . . f 8 8 8 e d d 4 . . . . . 
            . . . f 8 8 8 e d d e . . . . . 
            . . . f 5 5 6 f e e f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 8 f e e e e f f . . . . 
            . . f 8 8 8 f e e e e f f . . . 
            . . f 9 9 9 9 f f e e e f . . . 
            . f 8 8 8 8 8 8 8 f f f f . . . 
            . f 8 8 f f f f 9 9 9 9 f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d e e e e e f . . . 
            . . . f e 4 e d d 4 f . . . . . 
            . . . f 8 8 e d d e f . . . . . 
            . . f f 5 5 f e e f f f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `,img`
            . . . . f f f f f f . . . . . . 
            . . . f 8 f e e e e f f . . . . 
            . . f 8 8 8 f e e e e f f . . . 
            . . f 9 9 9 9 f f e e e f . . . 
            . f 8 8 8 8 8 8 8 f f f f . . . 
            . f 8 8 f f f f 9 9 9 9 f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e e f f . . . . 
            . . . f 8 8 8 e d d 4 . . . . . 
            . . . f 8 8 8 e d d e . . . . . 
            . . . f 5 5 6 f e e f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 8 f e e e e f f . . . . 
            . . f 8 8 8 f e e e e f f . . . 
            . . f 9 9 9 9 f f e e e f . . . 
            . f 8 8 8 8 8 8 8 f f f f . . . 
            . f 8 8 f f f f 9 9 9 9 f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e d d 4 . . . . 
            . . . f 8 8 8 8 e d d e . . . . 
            . . f f 5 5 4 4 f e e f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `],
        200,
        true
        )
        pauseUntil(() => !(controller.player2.isPressed(ControllerButton.Left)))
    } else if (lastdir2 == 2 && !(controller.player2.isPressed(ControllerButton.Left))) {
        animation.runImageAnimation(
        Hero2,
        [img`
            . . . . f f f f f f . . . . . . 
            . . . f 8 f e e e e f f . . . . 
            . . f 8 8 8 f e e e e f f . . . 
            . . f 9 9 9 9 f f e e e f . . . 
            . f 8 8 8 8 8 8 8 f f f f . . . 
            . f 8 8 f f f f 9 9 9 9 f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e e f f . . . . 
            . . . f 8 8 8 e d d 4 . . . . . 
            . . . f 8 8 8 e d d e . . . . . 
            . . . f 5 5 6 f e e f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `],
        200,
        false
        )
    }
    if (lastdir2 == 3 && controller.player2.isPressed(ControllerButton.Right)) {
        animation.runImageAnimation(
        Hero2,
        [img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 8 f . . . 
            . . . f f e e e e f 8 8 8 f . . 
            . . . f e e e f f 9 9 9 9 f . . 
            . . . f f f f 8 8 8 8 8 8 8 f . 
            . . . f 9 9 9 9 f f f f 8 8 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . f f e e 4 4 4 e f . . . 
            . . . . . 4 d d e 8 8 8 f . . . 
            . . . . . e d d e 8 8 8 f . . . 
            . . . . . f e e f 6 5 5 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 8 f . . . 
            . . . f f e e e e f 8 8 8 f . . 
            . . . f e e e f f 9 9 9 9 f . . 
            . . . f f f f 8 8 8 8 8 8 8 f . 
            . . . f 9 9 9 9 f f f f 8 8 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e e e d d d f . . . 
            . . . . . f 4 d d e 4 e f . . . 
            . . . . . f e d d e 8 8 f . . . 
            . . . . f f f e e f 5 5 f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . f f . . . f f f . . . 
            `,img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 8 f . . . 
            . . . f f e e e e f 8 8 8 f . . 
            . . . f e e e f f 9 9 9 9 f . . 
            . . . f f f f 8 8 8 8 8 8 8 f . 
            . . . f 9 9 9 9 f f f f 8 8 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . f f e e 4 4 4 e f . . . 
            . . . . . 4 d d e 8 8 8 f . . . 
            . . . . . e d d e 8 8 8 f . . . 
            . . . . . f e e f 6 5 5 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 8 f . . . 
            . . . f f e e e e f 8 8 8 f . . 
            . . . f e e e f f 9 9 9 9 f . . 
            . . . f f f f 8 8 8 8 8 8 8 f . 
            . . . f 9 9 9 9 f f f f 8 8 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . 4 d d e 4 4 4 e f . . . 
            . . . . e d d e 8 8 8 8 f . . . 
            . . . . f e e f 4 4 5 5 f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . f f . . . f f f . . . 
            `],
        200,
        true
        )
        pauseUntil(() => !(controller.player2.isPressed(ControllerButton.Right)))
    } else if (lastdir2 == 3 && !(controller.player2.isPressed(ControllerButton.Right))) {
        animation.runImageAnimation(
        Hero2,
        [img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 8 f . . . 
            . . . f f e e e e f 8 8 8 f . . 
            . . . f e e e f f 9 9 9 9 f . . 
            . . . f f f f 8 8 8 8 8 8 8 f . 
            . . . f 9 9 9 9 f f f f 8 8 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . f f e e 4 4 4 e f . . . 
            . . . . . 4 d d e 8 8 8 f . . . 
            . . . . . e d d e 8 8 8 f . . . 
            . . . . . f e e f 6 5 5 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `],
        200,
        false
        )
    }
}
controller.player4.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    lastdir4 = 3
})
sprites.onOverlap(SpriteKind.Hitbox, SpriteKind.Projectile, function (sprite, otherSprite) {
    if (sprite == Hitbox) {
        if (otherSprite == Swrdswing2) {
            HeroMPHP.value += randint(-2, -5)
            if (HeroMPHP.value == 0) {
                info.player2.changeScoreBy(1)
                sprites.destroy(sprite)
                sprites.destroy(Hero)
                setMpPlayers(1)
            }
        } else if (otherSprite == Swrdswing3) {
            HeroMPHP.value += randint(-2, -5)
            if (HeroMPHP.value == 0) {
                info.player3.changeScoreBy(1)
                sprites.destroy(sprite)
                sprites.destroy(Hero)
                setMpPlayers(1)
            }
        } else if (otherSprite == Swrdswing4) {
            HeroMPHP.value += randint(-2, -5)
            if (HeroMPHP.value == 0) {
                info.player4.changeScoreBy(1)
                sprites.destroy(sprite)
                sprites.destroy(Hero)
                setMpPlayers(1)
            }
        }
        sprites.destroy(otherSprite)
    } else if (sprite == Hitbox2) {
        if (otherSprite == Swrdswing) {
            HeroMPHP2.value += randint(-2, -5)
            if (HeroMPHP2.value == 0) {
                info.player1.changeScoreBy(1)
                sprites.destroy(sprite)
                sprites.destroy(Hero2)
                setMpPlayers(2)
            }
        } else if (otherSprite == Swrdswing3) {
            HeroMPHP2.value += randint(-2, -5)
            if (HeroMPHP2.value == 0) {
                info.player3.changeScoreBy(1)
                sprites.destroy(sprite)
                sprites.destroy(Hero2)
                setMpPlayers(2)
            }
        } else if (otherSprite == Swrdswing4) {
            HeroMPHP2.value += randint(-2, -5)
            if (HeroMPHP2.value == 0) {
                info.player4.changeScoreBy(1)
                sprites.destroy(sprite)
                sprites.destroy(Hero2)
                setMpPlayers(2)
            }
        }
        sprites.destroy(otherSprite)
    } else if (sprite == Hitbox3) {
        if (otherSprite == Swrdswing2) {
            HeroMPHP3.value += randint(-2, -5)
            if (HeroMPHP3.value == 0) {
                info.player2.changeScoreBy(1)
                sprites.destroy(sprite)
                sprites.destroy(Hero3)
                setMpPlayers(3)
            }
        } else if (otherSprite == Swrdswing) {
            HeroMPHP2.value += randint(-2, -5)
            if (HeroMPHP3.value == 0) {
                info.player1.changeScoreBy(1)
                sprites.destroy(sprite)
                sprites.destroy(Hero3)
                setMpPlayers(3)
            }
        } else if (otherSprite == Swrdswing4) {
            HeroMPHP3.value += randint(-2, -5)
            if (HeroMPHP3.value == 0) {
                info.player4.changeScoreBy(1)
                sprites.destroy(sprite)
                sprites.destroy(Hero3)
                setMpPlayers(3)
            }
        }
        sprites.destroy(otherSprite)
    } else if (sprite == Hitbox4) {
        if (otherSprite == Swrdswing2) {
            HeroMPHP4.value += randint(-2, -5)
            if (HeroMPHP4.value == 0) {
                info.player2.changeScoreBy(1)
                sprites.destroy(sprite)
                sprites.destroy(Hero4)
                setMpPlayers(4)
            }
        } else if (otherSprite == Swrdswing3) {
            HeroMPHP4.value += randint(-2, -5)
            if (HeroMPHP4.value == 0) {
                info.player3.changeScoreBy(1)
                sprites.destroy(sprite)
                sprites.destroy(Hero4)
                setMpPlayers(4)
            }
        } else if (otherSprite == Swrdswing) {
            HeroMPHP4.value += randint(-2, -5)
            if (HeroMPHP4.value == 0) {
                info.player1.changeScoreBy(1)
                sprites.destroy(sprite)
                sprites.destroy(Hero4)
                setMpPlayers(4)
            }
        }
        sprites.destroy(otherSprite)
    }
})
controller.player2.onEvent(ControllerEvent.Connected, function () {
    if (MP == 0) {
        spirit = sprites.create(img`
            . . . . . . . . . . 
            . . 8 8 8 8 8 . . . 
            . 8 8 9 9 9 8 8 . . 
            . 8 9 9 1 9 9 8 . . 
            . 8 9 1 1 1 9 8 . . 
            . 8 9 9 1 9 9 8 . . 
            . 8 8 9 9 9 8 8 . . 
            . . 8 8 8 8 8 . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            `, SpriteKind.Spirit)
        controller.player2.moveSprite(spirit, 50, 50)
        spirit.setStayInScreen(true)
        spirit.setFlag(SpriteFlag.GhostThroughWalls, true)
        spirit.z = 10
        p2SP = 1
        if (inMenu == 1) {
            SPstartbutton = sprites.create(img`
                1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 
                1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
                1 1 1 f f f f 1 1 1 f f f f 1 1 1 1 
                1 1 f 1 1 1 1 1 1 1 f 1 1 f 1 1 1 1 
                1 1 f 1 1 1 1 1 1 1 f 1 1 f 1 1 1 1 
                1 1 f 1 1 1 1 1 1 1 f f f f 1 1 1 1 
                1 1 1 f f f f 1 1 1 f 1 1 1 1 1 1 1 
                1 1 1 1 1 1 1 f 1 1 f 1 1 1 1 1 1 1 
                1 1 1 1 1 1 1 f 1 1 f 1 1 1 1 1 1 1 
                1 1 1 1 1 1 1 f 1 1 f 1 1 1 1 1 1 1 
                1 1 1 f f f f 1 1 1 f 1 1 1 1 1 1 1 
                1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
                1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 
                `, SpriteKind.Title)
            SPstartbutton.setPosition(112, 60)
        }
        pauseUntil(() => inMenu == 0)
        spirit.setPosition(Hero.x, Hero.y)
    }
})
sprites.onOverlap(SpriteKind.Hitbox, SpriteKind.SFG, function (sprite, otherSprite) {
    dmgPlayer(6, "Slow", "", "", false)
})
controller.player2.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    lastdir2 = 1
})
function Setmonsters (rank: number, amount: number, _super: boolean, locx: number, locy: number, locxm: number, locym: number, rndspwn: boolean) {
    for (let index = 0; index < amount; index++) {
        if (rank == 1) {
            if (_super) {
                if (randint(1, 2) == 1) {
                    supstrongghoul = sprites.create(img`
                        ........................
                        ........................
                        ........................
                        ........................
                        ..........ffff..........
                        ........ff2222ff........
                        .......fb222222bf.......
                        .......f22222222f.......
                        ......f4222222224f......
                        ......f4222222224f......
                        ......f4442222444f......
                        ......f444f44f444f......
                        ......fc4cf22fc4cf......
                        .......f42222224f.......
                        ......fffc44244ffff.....
                        ....fc222c4f4fc222cf....
                        ....f2b2b2ffff2b2b2f....
                        ....fbfbffffffbfbfbf....
                        .........ffffff.........
                        ...........fff..........
                        ........................
                        ........................
                        ........................
                        ........................
                        `, SpriteKind.SSG)
                    scaling.scaleToPercent(supstrongghoul, 150, ScaleDirection.Uniformly, ScaleAnchor.Middle)
                    if (rndspwn) {
                        tiles.placeOnTile(supstrongghoul, tiles.getTileLocation(randint(locx, locxm), randint(locy, locym)))
                    } else {
                        tiles.placeOnTile(supstrongghoul, tiles.getTileLocation(locx, locy))
                    }
                    supstrongghoul.follow(Hero, 8)
                    supstrongghoul.z = 1
                } else {
                    supfastghoul = sprites.create(img`
                        ........................
                        ........................
                        ........................
                        ........................
                        ..........ffff..........
                        ........ff3333ff........
                        .......fb333333bf.......
                        .......f33333333f.......
                        ......fb33333333bf......
                        ......fb33333333bf......
                        ......fbbb3333bbbf......
                        ......fbbbfbbfbbbf......
                        ......fcbcf33fcbcf......
                        .......fb333333bf.......
                        ......fffcbb3bbffff.....
                        ....fc333cbfbfc333cf....
                        ....f3b3b3ffff3b3b3f....
                        ....fbfbffffffbfbfbf....
                        .........ffffff.........
                        ...........fff..........
                        ........................
                        ........................
                        ........................
                        ........................
                        `, SpriteKind.SFG)
                    scaling.scaleToPercent(supfastghoul, 150, ScaleDirection.Uniformly, ScaleAnchor.Middle)
                    if (rndspwn) {
                        tiles.placeOnTile(supfastghoul, tiles.getTileLocation(randint(locx, locxm), randint(locy, locym)))
                    } else {
                        tiles.placeOnTile(supfastghoul, tiles.getTileLocation(locx, locy))
                    }
                    supfastghoul.follow(Hero, 16)
                    supfastghoul.z = 1
                }
            } else {
                if (randint(1, 2) == 1) {
                    ghoul = sprites.create(img`
                        ........................
                        ........................
                        ........................
                        ........................
                        ..........ffff..........
                        ........ff1111ff........
                        .......fb111111bf.......
                        .......f11111111f.......
                        ......fd11111111df......
                        ......fd11111111df......
                        ......fddd1111dddf......
                        ......fbdbfddfbdbf......
                        ......fcdcf11fcdcf......
                        .......fb111111bf.......
                        ......fffcdb1bdffff.....
                        ....fc111cbfbfc111cf....
                        ....f1b1b1ffff1b1b1f....
                        ....fbfbffffffbfbfbf....
                        .........ffffff.........
                        ...........fff..........
                        ........................
                        ........................
                        ........................
                        ........................
                        `, SpriteKind.G)
                    if (rndspwn) {
                        tiles.placeOnTile(ghoul, tiles.getTileLocation(randint(locx, locxm), randint(locy, locym)))
                    } else {
                        tiles.placeOnTile(ghoul, tiles.getTileLocation(locx, locy))
                    }
                    ghoul.follow(Hero, 8)
                    ghoul.z = 1
                } else if (randint(1, 3) < 3) {
                    fastghoul = sprites.create(img`
                        ........................
                        ........................
                        ........................
                        ........................
                        ..........ffff..........
                        ........ff3333ff........
                        .......fb333333bf.......
                        .......f33333333f.......
                        ......fb33333333bf......
                        ......fb33333333bf......
                        ......fbbb3333bbbf......
                        ......fbbbfbbfbbbf......
                        ......fcbcf33fcbcf......
                        .......fb333333bf.......
                        ......fffcbb3bbffff.....
                        ....fc333cbfbfc333cf....
                        ....f3b3b3ffff3b3b3f....
                        ....fbfbffffffbfbfbf....
                        .........ffffff.........
                        ...........fff..........
                        ........................
                        ........................
                        ........................
                        ........................
                        `, SpriteKind.FG)
                    if (rndspwn) {
                        tiles.placeOnTile(fastghoul, tiles.getTileLocation(randint(locx, locxm), randint(locy, locym)))
                    } else {
                        tiles.placeOnTile(fastghoul, tiles.getTileLocation(locx, locy))
                    }
                    fastghoul.follow(Hero, 12)
                    fastghoul.z = 1
                } else {
                    strongghoul = sprites.create(img`
                        ........................
                        ........................
                        ........................
                        ........................
                        ..........ffff..........
                        ........ff2222ff........
                        .......fb222222bf.......
                        .......f22222222f.......
                        ......f4222222224f......
                        ......f4222222224f......
                        ......f4442222444f......
                        ......f444f44f444f......
                        ......fc4cf22fc4cf......
                        .......f42222224f.......
                        ......fffc44244ffff.....
                        ....fc222c4f4fc222cf....
                        ....f2b2b2ffff2b2b2f....
                        ....fbfbffffffbfbfbf....
                        .........ffffff.........
                        ...........fff..........
                        ........................
                        ........................
                        ........................
                        ........................
                        `, SpriteKind.SG)
                    if (rndspwn) {
                        tiles.placeOnTile(strongghoul, tiles.getTileLocation(randint(locx, locxm), randint(locy, locym)))
                    } else {
                        tiles.placeOnTile(strongghoul, tiles.getTileLocation(locx, locy))
                    }
                    strongghoul.follow(Hero, 6)
                    strongghoul.z = 1
                }
            }
        } else if (rank == 2) {
            wizard = sprites.create(img`
                . . . . . . . c c c . . . . . . 
                . . . . . . c b 2 c . . . . . . 
                . . . . c c c 2 2 c c c . . . . 
                . . c c b c 2 2 2 2 c c c c . . 
                . c b b 2 b 2 2 2 2 b 2 b b c . 
                . c b 2 2 b b 2 2 b b 2 2 b c . 
                . . f 2 2 2 b b b b 2 2 2 c . . 
                . . f f 2 2 2 2 2 2 2 2 f f . . 
                . . f f f b f e e f b f f f . . 
                . . f f f 1 f c c f 1 f f f . . 
                . . . f f c c c c c c f f . . . 
                . . . e e f e e e e f e e . . . 
                . . e c c b 4 b b 4 b f c e . . 
                . . e e f 4 4 4 4 4 4 f e e . . 
                . . . . c b 4 4 4 4 b c . . . . 
                . . . . . f f f f f f . . . . . 
                `, SpriteKind.WS)
            if (rndspwn) {
                tiles.placeOnTile(wizard, tiles.getTileLocation(randint(locx, locxm), randint(locy, locym)))
            } else {
                tiles.placeOnTile(wizard, tiles.getTileLocation(locx, locy))
            }
            wizard.follow(Hero, 9)
            wizard.z = 1
        } else if (rank == 3) {
            if (Map == 2) {
                if (!(witchspwnd == 1)) {
                    witch = sprites.create(img`
                        . . . . . . . c c c . . . . . . 
                        . . . . . . c b 5 c . . . . . . 
                        . . . . c c c 5 5 c c c . . . . 
                        . . c c b c 5 5 5 5 c c c c . . 
                        . c b b 5 b 5 5 5 5 b 5 b b c . 
                        . c b 5 5 b b 5 5 b b 5 5 b c . 
                        . . f 5 5 5 b b b b 5 5 5 c . . 
                        . . f f 5 5 5 5 5 5 5 5 f f . . 
                        . . f f f b f e e f b f f f . . 
                        . . f f f 1 f b b f 1 f f f . . 
                        . . . f f b b b b b b f f . . . 
                        . . . e e f e e e e f e e . . . 
                        . . e b c b 5 b b 5 b f b e . . 
                        . . e e f 5 5 5 5 5 5 f e e . . 
                        . . . . c b 5 5 5 5 b c . . . . 
                        . . . . . f f f f f f . . . . . 
                        `, SpriteKind.WP)
                    if (rndspwn) {
                        tiles.placeOnTile(witch, tiles.getTileLocation(randint(locx, locxm), randint(locy, locym)))
                    } else {
                        tiles.placeOnTile(witch, tiles.getTileLocation(locx, locy))
                    }
                    witchspwnd = 1
                    witch.follow(Hero, 6)
                    witch.z = 1
                }
            } else {
            	
            }
        } else {
        	
        }
    }
}
sprites.onOverlap(SpriteKind.Hitbox, SpriteKind.witchproj, function (sprite, otherSprite) {
    dmgPlayer(2, "Burn", "", "", false)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    lastdir = 2
    if (Map == 2) {
        flashlight.direction = 180
    }
})
sprites.onOverlap(SpriteKind.WP, SpriteKind.Projectile, function (sprite, otherSprite) {
    killEnemy(5, false, witch, "Sad", sprite, 3, 4, 4, true, 1)
    witchspwnd = 0
})
function Setmap () {
    tiles.setCurrentTilemap(tilemap`level2`)
    tiles.placeOnTile(Hitbox, tiles.getTileLocation(13, 2))
    scene.setBackgroundColor(7)
    scene.cameraFollowSprite(Hero)
    Mapname = "ovworld"
}
controller.player3.onEvent(ControllerEvent.Connected, function () {
    if (MP == 0) {
        spiritp3 = sprites.create(img`
            . . . . . . . . . . 
            . . e e e e e . . . 
            . e e 4 4 4 e e . . 
            . e 4 4 5 4 4 e . . 
            . e 4 5 5 5 4 e . . 
            . e 4 4 5 4 4 e . . 
            . e e 4 4 4 e e . . 
            . . e e e e e . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            `, SpriteKind.Spirit)
        controller.player3.moveSprite(spiritp3, 50, 50)
        spiritp3.setStayInScreen(true)
        spiritp3.setFlag(SpriteFlag.GhostThroughWalls, true)
        spiritp3.z = 10
    } else {
        setMpPlayers(3)
        setMPhpbars(3)
        if (MPmap == 11) {
            tiles.placeOnTile(Hitbox3, tiles.getTileLocation(1, 6))
        }
    }
    p3 = 1
})
sprites.onOverlap(SpriteKind.Hitbox, SpriteKind.FG, function (sprite, otherSprite) {
    dmgPlayer(3, "", "", "", false)
})
function Setplayer () {
    Hitbox = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f f f f f . . . . . 
        `, SpriteKind.Hitbox)
    Hero = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    Compfolwloc = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 3 3 . . . . . . . 
        . . . . . . . 3 3 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.CFL)
    Hero.z = 5
    Hero.setFlag(SpriteFlag.Ghost, true)
    Hero.setFlag(SpriteFlag.Invisible, true)
    Hitbox.setFlag(SpriteFlag.Invisible, false)
    Compfolwloc.setFlag(SpriteFlag.Invisible, true)
    Speed = 20
    pnt2speed = 1
    level = 1
    Sword = 0
    Shield = 0
    setVariables()
    SetHPbar()
    SetEXPbar()
}
function SaveLoad (Save: boolean, Savenum: number) {
    scene.setBackgroundImage(img`
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        `)
    if (Savenum == 1) {
        if (Save) {
            blockSettings.writeNumberArray("Save 1", [
            1,
            HeroHP.max,
            exp,
            exp2lvl,
            level,
            Sword,
            Shield,
            Natdefence,
            HPpnts,
            Natdefpnt,
            Speedpnts,
            pnt2speed,
            Swingpnts,
            Map,
            spwnpoint,
            Area
            ])
            blockSettings.writeString("Save 1 Name", Name)
            blockSettings.writeString("Save 1 Name2", name2)
            blockSettings.writeString("Save 1 MapName", Mapname)
            game.splash("Saved!")
        } else {
            Setplayer()
            HeroHP.max = blockSettings.readNumberArray("Save 1")[1]
            exp = blockSettings.readNumberArray("Save 1")[2]
            exp2lvl = blockSettings.readNumberArray("Save 1")[3]
            level = blockSettings.readNumberArray("Save 1")[4]
            Sword = blockSettings.readNumberArray("Save 1")[5]
            Shield = blockSettings.readNumberArray("Save 1")[6]
            Natdefence = blockSettings.readNumberArray("Save 1")[7]
            HPpnts = blockSettings.readNumberArray("Save 1")[8]
            Natdefpnt = blockSettings.readNumberArray("Save 1")[8]
            Speedpnts = blockSettings.readNumberArray("Save 1")[9]
            Swingpnts = blockSettings.readNumberArray("Save 1")[10]
            pnt2speed = blockSettings.readNumberArray("Save 1")[11]
            Map = blockSettings.readNumberArray("Save 1")[12]
            spwnpoint = blockSettings.readNumberArray("Save 1")[13]
            Speed = blockSettings.readNumberArray("Save 1")[14]
            Area = blockSettings.readNumberArray("Save 1")[15]
            Name = blockSettings.readString("Save 1 Name")
            name2 = blockSettings.readString("Save 1 Name2")
            Mapname = blockSettings.readString("Save 1 MapName")
            Setmap()
            Mapswitch("Save", Mapname, 1)
            SpawnNPCs(Area, Mapname)
            Respawn()
            info.setLife(3)
        }
    } else if (Savenum == 2) {
        if (Save) {
        	
        } else {
        	
        }
    } else if (Savenum == 3) {
        if (Save) {
        	
        } else {
        	
        }
    }
    inMenu = 0
    Paused = false
}
function WalkMP4 () {
    if (lastdir4 == 0 && controller.player4.isPressed(ControllerButton.Up)) {
        animation.runImageAnimation(
        Hero4,
        [img`
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . f f f f f 7 7 f f f f f . . 
            . . f f e 7 e 7 7 e 7 e f f . . 
            . . f e 7 f 7 f f 7 f 7 e f . . 
            . . f f f 7 7 e e 7 7 f f f . . 
            . f f e f 7 f e e f 7 f e f f . 
            . f e e f f e e e e f e e e f . 
            . . f e e e e e e e e e e f . . 
            . . . f e e e e e e e e f . . . 
            . . e 4 f f f f f f f f 4 e . . 
            . . 4 d f 6 6 6 6 6 6 f d 4 . . 
            . . 4 4 f 7 7 7 7 7 7 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . . f f f f 7 7 f f f f . . . 
            . . f f e 7 e 7 7 e 7 e f f . . 
            . . f e 7 f 7 f f f 7 f e f . . 
            . . f f f 7 f e e 7 7 f f f . . 
            . . f e 7 f f e e 7 f e e f . . 
            . f f e f f e e e f e e e f f . 
            . f f e e e e e e e e e e f f . 
            . . . f e e e e e e e e f . . . 
            . . . e f f f f f f f f 4 e . . 
            . . . 4 f 6 6 6 6 6 e d d 4 . . 
            . . . e f f f f f f e e 4 . . . 
            . . . . f f f . . . . . . . . . 
            `,img`
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . f f f f f 7 7 f f f f f . . 
            . . f f e 7 e 7 7 e 7 e f f . . 
            . . f e 7 f 7 f f 7 f 7 e f . . 
            . . f f f 7 7 e e 7 7 f f f . . 
            . f f e f 7 f e e f 7 f e f f . 
            . f e e f f e e e e f e e e f . 
            . . f e e e e e e e e e e f . . 
            . . . f e e e e e e e e f . . . 
            . . e 4 f f f f f f f f 4 e . . 
            . . 4 d f 6 6 6 6 6 6 f d 4 . . 
            . . 4 4 f 7 7 7 7 7 7 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . . f f f f 7 7 f f f f . . . 
            . . f f e 7 e 7 7 e 7 e f f . . 
            . . f e f 7 f f f 7 f 7 e f . . 
            . . f f f 7 7 e e f 7 f f f . . 
            . . f e e f 7 e e f f 7 e f . . 
            . f f e e e f e e e f f e f f . 
            . f f e e e e e e e e e e f f . 
            . . . f e e e e e e e e f . . . 
            . . e 4 f f f f f f f f e . . . 
            . . 4 d d e 6 6 6 6 6 f 4 . . . 
            . . . 4 e e f f f f f f e . . . 
            . . . . . . . . . f f f . . . . 
            `],
        200,
        true
        )
        pauseUntil(() => !(controller.player4.isPressed(ControllerButton.Up)))
    } else if (lastdir4 == 0 && !(controller.player4.isPressed(ControllerButton.Up))) {
        animation.runImageAnimation(
        Hero4,
        [img`
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . f f f f f 7 7 f f f f f . . 
            . . f f e 7 e 7 7 e 7 e f f . . 
            . . f e 7 f 7 f f 7 f 7 e f . . 
            . . f f f 7 7 e e 7 7 f f f . . 
            . f f e f 7 f e e f 7 f e f f . 
            . f e e f f e e e e f e e e f . 
            . . f e e e e e e e e e e f . . 
            . . . f e e e e e e e e f . . . 
            . . e 4 f f f f f f f f 4 e . . 
            . . 4 d f 6 6 6 6 6 6 f d 4 . . 
            . . 4 4 f 7 7 7 7 7 7 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `],
        200,
        false
        )
    }
    if (lastdir4 == 1 && controller.player4.isPressed(ControllerButton.Down)) {
        animation.runImageAnimation(
        Hero4,
        [img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 7 7 f f f . . . . 
            . . . f f f 7 7 7 7 f f f . . . 
            . . f f f 6 6 6 6 6 6 f f f . . 
            . . f f 6 7 7 7 7 7 7 6 6 f . . 
            . . f 6 7 f f f f f f 7 6 f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 6 6 6 6 e e f . . . 
            . . e 4 f 7 7 7 7 7 7 f 4 e . . 
            . . 4 d f 7 7 7 7 7 7 f d 4 . . 
            . . 4 4 f 6 6 5 5 6 6 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f 7 7 f f f . . . . 
            . . . f f f 7 7 7 7 f f f . . . 
            . . f f f 6 6 6 6 6 6 f f f . . 
            . . f f 6 7 7 7 7 7 7 6 6 f . . 
            . f f 6 7 f f f f f f 7 6 f f . 
            . f f f f f e e e e f f f f f . 
            . . f e f b f 4 4 f b f e f . . 
            . . f e 4 1 f d d f 1 4 e f . . 
            . . . f e 4 d d d d 4 e f e . . 
            . . f e f 7 7 7 7 e d d 4 e . . 
            . . e 4 f 7 7 7 7 e d d e . . . 
            . . . . f 6 6 5 5 f e e . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . f f f . . . . . . . . . 
            `,img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 7 7 f f f . . . . 
            . . . f f f 7 7 7 7 f f f . . . 
            . . f f f 6 6 6 6 6 6 f f f . . 
            . . f f 6 7 7 7 7 7 7 6 6 f . . 
            . . f 6 7 f f f f f f 7 6 f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 6 6 6 6 e e f . . . 
            . . e 4 f 8 8 8 8 8 8 f 4 e . . 
            . . 4 d f 8 8 8 8 8 8 f d 4 . . 
            . . 4 4 f 6 6 5 5 6 6 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f 7 7 f f f . . . . 
            . . . f f f 7 7 7 7 f f f . . . 
            . . f f f 6 6 6 6 6 6 f f f . . 
            . . f f 6 7 7 7 7 7 7 6 6 f . . 
            . f f 6 7 f f f f f f 7 6 f f . 
            . f f f f f e e e e f f f f f . 
            . . f e f b f 4 4 f b f e f . . 
            . . f e 4 1 f d d f 1 4 e f . . 
            . . e f e 4 d d d d 4 e f . . . 
            . . e 4 d d e 8 8 8 8 f e f . . 
            . . . e d d e 8 8 8 8 f 4 e . . 
            . . . . e e f 5 5 6 6 f . . . . 
            . . . . . f f f f f f f . . . . 
            . . . . . . . . . f f f . . . . 
            `],
        200,
        true
        )
        pauseUntil(() => !(controller.player4.isPressed(ControllerButton.Down)))
    } else if (lastdir4 == 1 && !(controller.player4.isPressed(ControllerButton.Down))) {
        animation.runImageAnimation(
        Hero4,
        [img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 7 7 f f f . . . . 
            . . . f f f 7 7 7 7 f f f . . . 
            . . f f f 6 6 6 6 6 6 f f f . . 
            . . f f 6 7 7 7 7 7 7 6 6 f . . 
            . . f 6 7 f f f f f f 7 6 f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 6 6 6 6 e e f . . . 
            . . e 4 f 7 7 7 7 7 7 f 4 e . . 
            . . 4 d f 7 7 7 7 7 7 f d 4 . . 
            . . 4 4 f 6 6 5 5 6 6 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `],
        200,
        true
        )
    }
    if (lastdir4 == 2 && controller.player4.isPressed(ControllerButton.Left)) {
        animation.runImageAnimation(
        Hero4,
        [img`
            . . . . f f f f f f . . . . . . 
            . . . f 7 f e e e e f f . . . . 
            . . f 7 7 7 f e e e e f f . . . 
            . . f 6 6 6 6 f f e e e f . . . 
            . f 7 7 7 7 7 7 7 f f f f . . . 
            . f 7 7 f f f f 6 6 6 6 f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e e f f . . . . 
            . . . f 7 7 7 e d d 4 . . . . . 
            . . . f 7 7 7 e d d e . . . . . 
            . . . f 5 5 6 f e e f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 7 f e e e e f f . . . . 
            . . f 7 7 7 f e e e e f f . . . 
            . . f 6 6 6 6 f f e e e f . . . 
            . f 7 7 7 7 7 7 7 f f f f . . . 
            . f 7 7 f f f f 6 6 6 6 f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d e e e e e f . . . 
            . . . f e 4 e d d 4 f . . . . . 
            . . . f 7 7 e d d e f . . . . . 
            . . f f 5 5 f e e f f f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `,img`
            . . . . f f f f f f . . . . . . 
            . . . f 7 f e e e e f f . . . . 
            . . f 7 7 7 f e e e e f f . . . 
            . . f 6 6 6 6 f f e e e f . . . 
            . f 7 7 7 7 7 7 7 f f f f . . . 
            . f 7 7 f f f f 7 7 7 7 f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e e f f . . . . 
            . . . f 7 7 7 e d d 4 . . . . . 
            . . . f 7 7 7 e d d e . . . . . 
            . . . f 5 5 6 f e e f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 7 f e e e e f f . . . . 
            . . f 7 7 7 f e e e e f f . . . 
            . . f 6 6 6 6 f f e e e f . . . 
            . f 7 7 7 7 7 7 7 f f f f . . . 
            . f 7 7 f f f f 6 6 6 6 f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e d d 4 . . . . 
            . . . f 7 7 7 7 e d d e . . . . 
            . . f f 5 5 4 4 f e e f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `],
        200,
        true
        )
        pauseUntil(() => !(controller.player4.isPressed(ControllerButton.Left)))
    } else if (lastdir4 == 2 && !(controller.player4.isPressed(ControllerButton.Left))) {
        animation.runImageAnimation(
        Hero4,
        [img`
            . . . . f f f f f f . . . . . . 
            . . . f 7 f e e e e f f . . . . 
            . . f 7 7 7 f e e e e f f . . . 
            . . f 6 6 6 6 f f e e e f . . . 
            . f 7 7 7 7 7 7 7 f f f f . . . 
            . f 7 7 f f f f 6 6 6 6 f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e e f f . . . . 
            . . . f 7 7 7 e d d 4 . . . . . 
            . . . f 7 7 7 e d d e . . . . . 
            . . . f 5 5 6 f e e f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `],
        200,
        false
        )
    }
    if (lastdir4 == 3 && controller.player4.isPressed(ControllerButton.Right)) {
        animation.runImageAnimation(
        Hero4,
        [img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 7 f . . . 
            . . . f f e e e e f 7 7 7 f . . 
            . . . f e e e f f 6 6 6 6 f . . 
            . . . f f f f 7 7 7 7 7 7 7 f . 
            . . . f 6 6 6 6 f f f f 7 7 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . f f e e 4 4 4 e f . . . 
            . . . . . 4 d d e 7 7 7 f . . . 
            . . . . . e d d e 7 7 7 f . . . 
            . . . . . f e e f 6 5 5 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 7 f . . . 
            . . . f f e e e e f 7 7 7 f . . 
            . . . f e e e f f 6 6 6 6 f . . 
            . . . f f f f 7 7 7 7 7 7 7 f . 
            . . . f 6 6 6 6 f f f f 7 7 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e e e d d d f . . . 
            . . . . . f 4 d d e 4 e f . . . 
            . . . . . f e d d e 7 7 f . . . 
            . . . . f f f e e f 5 5 f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . f f . . . f f f . . . 
            `,img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 7 f . . . 
            . . . f f e e e e f 7 7 7 f . . 
            . . . f e e e f f 6 6 6 6 f . . 
            . . . f f f f 7 7 7 7 7 7 7 f . 
            . . . f 6 6 6 6 f f f f 7 7 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . f f e e 4 4 4 e f . . . 
            . . . . . 4 d d e 7 7 7 f . . . 
            . . . . . e d d e 7 7 7 f . . . 
            . . . . . f e e f 6 5 5 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 7 f . . . 
            . . . f f e e e e f 7 7 7 f . . 
            . . . f e e e f f 6 6 6 6 f . . 
            . . . f f f f 7 7 7 7 7 7 7 f . 
            . . . f 6 6 6 6 f f f f 7 7 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . 4 d d e 4 4 4 e f . . . 
            . . . . e d d e 7 7 7 7 f . . . 
            . . . . f e e f 4 4 5 5 f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . f f . . . f f f . . . 
            `],
        200,
        true
        )
        pauseUntil(() => !(controller.player4.isPressed(ControllerButton.Right)))
    } else if (lastdir4 == 3 && !(controller.player4.isPressed(ControllerButton.Right))) {
        animation.runImageAnimation(
        Hero4,
        [img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 7 f . . . 
            . . . f f e e e e f 7 7 7 f . . 
            . . . f e e e f f 6 6 6 6 f . . 
            . . . f f f f 7 7 7 7 7 7 7 f . 
            . . . f 6 6 6 6 f f f f 7 7 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . f f e e 4 4 4 e f . . . 
            . . . . . 4 d d e 7 7 7 f . . . 
            . . . . . e d d e 7 7 7 f . . . 
            . . . . . f e e f 6 5 5 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `],
        200,
        false
        )
    }
}
let Statdmgcntr = 0
let witchspell: Dart = null
let statspeed = 0
let Statspeedcntr = 0
let p2 = 0
let rschkloc: tiles.Location = null
let Compfolwloc: Sprite = null
let spiritp3: Sprite = null
let witch: Sprite = null
let witchspwnd = 0
let wizard: Sprite = null
let supfastghoul: Sprite = null
let supstrongghoul: Sprite = null
let SPstartbutton: Sprite = null
let p3 = 0
let location: tiles.Location = null
let Swrdswing4: Sprite = null
let Swrdswing3: Sprite = null
let Swrdswing2: Sprite = null
let Hero4: Sprite = null
let Hero3: Sprite = null
let Hero2: Sprite = null
let Cursor: Sprite = null
let MPbutton: Sprite = null
let Tutorialbutton: Sprite = null
let Loadbutton: Sprite = null
let Startbutton: Sprite = null
let Menuselect = 0
let Titletxtsprite: Sprite = null
let flashlight: lightsource.FlashlightLightSource = null
let HeroEXP: StatusBarSprite = null
let HeroMPHP4: StatusBarSprite = null
let Hitbox3: Sprite = null
let HeroMPHP3: StatusBarSprite = null
let Hitbox2: Sprite = null
let HeroMPHP2: StatusBarSprite = null
let Hitbox: Sprite = null
let HeroMPHP: StatusBarSprite = null
let p4 = 0
let Hitbox4: Sprite = null
let MPmap = 0
let spiritp4: Sprite = null
let lastdir4 = 0
let ghoul: Sprite = null
let Credits = 0
let strongghoul: Sprite = null
let fastghoul: Sprite = null
let NatdefpntMax = 0
let SwingpntMax = 0
let pnt2speed = 0
let SpeedpntMax = 0
let HPpntMax = 0
let skillpnts = 0
let UpgradeMenu: miniMenu.MenuSprite = null
let inventory: Inventory.Inventory = null
let item: Inventory.Item = null
let invintoryopen = false
let Mapname = ""
let Area = 0
let spwnpoint = 0
let Map = 0
let Swingpnts = 0
let Speed = 0
let Speedpnts = 0
let Natdefpnt = 0
let HPpnts = 0
let level = 0
let exp2lvl = 0
let exp = 0
let Menu: miniMenu.MenuSprite = null
let Paused = false
let SwingSpeed = 0
let Swrdswing: Sprite = null
let Booksort = 0
let donetutorial = 0
let Sortbook = 0
let Paul = ""
let name2 = ""
let Name = ""
let lastdir2 = 0
let Shield = 0
let Statuseffect: string[] = []
let Natdefence = 0
let Defense = 0
let HeroHP: StatusBarSprite = null
let Sword = 0
let NPCguardv2castleb: Sprite = null
let NPCguardv2castle: Sprite = null
let NPCgenvillv2b: Sprite = null
let NPCgenvillv2: Sprite = null
let NPCguardv2gated: Sprite = null
let NPCguardv2gatec: Sprite = null
let NPCguardv2gateb: Sprite = null
let NPCguardv2gate: Sprite = null
let NPCguardv2: Sprite = null
let NPCqdpxvill: Sprite = null
let NPCguardv1: Sprite = null
let NPCgrandpa: Sprite = null
let NPCstacy: Sprite = null
let NPCmarco: Sprite = null
let locationy: tiles.Location = null
let locationx: tiles.Location = null
let spirit: Sprite = null
let MP = 0
let lastdir3 = 0
let Hero: Sprite = null
let lastdir = 0
let inMenu = 0
let p2SP = 0
p2SP = 0
inMenu = 1
setMenu()
forever(function () {
    if (Statuseffect[0] != "") {
        pause(500)
        if (randint(1, 6) == 1) {
            Statuseffect.removeAt(0)
        }
    }
})
forever(function () {
    if (inMenu == 0) {
        Walk()
    }
})
forever(function () {
    if (inMenu == 0) {
        StacysQuest()
    }
})
forever(function () {
    if (inMenu == 0) {
        if (controller.A.isPressed()) {
            if (Map == 1) {
                if (Hitbox.tileKindAt(TileDirection.Center, sprites.dungeon.collectibleInsignia)) {
                    if (rschkloc.column == 55 && rschkloc.row == 4) {
                        spwnpoint = 1
                        game.splash("You will now", "Respawn here")
                        pause(100)
                    } else if (rschkloc.column == -1 && rschkloc.row == -1) {
                        spwnpoint = 0
                    }
                }
                if (Hitbox.tileKindAt(TileDirection.Center, assets.tile`myTile0`)) {
                    NPCspeech(NPCmarco)
                }
                if (Hitbox.tileKindAt(TileDirection.Center, assets.tile`myTile1`)) {
                    NPCspeech(NPCgrandpa)
                }
                if (Hitbox.tileKindAt(TileDirection.Center, assets.tile`myTile2`)) {
                    NPCspeech(NPCstacy)
                }
                if (Hitbox.tileKindAt(TileDirection.Right, assets.tile`myTile`)) {
                    Sortbook = 0
                    Booksort = 1
                }
                if (Hitbox.tileKindAt(TileDirection.Center, assets.tile`myTile3`)) {
                    NPCspeech(NPCguardv1)
                }
                if (Hitbox.tileKindAt(TileDirection.Center, assets.tile`myTile8`)) {
                    NPCspeech(NPCguardv2)
                }
                if (Hitbox.tileKindAt(TileDirection.Center, sprites.builtin.forestTiles10)) {
                    NPCspeech(NPCqdpxvill)
                }
                if (Hitbox.tileKindAt(TileDirection.Center, assets.tile`myTile12`)) {
                    NPCspeech(NPCguardv2gate)
                }
                if (Hitbox.tileKindAt(TileDirection.Center, assets.tile`myTile13`)) {
                    NPCspeech(NPCguardv2castle)
                }
                if (Hitbox.tileKindAt(TileDirection.Center, sprites.dungeon.stairLarge)) {
                    Mapswitch("ovworld", "cave", 1)
                }
            } else {
            	
            }
        }
    } else {
        pauseUntil(() => inMenu == 0)
        pause(100)
    }
})
forever(function () {
    if (controller.A.isPressed() && inMenu == 1 && !(Paused)) {
        if (Cursor.overlapsWith(Startbutton)) {
            story.printCharacterText("Would you like to start your Journey")
            story.showPlayerChoices("Yes", "No")
            if (story.checkLastAnswer("Yes")) {
                color.startFade(color.originalPalette, color.Black, 1000)
                pause(1000)
                color.startFade(color.Black, color.originalPalette, 500)
                scene.setBackgroundImage(img`
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    `)
                inMenu = 0
                Setplayer()
                Setmap()
                SpawnNPCs(1, "ovworld")
                sprites.destroyAllSpritesOfKind(SpriteKind.Title)
                if (p3 == 1) {
                    sprites.destroy(spiritp3)
                }
                if (p4 == 1) {
                    sprites.destroy(spiritp4)
                }
            } else {
                sprites.destroyAllSpritesOfKind(SpriteKind.Title)
                setMenu()
            }
        } else if (Cursor.overlapsWith(Loadbutton)) {
            story.printCharacterText("What Save Would you like to load?")
            story.showPlayerChoices("Save 1", "Save 2", "Save 3", "Cancel")
            if (story.checkLastAnswer("Save 1")) {
                SaveLoad(false, 1)
            } else if (story.checkLastAnswer("Save 2")) {
                Setplayer()
                HeroHP.max = blockSettings.readNumberArray("Save 2")[1]
                exp = blockSettings.readNumberArray("Save 2")[2]
                exp2lvl = blockSettings.readNumberArray("Save 2")[3]
                level = blockSettings.readNumberArray("Save 2")[4]
                Sword = blockSettings.readNumberArray("Save 2")[5]
                Shield = blockSettings.readNumberArray("Save 2")[6]
                Natdefence = blockSettings.readNumberArray("Save 2")[7]
                HPpnts = blockSettings.readNumberArray("Save 2")[8]
                Natdefpnt = blockSettings.readNumberArray("Save 2")[8]
                Speedpnts = blockSettings.readNumberArray("Save 2")[9]
                pnt2speed = blockSettings.readNumberArray("Save 2")[10]
                Swingpnts = blockSettings.readNumberArray("Save 2")[11]
                Map = blockSettings.readNumberArray("Save 2")[12]
                spwnpoint = blockSettings.readNumberArray("Save 2")[13]
                Speed = blockSettings.readNumberArray("Save 2")[14]
                Area = blockSettings.readNumberArray("Save 2")[15]
                Name = blockSettings.readString("Save 2 Name")
                name2 = blockSettings.readString("Save 2 Name2")
                Mapname = blockSettings.readString("Save 2 MapName")
                Mapswitch("Save", Mapname, 1)
                SpawnNPCs(Area, Mapname)
                Respawn()
                info.setLife(3)
            } else if (story.checkLastAnswer("Save 3")) {
                Setplayer()
                HeroHP.max = blockSettings.readNumberArray("Save 3")[1]
                exp = blockSettings.readNumberArray("Save 3")[2]
                exp2lvl = blockSettings.readNumberArray("Save 3")[3]
                level = blockSettings.readNumberArray("Save 3")[4]
                Sword = blockSettings.readNumberArray("Save 3")[5]
                Shield = blockSettings.readNumberArray("Save 3")[6]
                Natdefence = blockSettings.readNumberArray("Save 3")[7]
                HPpnts = blockSettings.readNumberArray("Save 3")[8]
                Natdefpnt = blockSettings.readNumberArray("Save 3")[8]
                Speedpnts = blockSettings.readNumberArray("Save 3")[9]
                Swingpnts = blockSettings.readNumberArray("Save 3")[10]
                Map = blockSettings.readNumberArray("Save 3")[11]
                spwnpoint = blockSettings.readNumberArray("Save 3")[12]
                Speed = blockSettings.readNumberArray("Save 3")[13]
                Area = blockSettings.readNumberArray("Save 3")[14]
                Name = blockSettings.readString("Save 3 Name")
                name2 = blockSettings.readString("Save 3 Name2")
                Mapname = blockSettings.readString("Save 3 MapName")
                Mapswitch("Save", Mapname, 1)
                SpawnNPCs(Area, Mapname)
                Respawn()
                info.setLife(3)
            } else {
                sprites.destroyAllSpritesOfKind(SpriteKind.Title)
                setMenu()
            }
            sprites.destroyAllSpritesOfKind(SpriteKind.Title)
        } else if (Cursor.overlapsWith(Tutorialbutton)) {
            story.printCharacterText("Do you want the Tutorial?")
            story.showPlayerChoices("Yes", "No")
            if (story.checkLastAnswer("Yes")) {
                story.printCharacterText("Up, down, left and right for movement")
                if (p2SP == 1) {
                    story.printCharacterText("P1: A to Interact B to attack")
                    story.printCharacterText("P2: A to Heal P1 B to Break cracked walls")
                } else {
                    story.printCharacterText("A to Interact B to attack")
                }
                game.splash("Tutorial", "Finished")
                story.printCharacterText("Would you like to start your Journey")
                story.showPlayerChoices("Yes", "No, go back")
                if (story.checkLastAnswer("Yes")) {
                    color.startFade(color.originalPalette, color.Black, 1000)
                    pause(1000)
                    color.startFade(color.Black, color.originalPalette, 500)
                    scene.setBackgroundImage(img`
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        `)
                    inMenu = 0
                    Setplayer()
                    Setmap()
                    SpawnNPCs(1, "ovworld")
                    sprites.destroyAllSpritesOfKind(SpriteKind.Title)
                    if (p3 == 1) {
                        sprites.destroy(spiritp3)
                    }
                    if (p4 == 1) {
                        sprites.destroy(spiritp4)
                    }
                } else {
                    sprites.destroyAllSpritesOfKind(SpriteKind.Title)
                    setMenu()
                }
            } else {
                sprites.destroyAllSpritesOfKind(SpriteKind.Title)
                setMenu()
            }
        } else if (Cursor.overlapsWith(MPbutton)) {
            story.printCharacterText("Would You like to start a Multiplayer game?")
            story.showPlayerChoices("Yes", "Go back")
            if (story.checkLastAnswer("Yes")) {
                story.showPlayerChoices("Arena(PVP)", "Horde Mode(PVE)", "Go back")
                if (story.checkLastAnswer("Arena(PVP)")) {
                    color.startFade(color.originalPalette, color.Black, 1000)
                    pause(1000)
                    color.startFade(color.Black, color.originalPalette, 500)
                    scene.setBackgroundImage(img`
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        `)
                    inMenu = 0
                    p2SP = 0
                    MP = 1
                    setMpPlayers(1)
                    setMpPlayers(2)
                    setMPhpbars(1)
                    setMPhpbars(2)
                    sprites.destroy(spirit)
                    p2 = 1
                    if (p3 == 1) {
                        sprites.destroy(spiritp3)
                        setMpPlayers(3)
                        setMPhpbars(3)
                        p3 = 1
                    }
                    if (p4 == 1) {
                        sprites.destroy(spiritp4)
                        setMpPlayers(4)
                        setMPhpbars(4)
                        p4 = 1
                    }
                    sprites.destroyAllSpritesOfKind(SpriteKind.Title)
                    setMPMap(false, randint(1, 2))
                } else if (story.checkLastAnswer("Horde Mode(PVE)")) {
                    color.startFade(color.originalPalette, color.Black, 1000)
                    pause(1000)
                    color.startFade(color.Black, color.originalPalette, 500)
                    scene.setBackgroundImage(img`
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        ................................................................................................................................................................
                        `)
                    inMenu = 0
                    p2SP = 0
                    p2 = 1
                    MP = 1
                    setMpPlayers(1)
                    setMpPlayers(2)
                    sprites.destroy(spirit)
                    if (p3 == 1) {
                        sprites.destroy(spiritp3)
                        setMpPlayers(3)
                    }
                    if (p4 == 1) {
                        sprites.destroy(spiritp4)
                        setMpPlayers(4)
                    }
                    sprites.destroyAllSpritesOfKind(SpriteKind.Title)
                } else {
                    sprites.destroyAllSpritesOfKind(SpriteKind.Title)
                    setMenu()
                }
                setMPMap(true, 1)
            } else {
                sprites.destroyAllSpritesOfKind(SpriteKind.Title)
                setMenu()
            }
        } else if (Cursor.overlapsWith(SPstartbutton)) {
            if (game.ask("Would you like to", "Start your Journey Alone?")) {
                color.startFade(color.originalPalette, color.Black, 1000)
                pause(1000)
                color.startFade(color.Black, color.originalPalette, 500)
                scene.setBackgroundImage(img`
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    `)
                inMenu = 0
                p2SP = 0
                sprites.destroy(spirit)
                Setplayer()
                Setmap()
                SpawnNPCs(1, "ovworld")
                sprites.destroyAllSpritesOfKind(SpriteKind.Title)
                if (p3 == 1) {
                    sprites.destroy(spiritp3)
                }
                if (p4 == 1) {
                    sprites.destroy(spiritp4)
                }
            } else {
                sprites.destroyAllSpritesOfKind(SpriteKind.Title)
                setMenu()
            }
        }
    }
})
forever(function () {
    Statspeedcntr = 0
    for (let index = 0; index < Statuseffect.length; index++) {
        if (Statuseffect[Statspeedcntr] == "Burn") {
            statspeed = Speed * -0.25
        }
        if (Statuseffect[Statspeedcntr] == "Slow") {
            statspeed = Speed / 1.5
        }
        if (Statuseffect[Statspeedcntr] == "Bleed") {
            statspeed = Speed / 1.5
        }
        if (Statuseffect[Statspeedcntr] == "Cold") {
            statspeed = Speed / 2.2
        }
        if (Statuseffect[Statspeedcntr] == "") {
            statspeed = 0
        }
        Statspeedcntr += 1
    }
})
forever(function () {
    if (donetutorial == 1) {
        for (let index = 0; index < 4; index++) {
            Setmonsters(1, 8, false, 31, 31, 70, 42, true)
            Setmonsters(2, 5, false, 31, 31, 70, 42, true)
            Setmonsters(1, 2, true, 31, 31, 70, 42, true)
            pause(20000)
        }
        donetutorial = 0
    }
})
game.onUpdateInterval(randint(1000, 2500), function () {
    if (witchspwnd == 1) {
        witchspell = darts.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . 2 2 2 2 . . . 
            . . . . . . . 2 2 4 1 3 4 2 . . 
            . . . . 2 2 3 3 4 1 1 3 4 4 2 . 
            . . 3 3 3 3 4 4 1 1 1 3 4 4 2 . 
            . . 1 1 1 1 1 1 1 1 1 3 4 4 2 . 
            . . 3 3 2 2 3 4 4 1 1 3 4 4 2 . 
            . . . . . . 2 2 3 4 1 3 4 2 . . 
            . . . . . . . . . 2 2 2 2 . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.witchproj, witch.x, witch.y)
        witchspell.setTrace(true)
        witchspell.iter = 1
        witchspell.traceColor = 1
        witchspell.angle = spriteutils.angleFrom(witch, Hitbox)
        witchspell.setBounceOnWall(true)
        witchspell.throwDart()
        witchspell.gravity = 0
    }
})
forever(function () {
    if (inMenu == 0 && MP == 1 && p3 == 1) {
        WalkMP3()
    }
})
forever(function () {
    if (inMenu == 0 && MP == 1 && p4 == 1) {
        WalkMP4()
    }
})
forever(function () {
    if (inMenu == 0 && MP == 0) {
        if (lastdir == 0) {
            Compfolwloc.setPosition(Hitbox.x, Hitbox.y + 20)
        } else if (lastdir == 1) {
            Compfolwloc.setPosition(Hitbox.x, Hitbox.y - 20)
        } else if (lastdir == 2) {
            Compfolwloc.setPosition(Hitbox.x + 15, Hitbox.y)
        } else {
            Compfolwloc.setPosition(Hitbox.x - 15, Hitbox.y)
        }
    }
})
forever(function () {
    if (inMenu == 0 && MP == 0) {
        if (level < 40) {
            if (exp > exp2lvl - 1) {
                skillpnts += 1 * Math.ceil(level / 3) * Map
                level += 1
                exp2lvl = level * 25
                exp = 0
            }
        } else {
            exp = 0
            exp2lvl = -1
        }
    }
})
forever(function () {
    if (inMenu == 0 && MP == 0) {
        rschkloc = Hitbox.tilemapLocation()
        if (HeroHP.value > HeroHP.max / 2) {
            HeroHP.setLabel("HP:" + HeroHP.value + "/" + HeroHP.max, 9)
        } else {
            HeroHP.setLabel("HP:" + HeroHP.value + "/" + HeroHP.max, 2)
        }
        HeroEXP.value = exp
        HeroEXP.max = exp2lvl
        if (level < 40) {
            HeroEXP.setLabel("XP:" + HeroEXP.value + "/" + HeroEXP.max + "lvl:" + level, 8)
        } else {
            HeroEXP.setLabel("XP:" + HeroEXP.value + "/" + HeroEXP.max + "lvl:" + "MAX", 9)
        }
        console.logValue("HP", HeroHP.value)
        console.logValue("MHP", HeroHP.max)
        console.logValue("EXP", HeroEXP.value)
        console.logValue("EXP2lv", HeroEXP.max)
        console.logValue("lvl", level)
    } else {
        pauseUntil(() => inMenu == 0)
        pause(1000)
    }
})
forever(function () {
    if (inMenu == 0 && MP == 1) {
        WalkMP2()
    }
})
forever(function () {
    if (inMenu == 0 && MP == 0) {
        if (controller.A.isPressed()) {
            locationx = Hero.tilemapLocation()
            locationy = Hero.tilemapLocation()
            if (Hero.tileKindAt(TileDirection.Top, sprites.builtin.forestTiles0)) {
                tiles.setTileAt(tiles.getTileLocation(locationy.column, locationx.row - 1), sprites.castle.tileGrass3)
                tiles.setWallAt(tiles.getTileLocation(locationy.column, locationx.row - 1), false)
                music.play(music.melodyPlayable(music.jumpUp), music.PlaybackMode.UntilDone)
            } else if (Hero.tileKindAt(TileDirection.Bottom, sprites.builtin.forestTiles0)) {
                tiles.setTileAt(tiles.getTileLocation(locationy.column, locationx.row + 1), sprites.castle.tileGrass3)
                tiles.setWallAt(tiles.getTileLocation(locationy.column, locationx.row + 1), false)
                music.play(music.melodyPlayable(music.jumpUp), music.PlaybackMode.UntilDone)
            } else if (Hero.tileKindAt(TileDirection.Left, sprites.builtin.forestTiles0)) {
                tiles.setTileAt(tiles.getTileLocation(locationx.column - 1, locationy.row), sprites.castle.tileGrass3)
                tiles.setWallAt(tiles.getTileLocation(locationx.column - 1, locationy.row), false)
                music.play(music.melodyPlayable(music.jumpUp), music.PlaybackMode.UntilDone)
            } else if (Hero.tileKindAt(TileDirection.Right, sprites.builtin.forestTiles0)) {
                tiles.setTileAt(tiles.getTileLocation(locationx.column + 1, locationy.row), sprites.castle.tileGrass3)
                tiles.setWallAt(tiles.getTileLocation(locationx.column + 1, locationy.row), false)
                music.play(music.melodyPlayable(music.jumpUp), music.PlaybackMode.UntilDone)
            }
        }
    } else {
        pauseUntil(() => !(controller.A.isPressed()))
    }
})
forever(function () {
    Statdmgcntr = 0
    for (let index = 0; index < Statuseffect.length; index++) {
        if (Statuseffect[Statdmgcntr] == "Burn") {
            HeroHP.value += -1
            pause(250)
        }
        if (Statuseffect[Statdmgcntr] == "Cold") {
            HeroHP.value += -1
            pause(800)
        }
        if (Statuseffect[Statdmgcntr] == "Bleed") {
            HeroHP.value += -2
            pause(500)
            Statdmgcntr += 1
        }
    }
})
forever(function () {
    if (!(Paused)) {
        if (inMenu == 0) {
            controller.moveSprite(Hitbox, (Speed - statspeed) * pnt2speed, (Speed - statspeed) * pnt2speed)
            Hero.setPosition(Hitbox.x, Hitbox.y)
        }
        if (p2 == 1 && MP == 1 && inMenu == 0) {
            controller.player2.moveSprite(Hitbox2, Speed - statspeed, Speed - statspeed)
            Hero2.setPosition(Hitbox2.x, Hitbox2.y)
        }
        if (p3 == 1 && MP == 1 && inMenu == 0) {
            controller.player3.moveSprite(Hitbox3, Speed - statspeed, Speed - statspeed)
            Hero3.setPosition(Hitbox3.x, Hitbox3.y)
        }
        if (p4 == 1 && MP == 1 && inMenu == 0) {
            controller.player4.moveSprite(Hitbox4, Speed - statspeed, Speed - statspeed)
            Hero4.setPosition(Hitbox4.x, Hitbox4.y)
        }
        if (!(Paused) && inMenu == 1) {
            controller.moveSprite(Cursor, 40, 40)
        }
    }
})
