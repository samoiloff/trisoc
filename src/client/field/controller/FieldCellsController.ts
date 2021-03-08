import {FieldControllerBase} from "./FieldControllerBase";
import {CellsUtils} from "../../utils/CellsUtils";
import {Cell} from "../../cell/Cell";
import {MouseEvents} from "../../game/events/MouseEvents";
import {FieldEvent} from "../events/FieldEvent";
import {InteractionEvent, Sprite} from "pixi.js";
import {DragCell} from "../model/DragCell";

export class FieldCellsController extends FieldControllerBase {

    private cellsContainer: Sprite;

    initialize() {
        this.cellsContainer = this.view.cellsContainer;
        this.cellsContainer.interactive = this.cellsContainer.interactiveChildren = true;

        this.model.addListener(FieldEvent.START_LEVEL, this.onStartLevel, this);
    }

    private onStartLevel(): void {
        this.model.removeListener(FieldEvent.START_LEVEL, this.onStartLevel, this);

        CellsUtils.generateRandomField(this.view, (cell) => {
            this.addCellListeners(cell);
        });

        this.model.addListener(FieldEvent.DRAG_START, this.onDragStart, this);
        this.model.addListener(FieldEvent.DRAG_STOP, this.onDragStop, this);
    }

    private addCellListeners(cell: Cell): void {
        cell.on(MouseEvents.MOUSE_DOWN, this.onCellDown, this);
        cell.on(MouseEvents.MOUSE_UP, this.onCellUp, this);
        cell.on(MouseEvents.MOUSE_UP_OUTSIDE, this.onCellUp, this);
    }

    private onCellDown(event: InteractionEvent): void {
        if (!this.model.dragCell) {
            const cell: Cell = event.target as Cell;
            this.model.startDrag(new DragCell(cell, event.data.global.x, event.data.global.y));
            console.log("GameFieldController.onCellDown() : " + event.target);
        }
    }

    private onCellUp(event: InteractionEvent): void {
        if (this.model.dragCell) {
            this.model.dragCell.endVector.coordX = event.data.global.x;
            this.model.dragCell.endVector.coordY = event.data.global.y;
            this.model.stopDrag();
            console.log("GameFieldController.onCellUp() : " + event.target);
        }
    }

    private onDragStart(): void {
        this.cellsContainer.on(MouseEvents.MOUSE_MOVE, this.onMouseMove, this);
    }

    private onDragStop(): void {
        this.cellsContainer.off(MouseEvents.MOUSE_MOVE, this.onMouseMove, this);
    }

    private onMouseMove(event: InteractionEvent): void {
        this.model.dragCell.endVector.coordX = event.data.global.x;
        this.model.dragCell.endVector.coordY = event.data.global.y;
        this.model.dispatch(MouseEvents.MOUSE_MOVE);
        console.log("FieldDragCellsController.onMouseMove()" + event.data.global.x + ":" + event.data.global.y);
    }
}
