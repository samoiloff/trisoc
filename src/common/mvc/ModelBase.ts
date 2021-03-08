import {EventDispatcher} from "./EventDispatcher";
import {DebugUtils} from "../../client/utils/DebugUtils";

export abstract class ModelBase extends EventDispatcher {

    constructor() {
        super();
        DebugUtils.mapObjectToGlobalId(this, this.constructor["name"], "m");
    }

    destroy(): void {
        super.removeAllListeners();
    }
}
