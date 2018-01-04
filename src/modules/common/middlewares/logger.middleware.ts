import { Middleware, NestMiddleware, ExpressMiddleware, Logger } from "@nestjs/common";

let logger = new Logger('loggerMiddleware', true)

@Middleware()
export class LoggerMiddleware {
  resolve(...args: any[]): ExpressMiddleware {
    return (req, res, next) => {
      logger.log(`${req.method}: ${req.url}`)
      next()
    }
  }
} 