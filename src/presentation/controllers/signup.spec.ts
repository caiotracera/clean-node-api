import { MissingParamError } from '../errors/missing-param-error';
import { SignUpController } from './signup';

describe('SignUp Controller', () => {
  it('should return 400 if no name is provided', () => {
    const sut = new SignUpController();
    const httpRequest = {
      body: {
        email: 'john.doe@example.com',
        password: 'password',
        passwordConfirmation: 'password',
      },
    };
    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError('name'));
  });

  it('should return 400 if no email is provided', () => {
    const sut = new SignUpController();
    const httpRequest = {
      body: {
        name: 'John Doe',
        password: 'password',
        passwordConfirmation: 'password',
      },
    };
    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError('email'));
  });
});
