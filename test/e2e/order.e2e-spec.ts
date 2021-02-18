import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '@/app.module';

describe('Order Module (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    try {
      const moduleFixture: TestingModule = await Test.createTestingModule({
        imports: [AppModule],
      }).compile();
      app = moduleFixture.createNestApplication();
      await app.init();
    } catch (err) {
      console.log(err)
    }
  });

  it('/v1/orders (GET)', () => {
   return request(app.getHttpServer())
      .get('/v1/orders/get-all-order')
      .expect(200)
  });

  it('/v1/orders (POST) Create Order', () => {
    const data = {"totalAmount": 5000}
    return request(app.getHttpServer())
      .post('/v1/orders/place-order')
      .send(data)
      .expect(201)
      .then(res => {
        const { totalAmount} = res.body.result;
        expect(totalAmount).toBe(data.totalAmount)
      })
  });

  afterAll(async () => {
    await app.close();
  });
});
