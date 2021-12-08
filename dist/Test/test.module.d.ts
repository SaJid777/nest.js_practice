import { NestModule, MiddlewareConsumer } from "@nestjs/common";
export declare class TestModule implements NestModule {
    configure(consumer: MiddlewareConsumer): void;
}
