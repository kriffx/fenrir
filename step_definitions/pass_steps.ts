import { Then } from "@cucumber/cucumber";
import { assert } from "chai";

Then(/^pass$/, async function () {
    assert.ok(true);
});