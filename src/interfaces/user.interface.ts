export interface User {
  _id: string;
  name: string;
  username: string;
  password: string;
  email: string;
  socket_id: string;
  communities: Array<string>;
}
