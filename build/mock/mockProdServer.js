import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer';
import systemMock from '../../mock/system';
import userMock from '../../mock/user';

export function setupProdMockServer() {
  createProdMockServer([...systemMock, ...userMock]);
}