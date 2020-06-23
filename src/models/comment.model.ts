import { Schema, Document } from 'mongoose';

export class Comment extends Document {
  constructor(
    private feed: string,
    private user: string,
    private comment: string,
    private date: string,
    private hearts: number,
  ) {
    super();
  }
}

export const CommnentSchema = new Schema({
  feed: {
    type: String,
    ref: 'feeds',
  },
  user: {
    type: String,
    ref: 'users',
  },
  comment: String,
  data: { type: Date, default: Date.now },
  hearts: { type: Number, default: 0 },
});
