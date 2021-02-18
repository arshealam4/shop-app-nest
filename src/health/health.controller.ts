import { Controller, Get } from '@nestjs/common';
import {
  HealthCheck,
  HealthCheckService,
  DNSHealthIndicator,
} from '@nestjs/terminus';
import { ConfigService } from '@nestjs/config';
import { MongodbHealthIndicator } from './mongodb.health';


@Controller('health')
export class HealthController {
  mongodbURL: string;
  oneclickURL: string;
  rabbitmqURL: string;

  constructor(
    private health: HealthCheckService,
    private readonly dns: DNSHealthIndicator,
    private configService: ConfigService,
    private mongodb:MongodbHealthIndicator
  ) {
    this.mongodbURL = this.configService.get<string>('DB.MONGODB_URL');
  }

  @Get()
  @HealthCheck()
  check(): any {
    return this.health.check([
        async (): Promise<any> =>
        this.mongodb.isHealthy('mongodb', this.mongodbURL),  
    ]);
  }
}
