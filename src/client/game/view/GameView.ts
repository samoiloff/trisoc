import {ViewBase} from "../../../common/mvc/ViewBase";
import {GameModel} from "../model/GameModel";
import {Cell} from "./cells/Cell";
import {Application} from "pixi.js";

export class GameView extends ViewBase {

    private app: PIXI.Application;

    constructor(model: GameModel) {
        super(model);

        this.app = new Application({
            width: 500,
            height: 500,
            antialias: true,
            transparent: false,
            resolution: 1
        });

        window.onload = () => {
            document.body.appendChild(this.app.view);
            this.app.stage.addChild(new Cell());
            this.app.render();
        }
    }

}
