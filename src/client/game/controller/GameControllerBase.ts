import {ControllerBase} from "../../../common/mvc/ControllerBase";
import {GameModel} from "../model/GameModel";
import {GameView} from "../view/GameView";

export abstract class GameControllerBase extends ControllerBase {

    protected model: GameModel;
    protected view: GameView;

    constructor(model: GameModel, view: GameView) {
        super(model, view);
    }

}
