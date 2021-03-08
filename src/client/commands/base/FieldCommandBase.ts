import {CommandBase} from "../../../common/commands/CommandBase";
import {Field} from "../../field/Field";

export class FieldCommandBase extends CommandBase {

    protected field: Field;

    constructor(field: Field) {
        super();
        this.field = field;
    }
}
