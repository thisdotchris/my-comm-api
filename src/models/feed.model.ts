import { Schema, Document } from 'mongoose';

export class Feed extends Document {
  constructor(
    private title: string,
    private description: string,
    private communiity: string,
    private user: string,
  ) {
    super();
  }
}

export const FeedSchema = new Schema({
  title: String,
  description: String,
  community: {
    type: String,
    ref: 'communities',
  },
  user: {
    type: String,
    ref: 'users',
  },
});
