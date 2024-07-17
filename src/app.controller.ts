import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/users') //Add user route
export class AppController {
  constructor(private readonly appService: AppService) {}

  //Change the function name to get users
  @Get()
  getUsers(): string[] {
    return this.appService.getUsers();
  }
}
