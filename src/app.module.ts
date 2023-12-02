import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthModule } from './health/health.module';
import { ConfigModule } from '@nestjs/config';
import { configModuleOption } from './config/app.config';

@Module({
  imports: [ConfigModule.forRoot(configModuleOption), HealthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
