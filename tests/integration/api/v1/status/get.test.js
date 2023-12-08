test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();

  const parseUpdatedAt = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toEqual(parseUpdatedAt);

  expect(responseBody.dependencies.database.version).toEqual("16.0");
  expect(responseBody.dependencies.database.max_connections).toEqual(100);

  // expect(responseBody).toHaveProperty("database");

  // const database = responseBody.database;

  // expect(database).toHaveProperty("postgres_version");
  // expect(typeof database.postgres_version).toBe("number");

  // expect(database).toHaveProperty("max_connections");
  // expect(typeof database.max_connections).toBe("number");

  // expect(database).toHaveProperty("count_connections");
  // expect(typeof database.count_connections).toBe("number");
  // expect(database.count_connections).toBeLessThanOrEqual(
  //   database.max_connections,
  // );
});
