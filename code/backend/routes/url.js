const express = require('express');
const router = express.Router();
const {
    nanoid
} = require("nanoid");
const validUrl = require("valid-url");
const dotenv = require('dotenv');

const {
    Pool
} = require('pg');
const pool = new Pool();

const {
    parsed: env
} = dotenv.config();
const status500 = {
    status: 500,
    message: "Internal Server Error"
}
const status400 = {
    status: 400,
    message: "Bad Request"
}

const getDupplicate = (full_url) => pool
    .query('SELECT short_url FROM url WHERE full_url = $1;', [full_url])
    .then(res => {

        return res.rows[0];
    })
    .catch(err =>
        setImmediate(() => {
            throw err
        })
    );

const insertUrl = (uri, full_url, short_url) => pool
    .query('INSERT INTO url(uri, full_url, short_url, count) VALUES ($1, $2 ,$3, $4);', [uri, full_url, short_url, 0])
    .catch(err =>
        setImmediate(() => {
            throw err
        })
    );

router.post('/', async function (req, res) {

    let httpStatus = {};

    if (!validUrl.isUri(env.BASEURL)) {
        httpStatus = status500;
    } else if (!validUrl.isUri(req.body.url)) {
        httpStatus = status400;
    } else {
        const result = await getDupplicate(req.body.url); // Prevent Dupplicate URL
        if (!result) {
            const uri = nanoid(6);
            httpStatus.status = 201;
            httpStatus.message = env.BASEURL + '/' + uri;
            await insertUrl(uri, req.body.url, httpStatus.message);
        } else {
            httpStatus.status = 200;
            httpStatus.message = result.short_url;
        }
    }

    return res.status(httpStatus.status).json(httpStatus.message);
});

module.exports = router;