import { MissingParamError } from '../errors/missing-param-error';
import { IHttpRequest, IHttpResponse } from '../protocols/http';

export class SignUpController {
  // eslint-disable-next-line consistent-return
  handle(httpRequest: IHttpRequest): IHttpResponse {
    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: new MissingParamError('name'),
      };
    }

    if (!httpRequest.body.email) {
      return {
        statusCode: 400,
        body: new MissingParamError('email'),
      };
    }
  }
}
