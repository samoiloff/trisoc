import {ModelBase} from "./ModelBase";
import {DebugUtils} from "../../client/utils/DebugUtils";

export abstract class ViewBase {

    constructor(protected model: ModelBase) {
        DebugUtils.mapObjectToGlobalId(this, this.constructor["name"], "v");
    }

    destroy(): void {
        this.model = null;
    }

}
