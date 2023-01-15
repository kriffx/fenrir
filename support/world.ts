import { IWorldOptions, setDefaultTimeout, setWorldConstructor, World } from "@cucumber/cucumber";
import { Browser, Driver } from "./index";

const driver = Driver.getInstance();

export class CustomWorld extends World {
    constructor(options: IWorldOptions<any>) {
        super(options);
        driver.session = new Browser().init();
    }
}

setWorldConstructor(CustomWorld);
setDefaultTimeout(1 * 60 * 1000);