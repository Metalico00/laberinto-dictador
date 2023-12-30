@namespace
class SpriteKind:
    Items = SpriteKind.create()
    portails = SpriteKind.create()

def on_on_overlap(sprite, otherSprite):
    info.change_score_by(100)
    sprites.destroy(otherSprite, effects.hearts, 500)
sprites.on_overlap(SpriteKind.player, SpriteKind.Items, on_on_overlap)

def on_down_pressed():
    Dic_taDor.set_image(img("""
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
    """))
controller.down.on_event(ControllerButtonEvent.PRESSED, on_down_pressed)

def on_right_pressed():
    Dic_taDor.set_image(img("""
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
    """))
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def on_left_pressed():
    Dic_taDor.set_image(img("""
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
    """))
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def on_on_overlap2(sprite2, otherSprite2):
    game.game_over(True)
    game.set_game_over_effect(True, effects.confetti)
sprites.on_overlap(SpriteKind.player, SpriteKind.portails, on_on_overlap2)

def on_up_pressed():
    Dic_taDor.set_image(img("""
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
    """))
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

Next_Level: Sprite = None
Dic_taDor: Sprite = None
info.set_score(0)
Dic_taDor = sprites.create(img("""
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
    """),
    SpriteKind.player)
tiles.set_current_tilemap(tilemap("""
    level1
"""))
Dic_taDor.set_position(12, 57)
controller.move_sprite(Dic_taDor)
scene.camera_follow_sprite(Dic_taDor)
for value in tiles.get_tiles_by_type(assets.tile("""
    myTile
""")):
    Next_Level = sprites.create(img("""
            . . b b b . . . 
                    . b 5 5 5 b . . 
                    b 5 d 3 d 5 b . 
                    b 5 3 5 1 5 b . 
                    c 5 3 5 1 d c . 
                    c 5 d 1 d d c . 
                    . f d d d f . . 
                    . . f f f . . .
        """),
        SpriteKind.Items)
    tiles.place_on_tile(Next_Level, value)
    tiles.set_tile_at(value, assets.tile("""
        transparency16
    """))
for value2 in tiles.get_tiles_by_type(assets.tile("""
    myTile0
""")):
    Next_Level = sprites.create(img("""
            . . 1 1 1 . . . 
                    . 1 a a a 1 . . 
                    1 a f 8 f a 1 . 
                    1 a 8 a 1 a 1 . 
                    c a 8 a 1 f c . 
                    c a f 1 f f c . 
                    . 9 f f f 9 . . 
                    . . 9 9 9 . . .
        """),
        SpriteKind.portails)
    tiles.place_on_tile(Next_Level, value2)
    tiles.set_tile_at(value2, assets.tile("""
        transparency16
    """))

def on_forever():
    music.play(music.create_song(hex("""
            00b4000408020301001c000f05001202c102c2010004050028000000640028000314000602000430000c001000011b14001800011918001c00012a1c002000012024002800011e2c003000012234003800012238003c00011b02001c000c960064006d019001000478002c010000640032000000000a0600051e000000040001240c001000011e14001800011b18001c0001241c002000011905001c000f0a006400f4010a000004000000000000000000000000000000000236000000040001270c001000012214001800011e18001c0001271c002000011d2400280001222c003000012534003800012538003c00011e
        """)),
        music.PlaybackMode.UNTIL_DONE)
forever(on_forever)
