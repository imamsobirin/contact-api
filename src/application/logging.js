import winston from "winston";

// setup logger
export const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [new winston.transports.Console({})],
});
