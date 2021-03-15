const { searchItems, getFullItemById } = require("./services");

it("Se espera que searchItems sea una función", () => {
  expect(typeof searchItems).toBe("function");
});

it("Se espera que searchItems devuelva un objeto", async () => {
  const result = await searchItems("MLA908457685");
  expect(typeof result).toBe("object");
});

it("Se espera que getFullItemById sea una función", () => {
  expect(typeof getFullItemById).toBe("function");
});

it("Se espera que getFullItemById devuelva un objeto", async () => {
  const result = await getFullItemById("MLA908457685");
  expect(typeof result).toBe("object");
});
