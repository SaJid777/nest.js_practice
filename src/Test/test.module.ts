 import { Module, NestModule, MiddlewareConsumer } from "@nestjs/common";
 import {TestController} from './test.controller';
 import {TestService} from './test.service'
 import { LoggerMiddleware } from "../Middlewares/logger.middleware";

 @Module({
    imports: [],
    controllers: [TestController],
    providers: [TestService],
  })
  export class TestModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
      consumer
        .apply(LoggerMiddleware)
        .forRoutes('test');
    }
  }