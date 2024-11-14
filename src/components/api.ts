import { Api } from './base/api';

console.log(process.env.API_ORIGIN);
export const ApiAuc = new Api(process.env.API_ORIGIN + '/api/weblarek/');