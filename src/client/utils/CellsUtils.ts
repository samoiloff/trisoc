import {GameConstants} from "../constants/GameConstants";
import {Field} from "../field/Field";
import {Cell} from "../cell/Cell";
import {FieldView} from "../field/view/FieldView";

export class CellsUtils {

    public static generateRandomField(fieldView: FieldView, callback?: (cell: Cell) => void): void {
        let cell: Cell;
        let color: number;

        fieldView.cells = [];
        for (let y: number = 0; y < GameConstants.field.height; y++) {
            fieldView.cells[y] = []
            for (let x: number = 0; x < GameConstants.field.width; x++) {
                cell = new Cell();
                const colorIndex: number = Math.floor( Math.random() * GameConstants.cells.fillColors.length);
                color = GameConstants.cells.fillColors[colorIndex];
                cell.data = {
                    coordX: x,
                    coordY: y,
                    direction: (x + y) % 2,
                    color
                };
                cell.draw();
                fieldView.cells[y][x] = cell;
                fieldView.cellsContainer.addChild(cell);
                if (callback) {
                    callback(cell);
                }
            }
        }
    }

}
