
const users = {
  'contributor1@example.com': {
    email: 'contributor1@example.com',
    password: 'password',
    name: 'contributor1'
  },
  'foo@example.com': {
    email: 'foo@example.com',
    password: 'qwert',
    name: 'foo'
  }

};

module.exports = {

  findUserByEmail(email) {
    return users[email];
  },

  createUser({password, email, name}) {
    users[email] = {
      password,
      email,
      name
    };

    return {password, email, name};
  }

};