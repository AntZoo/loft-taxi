/* eslint-disable import/no-anonymous-default-export */
export default {
  serverLogin: jest.fn((email, password) =>
    Promise.resolve({ success: true, error: null, token: 123 })
  ),
};

// export default function serverLogin(email, password) {
//   console.log('testing');

//   return new Promise((resolve, reject) => {
//     process.nextTick(() =>
//       email && password
//         ? resolve({ success: true, error: null, token: 123 })
//         : reject({ success: false, error: 'bad request', token: null })
//     );
//   });
// }
