import express from "express";

// setup express
export const web = express();
web.use(express.json());
