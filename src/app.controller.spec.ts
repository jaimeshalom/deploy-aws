// eslint-disable-next-line check-file/folder-match-with-fex
import { type TestingModule, Test } from '@nestjs/testing';

import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toMatch(
        /^App version: 1\.0\.0\. Hostname: .+\. New deploy from github action 🎉!$/,
      );
    });
  });
});
