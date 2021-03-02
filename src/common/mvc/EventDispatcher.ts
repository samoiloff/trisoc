import {EventEmitter} from "eventemitter3";

export class EventDispatcher extends EventEmitter {
    public logEventsEnabled: boolean = false;
    public instanceId: string = "EventDispatcher";

    dispatch(event: string, data?: any): void {
        this.emit(event, data);
    }

    public emit(event: string | symbol, data?: any): boolean {
        // if (__DEV__ && this.logEventsEnabled) {
        //     this.logEvent(event, data);
        // }

        return super.emit(event, data);
    }

    // protected logEvent(event: string | symbol, data?: any): void {
    //     console.groupCollapsed(`${this.instanceId}: ${event}`);
    //     console.log(data ? data : "-=NO_DATA=-");
    //     //TODO: we can print stacktrace here for simplify debugging
    //     console.trace();
    //     console.groupEnd();
    // }
}
