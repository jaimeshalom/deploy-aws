import { type INestApplication } from '@nestjs/common';
import { type TestingModule, Test } from '@nestjs/testing';
import * as request from 'supertest';

import { AppModule } from '../src/AppModule';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect((res) => {
        expect(res.text).toMatch(
          /^App version: 1\.0\.0\. Hostname: .+\. New deploy from github action 🎉!$/,
        );
      });
  });
});
