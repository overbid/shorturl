var express = require('express');
var router = express.Router();
const {
  Pool
} = require('pg');
const pool = new Pool();

const status400 = {
  status: 404,
  message: "Not Found"
}

const getFullUrl = (uri) => pool
  .query('SELECT full_url FROM url WHERE uri = $1;', [uri])
  .then(res => {

    return res.rows[0];
  })
  .catch(err =>
    setImmediate(() => {
      throw err
    })
  );

router.get('/:uri', async function (req, res, next) {

  const result = await getFullUrl(req.params.uri);
  let httpStatus = {};
  if (!result) {
    httpStatus = status400;
  } else {
    httpStatus.status = 200;
    httpStatus.message = result.full_url;
  }

  return res.status(httpStatus.status).json(httpStatus.message);
});

module.exports = router;