import { Repository } from '../models/repository.interface';
import { USER_LIST } from './user.mocks';

const repositoryList: Repository[] = [
  {
    name: `Ionic 3`,
    description: `Amazing framework`,
    owner: USER_LIST[0]
  }
];

export const REPOSITORY_LIST = repositoryList;