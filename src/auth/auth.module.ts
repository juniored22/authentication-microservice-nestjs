import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    JwtModule.register({
      secret: 'juniored', // Em um ambiente de produção, use uma chave secreta mais segura e a armazene de forma segura.
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [AuthService,JwtStrategy],
  exports: [AuthService],
  controllers: [AuthController, AuthController],
})
export class AuthModule {}

