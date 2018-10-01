import { Request, Response } from "express";
import logger from "../util/logger";

export let getHealth = (req: Request, res: Response) => {
  res.send("health");
};

export let getDefault = (req: Request, res: Response) => {
  res.send("hi");
};

export let postEcho = (req: Request, res: Response) => {
  logger.debug("get new request:", req.body);
  res.send(req.body);
};
