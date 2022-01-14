import { authMiddleware } from './authMiddleware';
import { authenticate } from './actions';
import * as apiCalls from './api';

jest.mock('./api', () => ({
  serverLogin: jest.fn().mockResolvedValue({
    success: true,
    error: null,
    token: '123',
  }),
  //   jest.fn(() =>
  //   Promise.resolve({ success: true, error: null, token: '123' })
  // ),
}));

describe('authMiddleware', () => {
  describe('#AUTHENTICATE', () => {
    it('authenticates through api', async () => {
      const dispatch = jest.fn();

      await authMiddleware({ dispatch })()(
        authenticate('testlogin', 'testpassword')
      );

      expect(serverLogin).toBeCalledWith('testlogin', 'testpassword');
      expect(dispatch).toBeCalledWith({ type: 'LOGIN' });
    });
  });
});
