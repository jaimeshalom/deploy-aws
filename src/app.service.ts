import { Injectable } from '@nestjs/common';
import * as os from 'os';

@Injectable()
export class AppService {
  getHello(): string {
    const version = process.env.APP_VERSION || '1.0.0'; // Valor por defecto si no está definida la variable

    const hostname = os.hostname();

    return `App version: ${version}, Hostname: ${hostname}, new deploy from github action 🎉!`;
  }
}
