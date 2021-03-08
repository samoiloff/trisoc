import {CommandBase} from "./CommandBase";

export abstract class CommandResolveBase extends CommandBase {

    protected resolve: (value?: any) => void;

    run(): Promise<any> {
        if (this.resolve) {
            throw  new Error('Already in progress');
        }
        return new Promise<any>(resolve => {
            this.resolve = resolve;
            this.internalRun();
        });
    }

    protected abstract internalRun(): void;

    protected internalResolve(): void {
        const resolve: () => void = this.resolve;
        this.resolve = null;
        resolve();
    }

}
