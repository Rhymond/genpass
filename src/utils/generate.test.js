import Generate, { bytesToChar } from "./generate";

test("Generate password", () => {
  const pass1 = Generate("google.com", "username", "password", 1, 10);
  expect(pass1).toHaveLength(10);

  const pass2 = Generate("google.com", "username", "password", 1, 10);

  expect(pass1).toEqual(pass2);
});

test("Bytes to Char", () => {
  const pass = bytesToChar("123456", [0, 255, 5, 19, 127]);

  expect(pass).toEqual("16113");
});
