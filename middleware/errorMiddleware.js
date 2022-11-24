const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;

  res.status(statusCode);

  res.json({
    message: "Hey please stop, we are having an error here!",
    stack: process.env.NODE_ENV === "development" ? err.stack : null,
  });
};

module.exports = {
  errorHandler,
};
