import {
  assert,
  should
} from "chai";
import Percentage from "../libs/Percentage.js";
should();
describe("Pourcentage", () => {
  describe("#Evolution", () => {

    describe("#Evolution of 100", () => {
      it("It should give an evolution of 100", () => {
        Percentage.evolution(100, 200).should.be.equal(100, "Devrait renvoyer 100");
      });
    });
    describe("#Evolution of 50", () => {
      it("It should give an #evolution of 50", () => {
        Percentage.evolution(100, 150).should.be.equal(50, "Devrait renvoyer 50")
      });
    });
    describe("#Evolution of -50", () => {
      it("It should give an #evolution of -50", () => {
        Percentage.evolution(100, 50).should.be.equal(-50, "Devrait renvoyer -50")
      });
    });
    describe.skip("#Evolution is Infinit", () => {
      it.skip("Should giv us Infinity, we use skip method", () => {
        assert.equal(Percentage.evolution(0, 100), Infinity);
      });
      it("Should round value", () => {
        assert.equal(Percentage.evolution(30, 100), 233.33);
      });
    });

    it("It should give me a indeterminate")
  })

});