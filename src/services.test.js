import { getItemById, searchItems } from "./services";

const testObject = ["author", "item"];

const testSearchObject = ["author", "items", "categories"];

describe("getItemById", () => {
  it("Se espera que getItemById sea una función", () => {
    expect(typeof getItemById).toBe("function");
  });
  it("Al llamar la función getItemById con un ID como argumento devuelve un objeto", async () => {
    const result = await getItemById("MLA908457685");
    expect(typeof result).toBe("object");
  });

  it("El objeto devuelto tiene las propiedades del objeto testObject", async () => {
    const result = await getItemById("MLA908457685");
    expect(Object.keys(result).sort()).toEqual(testObject.sort());
  });
});

describe("searchItems", () => {
  it("Se espera que searchItems sea una función", () => {
    expect(typeof searchItems).toBe("function");
  });
  it("Al llamar la función searchItems devuelve un objeto", async () => {
    const result = await searchItems();
    expect(typeof result).toBe("object");
  });
  it("El objeto devuelto tiene las propiedades del objeto testSearchObject", async () => {
    const result = await searchItems();
    expect(Object.keys(result).sort()).toEqual(testSearchObject.sort());
  });
});
