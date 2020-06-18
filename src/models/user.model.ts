import { Schema, Document } from 'mongoose';

export class User extends Document {
  constructor(
    private name: string,
    private username: string,
    private password: string,
    private email: string,
    private socket_id: string,
    private communities: Array<any>,
  ) {
    super();
  }
}

export const UserSchema = new Schema({
  name: String,
  username: String,
  password: String,
  email: String,
  socket_id: String,
  communities: [
    {
      type: String,
      ref: 'communities',
    },
  ],
});
