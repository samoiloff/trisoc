import {EventDispatcher} from "./EventDispatcher";

export abstract class ModelBase extends EventDispatcher {

    destroy(): void {
        super.removeAllListeners();
    }
}
