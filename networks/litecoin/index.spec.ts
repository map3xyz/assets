import * as litecoin from "./info.json";

describe("litecoin", () => {
  const regex = new RegExp(litecoin.regex.address);
  it("validates addresses", () => {
    expect(regex.test("LVg2kJoFNg45Nbpy53h7Fe1wKyeXVRhMH9")).toBe(true);
    expect(regex.test("LVg2kJoFNg45Nbpy53h7Fe1wKyeXVRhMH9")).toBe(true);
    expect(regex.test("LTpYZG19YmfvY2bBDYtCKpunVRw7nVgRHW")).toBe(true);
    expect(regex.test("Lb6wDP2kHGyWC7vrZuZAgV7V4ECyDdH7a6")).toBe(true);

    // p2sh addresses
    expect(regex.test("3NJZLcZEEYBpxYEUGewU4knsQRn1WM5Fkt")).toBe(true);

    // segwit addresses
    expect(regex.test("ltc1qg42tkwuuxefutzxezdkdel39gfstuap288mfea")).toBe(
      true
    );
    expect(regex.test("ltc1qg42tkwuuxefutzxezdkdel39gfstuap288mfea")).toBe(
      true
    );
  });
  it("invalidates addresses", () => {
    expect(regex.test("mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef")).toBe(false);
    expect(regex.test("b1qarsrrr7ASHy5643ydab9re59gtzzwfrah")).toBe(false);
    expect(regex.test("0J98t1RHT73CNmQwertyyWrnqRhWNLy")).toBe(false);
    expect(regex.test("2MxKEf2su6FGAUfCEAHreGFQvEYrfYNHvL7")).toBe(false);
    expect(regex.test("tb1qw508d6qejxtdg4y5r3zarvary0c5xw7kxpjzsx")).toBe(
      false
    );
  });
});
