import request from "supertest";
import app from "../src/app";

describe("GET /random-url", () => {
  it("should return 404", (done) => {
    request(app).get("/reset")
      .expect(404, done);
  });
});

describe("GET /", () => {
  it("should return 200 OK", () => {
    return request(app).get("/")
      .expect(200);
  });
});

describe("GET /health", () => {
  it("should return 200 OK", () => {
    return request(app).get("/health")
      .expect(200);
  });
});

describe("POST /echo", () => {
  it("should return echo json", (done) => {
    request(app).post("/echo")
    .send({id: 1, name: "Mike"})
    .end((err, res) => {
        done();
    })
    .expect(200);
  });
});
