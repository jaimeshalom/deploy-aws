// eslint-disable-next-line filename-export/match-named-export
import { Injectable } from '@nestjs/common';
import * as os from 'node:os';

@Injectable()
export class AppService {
  getHello(): string {
    const version = process.env.APP_VERSION ?? '1.0.0'; // Valor por defecto si no está definida la variable

    const hostname = os.hostname();

    return `App version: ${version}. Hostname: ${hostname}. New deploy from github action 🎉!`;
  }
}
