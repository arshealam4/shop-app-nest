import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { V1Module } from '@/v1/v1.module';
import { ProvidersModule } from '@/providers/providers.module';
import configuration from '@/config/configuration';
import { CoreModule } from '@/core/core.module';
import { HealthModule } from '@/health/health.module';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
    ProvidersModule,
    V1Module,
    CoreModule,
    HealthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
