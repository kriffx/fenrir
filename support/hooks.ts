import { After, AfterAll, Before, BeforeAll } from "@cucumber/cucumber";
import { Driver } from "./index";

const driver = Driver.getInstance();

Before(async function () {
});

After(async function () {
    if (driver.session) {
        await driver.session.quit();
        driver.session = null;
    }
});

BeforeAll(async function () {
});

AfterAll(async function () {
});