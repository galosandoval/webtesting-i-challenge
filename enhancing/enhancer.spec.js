const enhancer = require("./enhancer.js");

// test away!
describe("enhancers", () => {
  describe("testing the repair()", () => {
    it("should return a weapon with a durability of 100", () => {
      const dagger = {
        name: "Dagger",
        durability: 0,
        enhancement: 0,
      };
      expect(enhancer.repair(dagger)).toEqual({
        name: "Dagger",
        durability: 100,
        enhancement: 0,
      });
    });
  });


  describe("testing the success()", () => {
    it("The item's enhancement increases by 1.", () => {
      const longsword = {
        name: "Longsword",
        durability: 80,
        enhancement: 16,
      };
      expect(enhancer.success(longsword)).toEqual({
        name: "Longsword",
        durability: 80,
        enhancement: 17,
      });
    });

    it("If the item enhancement level is 20, the enhancement level is not changed", () => {
      const longsword = {
        name: "Longsword",
        durability: 80,
        enhancement: 20
      };
      expect(enhancer.success(longsword)).toEqual({
        name: "Longsword",
        durability: 80,
        enhancement: 20,
      });
    });
  });


  describe("testing fail()", () => {
    it("If the item's enhancement is less than 15, the durability of the item is decreased by 5.", () => {
      const spear = {
        name: "Spear",
        durability: 80,
        enhancement: 14,
      };
      expect(enhancer.fail(spear)).toEqual({
        name: "Spear",
        durability: 75,
        enhancement: 14,
      });
    });

    it("If the item's enhancement is 15 or more, the durability of the item is decreased by 10.", () => {
      const sword = {
        name: "sword",
        durability: 80,
        enhancement: 15,
      };
      expect(enhancer.fail(sword)).toEqual({
        name: "sword",
        durability: 70,
        enhancement: 15,
      });
    });

    it("If the item's enhancement level is greater than 16, the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17)", () => {
      const sword = {
        name: "sword",
        durability: 80,
        enhancement: 17,
      };
      expect(enhancer.fail(sword)).toEqual({
        name: "sword",
        durability: 70,
        enhancement: 16,
      });
    });
  });
});
