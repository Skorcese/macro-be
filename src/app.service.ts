import { Injectable, UnprocessableEntityException } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getManyHellos(count: number) {
    if (count < 0)
      throw new UnprocessableEntityException('Not gonna happen :(');
    return new Array<string>(count).fill('Hello World!');
  }
}
