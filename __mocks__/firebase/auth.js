// __mocks__/firebase/auth.js
export const getAuth = jest.fn(() => ({
    currentUser: {
      uid: '12345',
      email: 'test@test.com',
    },
    signOut: jest.fn().mockResolvedValue(),
  }));
export const createUserWithEmailAndPassword = jest.fn();
export const signInWithEmailAndPassword = jest.fn(() => Promise.resolve({ user: { uid: '12345' } }));
