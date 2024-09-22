import morgan from "morgan";
import chalk from "chalk";
export const morganMiddleware = morgan(function (tokens, req, res) {
  return [
    chalk.hex("#34ace0").bold(tokens.method(req, res)),
    chalk.hex("#ffb142").bold(tokens.status(req, res)),
    chalk.hex("#ffffff").bold(tokens.url(req, res)),
    "\n",
    chalk.hex("#2ed573")(tokens["response-time"](req, res) + " ms"),
    chalk.hex("#f78fb3")("@ " + tokens.date(req, res)),
    chalk.yellow(tokens["remote-addr"](req, res)),
    "\n",
    chalk.hex("#fffa65").bold("from " + tokens.referrer(req, res)),
    "\n",
    chalk.hex("#1e90ff")(tokens["user-agent"](req, res)),
    "\n--------------------------------------",
  ].join(" ");
});
