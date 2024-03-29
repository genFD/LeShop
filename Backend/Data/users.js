import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin user',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'John doe',
    email: 'John@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Jane doe',
    email: 'Jane@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
];
export default users;
