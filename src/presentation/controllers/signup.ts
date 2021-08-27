export class SignUpController {
  // eslint-disable-next-line class-methods-use-this
  handle(_: any): any {
    return {
      statusCode: 400,
      body: new Error('Missing param: name'),
    };
  }
}
