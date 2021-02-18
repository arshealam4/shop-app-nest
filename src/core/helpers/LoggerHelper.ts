import { Injectable } from '@nestjs/common';
import * as pino from 'pino';
import { ConfigService } from '@nestjs/config';
import * as fs from 'fs'

type LogType = {
  app_message: string;
  log_info?: Record<string, unknown>;
  metadata?: Record<string, unknown>;
};


const configureLogger = () => {
  
  const cwd = process.cwd();
  const logPath = `${cwd}/logs`;
  fs.mkdirSync(logPath, { recursive: true })
  const prettyPrint = process.env.NODE_ENV === 'development' || process.env.LOG_PRETTY_PRINT === 'true'
  const dest = pino.destination(`${logPath}/combined.log`)
  const logger = pino({ prettyPrint, level: 'debug'}, dest);

  return logger

}

const logger = configureLogger();

@Injectable()
export class LoggerHelper {
  private readonly name: string;

  constructor(private configService: ConfigService) {
    this.name = this.configService.get<string>('APP_NAME');
  }

  private __format(payload: LogType) {
    const info = payload.log_info || {};
    const metadata = payload.metadata || {};
    const appMessage = payload.app_message || '';

    return {
      app_name: this.name,
      app_message: appMessage,
      log_info: JSON.stringify(info),
      ...metadata,
    };
  }

  info(payload: LogType): void {
    const log = this.__format(payload);
    logger.info(log);
  }

  debug(payload: LogType): void {
    const log = this.__format(payload);
    logger.debug(log);
  }

  error(payload: LogType): void {
    const log = this.__format(payload);
    logger.error(log);
  }

  warning(payload: LogType): void {
    const log = this.__format(payload);
    logger.warning(log);
  }
}
