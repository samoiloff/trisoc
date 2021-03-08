import {GameControllerBase} from "./GameControllerBase";
import {Field} from "../../field/Field";
import {CellsUtils} from "../../utils/CellsUtils";
import {Sprite} from "pixi.js";
import {GameEvent} from "../events/GameEvent";

export class GameInitController extends GameControllerBase {

    initialize() {
        window.onload = () => {
            document.body.appendChild(this.view.app.view);
            this.model.dispatch(GameEvent.GAME_INIT_COMPLETE);
        }
    }
}
