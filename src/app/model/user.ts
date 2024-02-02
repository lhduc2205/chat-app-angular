import { type ActivityStatus } from './activity-status';

export interface User {
    firstName: string;
    lastName: string;
    username: string;
    status: ActivityStatus;
}
