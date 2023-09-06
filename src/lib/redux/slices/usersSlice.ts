import { createSlice } from '@reduxjs/toolkit';

import { User } from '@/interfaces';
import users from '@/data/users.json';

export interface UsersSliceState extends Array<User> {}

export const usersSlice = createSlice({
  name: 'users',
  initialState: users,
  reducers: {}
});