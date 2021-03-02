import {Graphics} from "pixi.js";
export class Cell extends Graphics {

    constructor() {
        super();
        this.beginFill(0xff0000);
        this.drawRect(0, 0, 50, 50);
        this.endFill();
    }

}
