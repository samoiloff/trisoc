import {ModelBase} from "./ModelBase";
import {ViewBase} from "./ViewBase";
import {ControllerBase} from "./ControllerBase";
import {IControllerBase} from "./IControllerBase";
import {DebugUtils} from "../../client/utils/DebugUtils";

export abstract class ComponentBase {

    protected model: ModelBase;
    protected view: ViewBase;
    protected controllerBase: ControllerBase;

    constructor(
            modelCls: {new (): ModelBase},
            viewCls: {new (model: ModelBase): ViewBase},
            controllerCls: IControllerBase)
    {
        this.model = new modelCls();
        this.view = new viewCls(this.model);
        this.controllerBase = new controllerCls(this.model, this.view);
        DebugUtils.mapObjectToGlobalId(this, this.constructor["name"], "p");
    }

    getModel(): ModelBase {
        return this.model;
    }

}
