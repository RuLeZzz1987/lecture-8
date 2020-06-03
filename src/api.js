

export const signIn = ({email, password}) => new Promise((ok) => {
  setTimeout(() => {
    console.log('signIn: ', email);
    ok({token: 'foo-bar-token', user: {email, login: 'FooBar', roles: ['admin', 'operation', 'developer', 'manager']}})
  }, 1000);
});

export const signUp = ({email, password, login}) =>  new Promise((ok) => {
  setTimeout(() => {
    console.log('signUp: ', email, login);
    ok({token: 'foo-bar-token', user: {email, login: 'FooBar'}});
  }, 1000);
});