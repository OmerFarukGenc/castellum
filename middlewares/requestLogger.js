const requestLog = require("../models/requestLog");

const requestLogger = (req, res, next) => {

  const reqData = {
    headers: req.headers,
    method: req.method,
    url: req.url,
    httpVersion: req.httpVersion,
    body: req.body,
    cookies: req.cookies,
    path: req.path,
    protocol: req.protocol,
    query: req.query,
    hostname: req.hostname,
    ip: req.ip,
    originalUrl: req.originalUrl,
    params: req.params,
    date: Date.now()
  }

  const log = new requestLog({ reqData: reqData });
  log.save();
  //console.log(log);
  next();

}

module.exports = requestLogger;