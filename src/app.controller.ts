import { Controller, Get, Logger, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  private readonly logger = new Logger(AppController.name);

  @Get('/')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/dylib-test')
  sayHello(): string {
    return this.appService.testDylib();
  }

  @Post('/keygen')
  keygen(): RestResponse {
    return {
      code: 'success',
      data: null
    }
  }
}
