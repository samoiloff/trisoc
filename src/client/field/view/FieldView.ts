import {ViewBase} from "../../../common/mvc/ViewBase";
import {FieldModel} from "../model/FieldModel";
import {Cell} from "../../cell/Cell";
import {Sprite} from "pixi.js";

export class FieldView extends ViewBase {

    public container: Sprite;
    public cellsContainer: Sprite;

    public cells: Cell[][];

    constructor(model: FieldModel) {
        super(model);

        this.container = new Sprite();
        this.cellsContainer = new Sprite();
        this.container.addChild(this.cellsContainer);
    }

}
