import {Sprite} from "pixi.js"
import {ComponentBase} from "../../common/mvc/ComponentBase";
import {FieldModel} from "./model/FieldModel";
import {FieldController} from "./controller/FieldController";
import {FieldView} from "./view/FieldView";
import {FieldEvent} from "./events/FieldEvent";

export class Field extends ComponentBase {

    protected model: FieldModel;
    protected view: FieldView;

    constructor() {
        super(FieldModel, FieldView, FieldController);
    }

    public getContainer(): Sprite {
        return  this.view.container;
    }

    public getModel(): FieldModel {
        return this.model;
    }

    public getView(): FieldView {
        return this.view;
    }

    public startLevel(): void {
        this.model.dispatch(FieldEvent.START_LEVEL);
    }

}
