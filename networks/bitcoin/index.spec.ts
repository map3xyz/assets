import * as bitcoin from "./info.json";

describe("bitcoin", () => {
  const regex = new RegExp(bitcoin.regex.address);
  it("validates addresses", () => {
    expect(regex.test("1RAHUEYstWetqabcFn5Au4m4GFg7xJaNVN2")).toBe(true);
    expect(regex.test("3J98t1RHT73CNmQwertyyWrnqRhWNLy")).toBe(true);
    expect(regex.test("bc1qw508d6qejxtdg4y5r3zarvary0c5xw7kv8f3t4")).toBe(
      true
    );
    expect(
      regex.test(
        "bc1qrp33g0q5c5txsp9arysrx4k6zdkfs4nce4xj0gdcccefvpysxf3qccfmv3"
      )
    ).toBe(true);
  });
  it("invalidates addresses", () => {
    expect(regex.test("b1qarsrrr7ASHy5643ydab9re59gtzzwfrah")).toBe(false);
    expect(regex.test("0J98t1RHT73CNmQwertyyWrnqRhWNLy")).toBe(false);
    expect(regex.test("tb1qw508d6qejxtdg4y5r3zarvary0c5xw7kxpjzsx")).toBe(
      false
    );
  });
});
