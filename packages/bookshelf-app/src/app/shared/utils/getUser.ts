import { User } from '../../models/User';
export const getUser = (): User => JSON.parse(localStorage.getItem('user'));
