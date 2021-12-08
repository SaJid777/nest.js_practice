import { Body, Controller, Get, Post } from "@nestjs/common";
import {TestService} from './test.service'

@Controller('test')
export class TestController {
    constructor(private readonly testService: TestService) {}
  
    @Get('get_test')
    getTest(): string {
      return this.testService.getTest();
    }

    @Get('get_new_test')
    getNewTest(): string {
        return this.testService.getNewTest();
    }

    @Post('post_test')
    postTest(@Body() body:string){
        return this.testService.postTest(body);
    }
  }