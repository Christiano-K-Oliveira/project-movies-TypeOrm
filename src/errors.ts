import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";

class AppError extends Error {
  message: string
  statusCode: number
  
  constructor(message: string, statusCode: number = 400) {
    super(message)
    this.message = message
    this.statusCode = statusCode
  }
}

const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({ 
      message: err.message 
    })
  }
  if(err instanceof ZodError){
    return res.status(400).json({
      message: err.flatten().fieldErrors
    })
  }

  console.error(err);
  return res.status(500).json({ 
    message: "Internal Server Error." 
  });
};

export { AppError, errorHandler };