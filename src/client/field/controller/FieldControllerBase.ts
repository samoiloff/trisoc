import {ControllerBase} from "../../../common/mvc/ControllerBase";
import {FieldView} from "../view/FieldView";
import {FieldModel} from "../model/FieldModel";

export abstract class FieldControllerBase extends ControllerBase {

    protected view: FieldView;
    protected model: FieldModel;

    constructor(model: FieldModel, view: FieldView) {
        super(model, view);
    }

}
