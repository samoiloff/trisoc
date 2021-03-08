import {ControllersBase} from "../../../common/mvc/ControllersBase";
import {GameModel} from "../model/GameModel";
import {GameView} from "../view/GameView";
import {GameTestController} from "./GameTestController";
import {GameInitController} from "./GameInitController";
import {GameFieldController} from "./GameFieldController";

export class GameController extends ControllersBase {

    constructor(model: GameModel, view: GameView) {
        super(model, view);
    }

    initialize() {
        super.initialize();
        this.addController(GameTestController);
        this.addController(GameInitController);
        this.addController(GameFieldController);
    }
}
