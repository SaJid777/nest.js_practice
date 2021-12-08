import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import {TestModule} from './Test/test.module';
import { AppService } from './app.service';

@Module({
  imports: [TestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
