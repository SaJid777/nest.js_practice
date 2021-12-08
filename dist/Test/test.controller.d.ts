import { TestService } from './test.service';
export declare class TestController {
    private readonly testService;
    constructor(testService: TestService);
    getTest(): string;
    getNewTest(): string;
    postTest(body: string): any;
}
