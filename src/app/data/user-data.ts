import { ActivityStatus } from '../model/activity-status';
import { type User } from '../model/user';

export const userData: User[] = [
    {
        firstName: 'Duc',
        lastName: 'Le',
        username: 'lhduc2205@gmail.com',
        status: ActivityStatus.Offline,
    },
    {
        firstName: 'Anh',
        lastName: 'Nguyen',
        username: 'nguyenanh@github.com',
        status: ActivityStatus.Offline,
    },
    {
        firstName: 'Yoko',
        lastName: '',
        username: 'yoko39',
        status: ActivityStatus.Offline,
    },
];
