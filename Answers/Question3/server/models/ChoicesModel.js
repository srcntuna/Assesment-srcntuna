const { Pool } = require('pg');

const myURI =
  'postgres://ahzfzhki:6Ccj4i8io6PGbXpHBHlELIDkyOQILfny@castor.db.elephantsql.com/ahzfzhki';

const URI = process.env.PG_URI || myURI;

const pool = new Pool({
  connectionString: URI,
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};
