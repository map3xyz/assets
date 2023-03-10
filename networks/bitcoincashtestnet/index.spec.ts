import * as bitcoincashtestnet from "./info.json";

describe("bitcoincashtestnet", () => {
  const regex = new RegExp(bitcoincashtestnet.regex.address);
  it("validates addresses", () => {
    expect(
      regex.test("bchtest:pr6m7j9njldwwzlg9v7v53unlr4jkmx6eyvwc0uz5t")
    ).toBe(true);
    expect(
      regex.test("bchtest:p9adhakpwzztepkpwp5z0dq62m6u5v5xtyj7j3h2u94tsynr")
    ).toBe(true);
    expect(
      regex.test(
        "bchtest:pgagf7w02x4wnz3mkwnchut2vxphjzccwxgjvvjmlsxqwkcvs7md7wt"
      )
    ).toBe(true);
    expect(
      regex.test(
        "bchtest:pvch8mmxy0rtfrlarg7ucrxxfzds5pamg73h7370aa87d80gyhqxq7fqng6m6"
      )
    ).toBe(true);
    expect(
      regex.test(
        "bchtest:pnq8zwpj8cq05n7pytfmskuk9r4gzzel8qtsvwz79zdskftrzxtar994cgutavfklvmgm6ynej"
      )
    ).toBe(true);
    expect(
      regex.test(
        "bchtest:ph3krj5607v3qlqh5c3wq3lrw3wnuxw0sp8dv0zugrrt5a3kj6ucysfz8kxwv2k53krr7n933jfsunqnzf7mt6x"
      )
    ).toBe(true);
    expect(
      regex.test(
        "bchtest:pmvl5lzvdm6km38lgga64ek5jhdl7e3aqd9895wu04fvhlnare5937w4ywkq57juxsrhvw8ym5d8qx7sz7zz0zvcypqs6kgdsg2g"
      )
    ).toBe(true);
    expect(
      regex.test(
        "bchtest:plg0x333p4238k0qrc5ej7rzfw5g8e4a4r6vvzyrcy8j3s5k0en7calvclhw46hudk5flttj6ydvjc0pv3nchp52amk97tqa5zygg96mc773cwez"
      )
    ).toBe(true);
  });
  it("invalidates addresses", () => {
    expect(
      regex.test(
        "bitcoincashtestnet:pr6m7j9njldwwzlg9v7v53unlr4jkmx6eyvwc0uz5t"
      )
    ).toBe(false);
  });
});
