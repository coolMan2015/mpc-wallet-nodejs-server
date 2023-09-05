import { Injectable, Logger } from '@nestjs/common';
import lib from './dylib/index';


@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);

  getHello(): string {
    return 'Hello World!';
  }

  testDylib(): string {
    const ret = lib.hello();
    return ret;
  }
}
