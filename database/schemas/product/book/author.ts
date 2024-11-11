import { DateTime } from 'luxon';
import mongoose, { Document, Schema } from 'mongoose';

interface Author extends Document {
  first_name: string;
  family_name: string;
  date_of_birth?: Date;
  date_of_death?: Date;
  full_name?: string;
  url: string;
  date_of_birth_formatted?: string;
  date_of_death_formatted?: string;
  lifespan: string;
  date_of_birth_iso?: string;
  date_of_death_iso?: string;
}

export const AuthorSchema = new Schema<Author>({
  first_name: { type: String, required: true, maxLength: 100 },
  family_name: { type: String, required: true, maxLength: 100 },
  date_of_birth: { type: Date },
  date_of_death: { type: Date },
});

AuthorSchema.virtual('name').get(function (this: Author) {
  return `${this.family_name}, ${this.first_name}`;
});

AuthorSchema.virtual('url').get(function (this: Author) {
  return `/catalog/author/${this._id}`;
});

AuthorSchema.virtual('date_of_birth_formatted').get(function (this: Author) {
  return this.date_of_birth
    ? DateTime.fromJSDate(this.date_of_birth).toLocaleString(DateTime.DATE_MED)
    : '';
});

AuthorSchema.virtual('date_of_death_formatted').get(function (this: Author) {
  return this.date_of_death
    ? DateTime.fromJSDate(this.date_of_death).toLocaleString(DateTime.DATE_MED)
    : '';
});

AuthorSchema.virtual('lifespan').get(function (this: Author) {
  return `${this.date_of_birth_formatted} - ${this.date_of_death_formatted}`;
});

AuthorSchema.virtual('date_of_birth_iso').get(function (this: Author) {
  return this.date_of_birth
    ? DateTime.fromJSDate(this.date_of_birth).toISODate()
    : '';
});

AuthorSchema.virtual('date_of_death_iso').get(function (this: Author) {
  return this.date_of_death
    ? DateTime.fromJSDate(this.date_of_death).toISODate()
    : '';
});
