const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "awamad",
});

const data = [
  {
    id: 1,
    name: "Team1",
    lead: "pratik kale",
    count: 3,
  },
  {
    id: 2,
    name: "Team2",
    lead: "rohan darade",
    count: 3,
  },
  {
    id: 3,
    name: "Team3",
    lead: "siddhart tandale",
    count: 4,
  },
  {
    id: 4,
    name: "Team4",
    lead: "vivek dhumal",
    count: 2,
  },
];

connection.connect((err) => {
  if (err) {
    console.error(err);
    throw err;
  }
  console.log("Connected!");
  data.map((record) => {
    const statement = `INSERT INTO Team VALUES(${record.id}, '${record.name}', '${record.lead}', ${record.count})`;
    connection.query(statement, (err, result) => {
      if (err) {
        console.error(err);
        throw err;
      }
      console.log(`Record of  ${record.id} is inserted`);
    });
  });
});
