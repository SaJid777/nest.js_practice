import { Injectable } from "@nestjs/common";

@Injectable()
export class TestService {
    getTest(): string {
      return 'Test World!';
    }

    getNewTest(): string {
        return 'Test New World!';
    }

    postTest(data){
        return data;
    }
  }