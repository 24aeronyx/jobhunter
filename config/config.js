module.exports = {
  development: {
    username: "root",
    password: null,
    database: "jobhunter",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  production: {
    username: "root",
    password: "5BF6FadD3fA1DcC65b-c4Hded3HEBhHG",
    database: "railway",
    host: "roundhouse.proxy.rlwy.net",
    port: 37774,
    dialect: "mysql"
  }
}
