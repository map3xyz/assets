import * as bitcoincash from "./info.json";

describe("bitcoincash", () => {
  const regex = new RegExp(bitcoincash.regex.address);
  it("validates addresses", () => {
    expect(
      regex.test("bitcoincash:qr6m7j9njldwwzlg9v7v53unlr4jkmx6eylep8ekg2")
    ).toBe(true);
    expect(
      regex.test("bitcoincash:q9adhakpwzztepkpwp5z0dq62m6u5v5xtyj7j3h2ws4mr9g0")
    ).toBe(true);
    expect(
      regex.test(
        "bitcoincash:qgagf7w02x4wnz3mkwnchut2vxphjzccwxgjvvjmlsxqwkcw59jxxuz"
      )
    ).toBe(true);
    expect(
      regex.test(
        "bitcoincash:qvch8mmxy0rtfrlarg7ucrxxfzds5pamg73h7370aa87d80gyhqxq5nlegake"
      )
    ).toBe(true);
  });
  it("invalidates addresses", () => {
    expect(regex.test("bitcoincash:qpzry9x8gf2tvdw0s3jn54khce6mua7lcw20ayyn")).toBe(
      false
    );
  });
});
