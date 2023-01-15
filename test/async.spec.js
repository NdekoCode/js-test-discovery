import {
    assert
} from "chai";
import Percentage from "../libs/Percentage.js";
describe("#Asynchronous Wait", () => {
    it("Should exist", () => {
        assert.isFunction(Percentage.wait);
    })
    it("Should wait 300 ms", (done) => {
        Percentage.wait(300, (test) => {
            assert.equal(test, 18, "Must be 18");
            done();
        });
    })
})