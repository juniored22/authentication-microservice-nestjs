import { UnauthorizedException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { JwtStrategy } from './jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';

describe('JwtStrategy', () => {
  let jwtStrategy: JwtStrategy;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [JwtModule],
      providers: [JwtStrategy,AuthService],
    }).compile();

    jwtStrategy = module.get<JwtStrategy>(JwtStrategy);
  });

  it('should be defined', () => {
    expect(jwtStrategy).toBeDefined();
  });

  describe('validate', () => {
    it('should validate and return the payload if it is valid', async () => {
      const payload = { username: 'testuser' };
      const result = await jwtStrategy.validate(payload);

      expect(result).toEqual(payload);
    });

    it('should throw an UnauthorizedException if payload is invalid', async () => {
      const invalidPayload = null;

      try {
        await jwtStrategy.validate(invalidPayload);
      } catch (error) {
        expect(error).toBeInstanceOf(UnauthorizedException);
      }
    });
  });
});

