export type feedback = {
    id: number;
    email: string;
    rating: number;
    module: string;
    description: string;
    
    
  };
  
  export const data = [
    {
      id: 1,
      email: 'user1@gmail.com',
      rating: 5,
      module: 'HTML',
      description: 'The module is awesome.It helped...',
      
    },
    {
      id:2,
      email: 'user2@gmail.com',
      rating:4,
      module: 'CSS',
      description: 'The module is awesome.It helped...',
    },
    {
      id: 3,
      email: 'user3@gmail.com',
      rating:  3,
      module: 'React',
      description: 'The module is awesome.It helped...',
      
    },
    {
      id:4,
      email: 'user4@gmail.com',
      rating: 2,
      module: 'Javascript',
      description: 'The module is awesome.It helped...',
     
    },
    {
      id: 5,
      email: 'user5@gmail.com',
      rating: 1,
      module: 'Express',
      description: 'The module is awesome.It helped...',
      
    },
    {
      id:6,
      email: 'user6@gmail.com',
      rating: 2,
      module: 'MongoDB',
      description: 'The module is awesome.It helped...',
    },
    {
      id: 7,
      email: 'user7@gmail.com',
      rating:3,
      module: 'Data Science',
      description: 'The module is awesome.It helped...',
      
    },
  ] as feedback[];