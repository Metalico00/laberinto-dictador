// Código generado automáticamente. No editar.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001010101010101010101010101010101010100020100000000010102000000010101000001000000000101000000000100000000010101000000010100000001010100000000010001000201000100010100000101000100010101010001000100000000010101000000010000010001000101000000000000000100000400030000000101010101010001010000010300000001020000020000010001000101010100010101010101010000010001010101000100000000000000000100010101010001010101010101010001000101010100000000000000000000000001010101000000010101010101010001000101010101010201020102010201010101`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 . . 2 . . . . 2 2 . . . . 2 
2 2 . . 2 . . . . 2 2 . . . . 2 
. . . . 2 2 2 . . . 2 2 . . . 2 
2 2 . . . . 2 . 2 . . 2 . 2 . 2 
2 . . 2 2 . 2 . 2 2 2 2 . 2 . 2 
. . . . 2 2 2 . . . 2 . . 2 . 2 
. 2 2 . . . . . . . 2 . . 2 . . 
. . . 2 2 2 2 2 2 . 2 2 . . 2 . 
. . . 2 . . . . . . 2 . 2 . 2 2 
2 2 . 2 2 2 2 2 2 2 . . 2 . 2 2 
2 2 . 2 . . . . . . . . 2 . 2 2 
2 2 . 2 2 2 2 2 2 2 2 . 2 . 2 2 
2 2 . . . . . . . . . . . . 2 2 
2 2 . . . 2 2 2 2 2 2 2 . 2 . 2 
2 2 2 2 . . . . . . . . . 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.darkGroundNorthWest1,myTiles.tile1,myTiles.tile2,sprites.dungeon.darkGroundCenter], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Código generado automáticamente. No editar.
