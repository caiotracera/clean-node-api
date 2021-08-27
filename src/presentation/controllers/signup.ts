import { MissingParamError } from '../errors/missing-param-error';
import { badRequest } from '../helpers/http-helper';
import { IHttpRequest, IHttpResponse } from '../protocols/http';

export class SignUpController {
  // eslint-disable-next-line consistent-return
  handle(httpRequest: IHttpRequest): IHttpResponse {
    const requiredFields = ['name', 'email'];

    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field));
      }
    }
  }
}
