import mongoose from "mongoose";

import { Schema } from "mongoose";

interface User {
  firstName: string;
  age: number;
  tagFirst: string;
  tagSecond: string;
  tagThird: string;
  hash: string;
}

export const UserSchema = new Schema<User>({
  firstName: {
    type: String,
    required: true,
    minLength: [2, "It should be at least two characters"],
    maxLength: [20, "Name should not be longer then 10 characters"],
  },
  age: {
    type: Number,
    required: true,
    min: [13, "Age must be 13 or above"],
    max: [100, "Are you sure you are {VALUE} years old?"],
  },
  tagFirst: {
    type: String,
    required: true,
    minLength: [2, "It should be at least two characters"],
    maxLength: [10, "Tag should not be longer then 10 characters"],
  },
  tagSecond: {
    type: String,
    required: true,
    minLength: [2, "It should be at least two characters"],
    maxLength: [10, "Tag should not be longer then 10 characters"],
  },
  tagThird: {
    type: String,
    required: true,
    minLength: [2, "It should be at least two characters"],
    maxLength: [10, "Tag should not be longer then 10 characters"],
  },
  hash: { type: String, required: true },
});

const User = mongoose.model<User>("User", UserSchema);
export default User;
