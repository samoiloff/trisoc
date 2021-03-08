import {Cell} from "../../cell/Cell";
import {IPoint} from "../../../common/interfaces/IPoint";

export class DragCell {
    cell: Cell;
    startVector: IPoint;
    endVector: IPoint;

    constructor(cell:Cell, coordX: number, coordY:number) {
        this.cell = cell;
        this.startVector = {coordX, coordY};
        this.endVector = {coordX, coordY};
    }
}
