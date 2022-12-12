import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('many/:count')
  getManyHellos(@Param('count') count: number) {
    return this.appService.getManyHellos(count);
  }
}
