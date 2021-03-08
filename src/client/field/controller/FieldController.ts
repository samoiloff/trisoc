import {ControllersBase} from "../../../common/mvc/ControllersBase";
import {FieldModel} from "../model/FieldModel";
import {FieldView} from "../view/FieldView";
import {FieldCellsController} from "./FieldCellsController";
import {FieldDragCellsController} from "./FieldDragCellsController";

export class FieldController extends ControllersBase {

    protected model: FieldModel;
    protected view: FieldView;

    constructor(model: FieldModel, view: FieldView) {
        super(model, view);
    }

    initialize() {
        super.initialize();
        this.addController(FieldCellsController);
        this.addController(FieldDragCellsController);
    }
}
