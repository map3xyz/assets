import * as bitcointestnet from "./info.json";

describe("bitcointestnet", () => {
  const regex = new RegExp(bitcointestnet.regex.address);
  it("validates addresses", () => {
    expect(regex.test("mipcBbFg9gMiCh81Kj8tqqdgoZub1ZJRfn")).toBe(true);
    expect(regex.test("2MzQwSSnBHWHqSAqtTVQ6v47XtaisrJa1Vc")).toBe(true);
    expect(regex.test("tb1qw508d6qejxtdg4y5r3zarvary0c5xw7kxpjzsx")).toBe(
      true
    );
    expect(
      regex.test(
        "tb1p84x2ryuyfevgnlpnxt9f39gm7r68gwtvllxqe5w2n5ru00s9aquslzggwq"
      )
    ).toBe(true);
  });
  it("invalidates addresses", () => {
    expect(regex.test("b1qarsrrr7ASHy5643ydab9re59gtzzwfrah")).toBe(false);
    expect(regex.test("0J98t1RHT73CNmQwertyyWrnqRhWNLy")).toBe(false);
  });
});
