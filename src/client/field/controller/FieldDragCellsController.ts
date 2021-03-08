import {FieldControllerBase} from "./FieldControllerBase";
import {FieldEvent} from "../events/FieldEvent";
import {InteractionEvent, Sprite} from "pixi.js";
import {MouseEvents} from "../../game/events/MouseEvents";

export class FieldDragCellsController extends FieldControllerBase {

    initialize() {
        this.model.addListener(FieldEvent.DRAG_START, this.onDragStart, this);
        this.model.addListener(FieldEvent.DRAG_STOP, this.onDragEnd, this);

    }

    private onDragStart(): void {

    }

    private onDragEnd(): void {

    }

}
