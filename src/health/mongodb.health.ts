import { Injectable } from '@nestjs/common';
import {
  HealthIndicator,
  HealthIndicatorResult,
  HealthCheckError,
} from '@nestjs/terminus';
import * as mongoose from 'mongoose';

@Injectable()
export class MongodbHealthIndicator extends HealthIndicator {
  async isHealthy(key: string, url: string): Promise<HealthIndicatorResult> {
    let isHealthy = false;
    let connection;
    try {
      connection = await mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      isHealthy = true;
    } catch (err) {
      isHealthy = false;
    }

    const result = this.getStatus(key, isHealthy, {});

    if (isHealthy) {
      if(connection) await connection.disconnect();
      return result;
    }
    throw new HealthCheckError('Mongodb connection check failed', result);
  }
}
