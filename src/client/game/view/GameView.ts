import {ViewBase} from "../../../common/mvc/ViewBase";
import {GameModel} from "../model/GameModel";
import {Cell} from "../../cell/Cell";
import {Application} from "pixi.js";
import {GameConstants} from "../../constants/GameConstants";
import {Field} from "../../field/Field";
import {CellsUtils} from "../../utils/CellsUtils";

export class GameView extends ViewBase {

    public app: PIXI.Application;

    public field: Field;

    constructor(model: GameModel) {
        super(model);

        this.app = new Application({
            width: 500,
            height: 500,
            antialias: true,
            transparent: false,
            resolution: 1
        });
    }

}
