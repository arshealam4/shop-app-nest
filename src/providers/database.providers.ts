import * as mongoose from 'mongoose'
import { ConfigModule, ConfigService } from '@nestjs/config';
export const databaseProviders = [
  {
    provide: 'MONGODB_PROVIDER',
    imports: [ConfigModule],
    useFactory: async (configService: ConfigService) : Promise<typeof mongoose> => {
      return mongoose.connect(
        configService.get<string>('DB.MONGODB_URL'),
        { useNewUrlParser: true, useUnifiedTopology: true });
    },
    inject: [ConfigService]
  }
]
