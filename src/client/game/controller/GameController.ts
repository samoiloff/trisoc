import {ControllersBase} from "../../../common/mvc/ControllersBase";
import {GameModel} from "../model/GameModel";
import {GameView} from "../view/GameView";
import {GameTestController} from "./GameTestController";

export class GameController extends ControllersBase {

    constructor(model: GameModel, view: GameView) {
        super(model, view);

        this.addController(GameTestController);
    }
}
