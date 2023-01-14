import { equal } from "node:assert";
import Percentage from "../libs/Percentage.js";
describe("Pourcentage", () => {
  describe("#Evolution of 100", () => {
    it("It should give an evolution of 100", () => {
      equal(Percentage.evolution(100, 200), 100, "Devrait renvoyer 100");
    });
  });
  describe("#Evolution of 50", () => {
    it("It should give an #evolution of 50", () => {
      equal(Percentage.evolution(100, 150), 50, "Devrait renvoyer 50");
    });
  });
  describe("#Evolution of -50", () => {
    it("It should give an #evolution of -50", () => {
      equal(Percentage.evolution(100, 50), -50, "Devrait renvoyer -50");
    });
  });
  describe("#Evolution is Infinit", () => {
    it("Should giv us Infinity", () => {
      equal(Percentage.evolution(0, 100), Infinity);
    });
    it("Should round value", () => {
      equal(Percentage.evolution(30, 100), 233.33);
    });
  });
});
