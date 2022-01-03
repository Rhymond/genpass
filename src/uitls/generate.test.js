import Generate from "./generate";

test("Generate password", () => {
  const pass1 = Generate("google.com", "username", "password", 1, 10);
  expect(pass1).toHaveLength(10);

  const pass2 = Generate("google.com", "username", "password", 1, 10);

  expect(pass1).toEqual(pass2)
});
