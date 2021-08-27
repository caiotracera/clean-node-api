export interface IHttpResponse {
  statusCode: number;
  body: unknown;
}

export interface IHttpRequest {
  body?: Record<string, unknown>;
}
