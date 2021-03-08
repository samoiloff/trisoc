import {CellColor} from "../../common/definitions/CellColor";

export const GameConstants = {
    cells: {
        radius: 50,
        cos30: 0.866,
        borderColor: 0x000000,
        colors: {
            [CellColor.RED]: 0xff0000,
            [CellColor.GREEN]: 0x00ff00,
            [CellColor.BLUE]: 0x0000ff,
            [CellColor.YELLOW]: 0xffff00,
            [CellColor.BIRUSE]: 0x00ffff,
            [CellColor.PINK]: 0xff00ff,
        },
        fillColors: [
            CellColor.RED,
            CellColor.GREEN,
            CellColor.BLUE,
            CellColor.YELLOW,
            CellColor.BIRUSE,
            CellColor.PINK,
        ]
    },
    field: {
        width: 8,
        height:  11
    }
};
