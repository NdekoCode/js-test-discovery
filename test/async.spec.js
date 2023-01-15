import {
    equal,
    notEqual
} from "node:assert";
import Percentage from "../libs/Percentage.js";
describe("#Asynchronous Wait", () => {
    it("Should exist", () => {
        notEqual(Percentage.wait, undefined);
    })
    it("Should wait 300 ms", (done) => {
        Percentage.wait(300, (test) => {
            equal(test, 18, "Must be 18");
            done();
        });
    })
})