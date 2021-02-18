import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { HealthController } from './health.controller';
import { MongodbHealthIndicator } from './mongodb.health';
@Module({
  imports: [TerminusModule],
  controllers: [HealthController],

  providers: [MongodbHealthIndicator],
})
export class HealthModule {}
