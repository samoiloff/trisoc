import {ModelBase} from "../../../common/mvc/ModelBase";
import {DragCell} from "./DragCell";
import {FieldEvent} from "../events/FieldEvent";

export class FieldModel extends ModelBase {

    private _dragCell: DragCell;

    get dragCell(): DragCell {
        return this._dragCell;
    }

    public startDrag(dragCell: DragCell): void {
        if (!this._dragCell) {
            this._dragCell = dragCell;
            this.dispatch(FieldEvent.DRAG_START);
        }
    }

    public stopDrag(): void {
        if (this._dragCell) {
            this._dragCell = null;
            this.dispatch(FieldEvent.DRAG_STOP);
        }
    }

}
