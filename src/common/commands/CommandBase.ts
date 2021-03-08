export abstract class CommandBase {

    public run(): Promise<any> {
        return Promise.resolve();
    }

    public destroy() {

    }

}
