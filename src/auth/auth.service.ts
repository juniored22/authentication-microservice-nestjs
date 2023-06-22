import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async validateUser(username: string, password: string): Promise<any> {
    // Isto é apenas um exemplo de mock e não deve ser usado em produção.
    // Em um cenário real, você deveria consultar um banco de dados para validar as credenciais do usuário.
    const mockUser = {
      id: 1,
      username: 'example',
      password: 'password'
    };

    // Aqui, estamos apenas verificando se o nome de usuário e senha são iguais aos do nosso usuário fictício.
    // Em um cenário real, isso deve ser feito com segurança, verificando hashes de senha, etc.
    if (username === mockUser.username && password === mockUser.password) {
      const payload = { username: mockUser.username, sub: mockUser.id };
      return {
        access_token: this.jwtService.sign(payload),
      };
    }
    return null;
  }
}

