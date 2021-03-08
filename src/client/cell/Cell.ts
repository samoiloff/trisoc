import {Graphics, Sprite, Text} from "pixi.js";
import {GameConstants} from "../constants/GameConstants";
import {ICellData} from "../../common/interfaces/ICellData";
import {IPoint} from "../../common/interfaces/IPoint";
import {CellDirection} from "../../common/definitions/CellDirection";
import {PixiConstants} from "../constants/PixiConstants";

export class Cell extends Sprite {

    data: ICellData;

    text: Text;

    triangle: Graphics;

    public draw(): void {
        if (this.data) {
            if (!this.triangle) {
                this.triangle = new Graphics()
                this.addChild(this.triangle);
            }

            const pivotPoint: IPoint = {
                coordX: GameConstants.cells.cos30 * GameConstants.cells.radius,
                coordY: GameConstants.cells.radius / 2
            };

            this.triangle.lineStyle(1, 0x000000);
            this.triangle.beginFill(GameConstants.cells.colors[this.data.color], 1);
            this.triangle.lineTo(0, GameConstants.cells.radius);
            this.triangle.lineTo(pivotPoint.coordX, pivotPoint.coordY);
            this.triangle.endFill();

            if (this.data.direction === CellDirection.LEFT) {
                this.triangle.scale.x = -1;
                this.triangle.x = pivotPoint.coordX;
            }

            if (this.data.coordX % 2) {
                this.x = (this.data.coordX) * GameConstants.cells.radius * GameConstants.cells.cos30;
            } else {
                this.x = (this.data.coordX) * GameConstants.cells.radius * GameConstants.cells.cos30;
            }
            this.y = this.data.coordY * GameConstants.cells.radius / 2;

            this.addText();

            this.interactive = true;
            this.interactiveChildren = true;
        } else {
            throw new Error("Cell data is undefined");
        }
    }

    private addText(): void {
        if (!this.text) {
            this.text = new Text('', PixiConstants.defaultTextStyle);
            this.text.interactive = this.text.interactiveChildren = false;
            this.addChild(this.text);
        }
        this.text.text = this.data.coordX + ":" + this.data.coordY;
        if (this.data.direction === CellDirection.LEFT) {
            this.text.x = GameConstants.cells.radius * GameConstants.cells.cos30 - this.text.width;
        }
        this.text.y = GameConstants.cells.radius * 0.35;
    }

}
