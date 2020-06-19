import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class PasswordService {
  private salt: number = 10;

  async generatePassword(plainPassword: string) {
    const salt = bcrypt.genSaltSync(this.salt);
    const hash = bcrypt.hashSync(plainPassword, salt);
    return hash;
  }

  async comparePassword(plainPassword: string, hashedPassword: string) {
    return bcrypt.compareSync(plainPassword, hashedPassword);
  }
}
