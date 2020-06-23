import { Schema, Document } from 'mongoose';

export class Community extends Document {
  constructor(
    private socket_id: string,
    private name: string,
    private description: string,
    private creator: string,
    private date: string,
  ) {
    super();
  }
}

export const CommunitySchema = new Schema({
  socket_id: String,
  name: String,
  description: String,
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
  date: { type: Date, default: Date.now },
});
