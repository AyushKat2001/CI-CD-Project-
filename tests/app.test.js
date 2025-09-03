const request = require("supertest");
const app = require("../src/app");

describe("GET /", () => {
  it("should return Hello this is a CI/CD Project!", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("Hello this is a CI/CD Project!");
  });
});
