export const ErrorHandler = (err, res) => {
  console.error(err);
  return res.status(500).json({
    timestamp: new Date().toISOString(),
    message: "Internal Server Error",
    success: false,
    error: err.message,
    results: null,
  });
};

export const SuccessHandler = (res, statusCode, message, results) => {
  return res.status(statusCode).json({
    timestamp: new Date().toISOString(),
    message,
    success: true,
    error: null,
    results,
  });
};
