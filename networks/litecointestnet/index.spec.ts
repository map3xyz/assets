import * as litecointestnet from "./info.json";

describe("litecointestnet", () => {
  const regex = new RegExp(litecointestnet.regex.address);
  it("validates addresses", () => {
    expect(regex.test("mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef")).toBe(true);

    // p2sh addresses
    expect(regex.test("2MxKEf2su6FGAUfCEAHreGFQvEYrfYNHvL7")).toBe(true);
    expect(regex.test("QW2SvwjaJU8LD6GSmtm1PHnBG2xPuxwZFy")).toBe(true);
    expect(regex.test("QjpzxpbLp5pCGsCczMbfh1uhC3P89QZavY")).toBe(true);

    // segwit addresses
    expect(regex.test("tltc1qu78xur5xnq6fjy83amy0qcjfau8m367defyhms")).toBe(
      true
    );
  });
  it("invalidates addresses", () => {
    expect(regex.test("ltc1qg42tkwuuxefutzxezdkdel39gfstuap288mfea")).toBe(false);
  });
});
