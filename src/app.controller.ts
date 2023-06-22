import { Controller, Get, Post, Request, UseGuards, Body } from '@nestjs/common';
import { AppService} from './app.service';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AppController {
  constructor(private readonly appService: AppService,private authService: AuthService) {}

  @Get()
  @UseGuards(AuthGuard('jwt'))
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('protected')
  @UseGuards(AuthGuard('jwt'))
  getProtectedResource(): string {
    return 'Este recurso é protegido e só pode ser acessado com um token JWT válido e esta tudo ok';
  }

}
