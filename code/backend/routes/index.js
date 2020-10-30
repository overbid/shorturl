const {
  urlencoded
} = require('express');
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

const updateCounter = (uri) => pool
  .query('UPDATE url SET count = count +1 WHERE uri = $1;', [uri])
  .catch(err =>
    setImmediate(() => {
      throw err
    })
  );

router.get('/:uri', async function (req, res, next) {
  const uri = encodeURIComponent(req.params.uri);
  const result = await getFullUrl(uri);
  let httpStatus = {};
  if (!result) {
    httpStatus = status400;
  } else {
    await updateCounter(uri);
    httpStatus.status = 200;
    httpStatus.message = result.full_url;
    res.redirect(result.full_url);
  }

  return res.status(httpStatus.status).json(httpStatus.message);
});

module.exports = router;