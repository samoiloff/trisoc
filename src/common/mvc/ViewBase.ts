import {ModelBase} from "./ModelBase";

export abstract class ViewBase {

    constructor(protected model: ModelBase) {
    }

    destroy(): void {
        this.model = null;
    }

}
