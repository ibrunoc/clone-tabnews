import database from "infra/database.js";

async function status(request, response) {
  const updatedAt = new Date().toISOString();

  const databaseVersionResult = await database.query("SHOW server_version;");
  const databaseVersionValue = databaseVersionResult.rows[0].server_version;

  const maxConnectionsResult = await database.query("SHOW max_connections;");
  const maxConnectionsValue = maxConnectionsResult.rows[0].max_connections;

  const databaseOpenedConnectionsResult = await database.query(
    " SELECT count(*)::int FROM pg_stat_activity WHERE datname = 'local_db';",
  );
  const databaseOpenedConnectionsValue =
    databaseOpenedConnectionsResult.rows[0].count;

  // const resultQueryVersionDataBase = await database.query(
  //   "SELECT split_part(version(), ' ', 2) as version",
  // );

  // const resultMaxConnectionsDataBase = await database.query(
  //   "SHOW max_connections;",
  // );

  // const resultCountConnectionsDataBase = await database.query(
  //   "SELECT count(*) as count_connections FROM pg_stat_activity;",
  // );

  response.status(200).json({
    updated_at: updatedAt,
    dependencies: {
      database: {
        version: databaseVersionValue,
        max_connections: parseInt(maxConnectionsValue),
        opened_connections: databaseOpenedConnectionsValue,
      },
    },
    // database: {
    //   postgres_version: parseFloat(resultQueryVersionDataBase.rows[0].version),
    //   max_connections: new Number(
    //     resultMaxConnectionsDataBase.rows[0].max_connections,
    //   ),
    //   count_connections: new Number(
    //     resultCountConnectionsDataBase.rows[0].count_connections,
    //   ),
    // },
  });
}

export default status;
