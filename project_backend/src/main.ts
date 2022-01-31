import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: true});
  let formdataParser = require('multer')().fields([])
  app.use(formdataParser)
  await app.listen(3001, function () {
    console.log('Example app listening on port 8000!');
   });
}
bootstrap();
