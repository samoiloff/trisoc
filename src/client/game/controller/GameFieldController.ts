import {GameControllerBase} from "./GameControllerBase";
import {Field} from "../../field/Field";
import {Sprite} from "pixi.js";
import {GameEvent} from "../events/GameEvent";

export class GameFieldController extends GameControllerBase {

    initialize() {
        this.model.addListener(GameEvent.GAME_INIT_COMPLETE, this.onGameInitComplete, this);
    }

    private onGameInitComplete() {
        this.view.field = new Field();
        const fieldContainer: Sprite = this.view.field.getContainer();
        fieldContainer.x = fieldContainer.y = 100;
        this.view.app.stage.addChild(fieldContainer);
        this.view.field.startLevel();
    }
}
