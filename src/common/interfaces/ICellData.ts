import {CellDirection} from "../definitions/CellDirection";
import {IPoint} from "./IPoint";
import {CellColor} from "../definitions/CellColor";

export interface ICellData extends IPoint {
    direction: CellDirection;
    color: CellColor;
}
