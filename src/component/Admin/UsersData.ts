export type Users = {
  id: number;
  username: string;
  email: string;
  datecreated: Date;
  mobileno: string;
  type: string;
  
  
};

export const data = [
  {
    id: 1,
    username: 'user 1',
    email: 'user1@gmail.com',
    datecreated: new Date('2022-01-01'),
    mobileno: '9054445475',
    type: 'Learner',
    
  },
  {
    id:2,
    username: 'user 2',
    email: 'user2@gmail.com',
    datecreated:new Date('2022-02-11'),
    mobileno: '9054445475',
    type: 'Content Writer',
  },
  {
    id: 3,
    username: 'user 3',
    email: 'user3@gmail.com',
    datecreated:  new Date('2022-07-07'),
    mobileno: '9054445475',
    type: 'Mentor',
    
  },
  {
    id:4,
    username: 'user 4',
    email: 'user4@gmail.com',
    datecreated: new Date('2022-10-21'),
    mobileno: '9054445475',
    type: 'Learner',
   
  },
  {
    id: 5,
    username: 'user 5',
    email: 'user5@gmail.com',
    datecreated: new Date('2022-09-09'),
    mobileno: '9054445475',
    type: 'Mentor',
    
  },
  {
    id:6,
    username: 'user 6',
    email: 'user6@gmail.com',
    datecreated: new Date('2022-08-29'),
    mobileno: '9054445475',
    type: 'Content Writer',
  },
  {
    id: 7,
    username: 'user 7',
    email: 'user7@gmail.com',
    datecreated:new Date('2022-04-17'),
    mobileno: '9054445475',
    type: 'Learner',
    
  },
] as Users[];