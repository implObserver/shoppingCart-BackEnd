import { DateTime } from 'luxon';
import { Schema } from 'mongoose';
import { IAuthor } from './types/book';

export const AuthorSchema = new Schema<IAuthor>({
  first_name: { type: String, required: true, maxLength: 100 },
  family_name: { type: String, required: true, maxLength: 100 },
  lifespan: {
    born: { type: Date, required: false },
    died: { type: Date, required: false },
  },
});

AuthorSchema.virtual('name').get(function (this: IAuthor) {
  return `${this.family_name}, ${this.first_name}`;
});

AuthorSchema.virtual('url').get(function (this: IAuthor) {
  return `/catalog/author/${this._id}`;
});

AuthorSchema.virtual('lifespanFormatted').get(function (this: IAuthor) {
  const birth = this.lifespan?.born ? DateTime.fromJSDate(this.lifespan.born).toLocaleString(DateTime.DATE_MED) : '';
  const death = this.lifespan?.died ? DateTime.fromJSDate(this.lifespan.died).toLocaleString(DateTime.DATE_MED) : '';
  return `${birth} - ${death}`;
});

AuthorSchema.set('toObject', { virtuals: true });
AuthorSchema.set('toJSON', { virtuals: true });