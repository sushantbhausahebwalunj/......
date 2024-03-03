export type Articles = {
    id: number;
    article: string;
    author: string;
    domain: string;
    subdomain: string;
    date: Date;
    status: string;
    
    
  };
  
  export const data = [
    {
      id: 1,
      article: 'Article 1',
      author: 'author 1',
      domain: 'domain 1',
      subdomain: 'subdomain 1',
      date: new Date('2022-01-01'),
      status: 'Approved',
      
    },
    {
      id:2,
      article: 'Article 2',
      author: 'author 2',
      domain: 'domain 2',
      subdomain: 'subdomain 2',
      date: new Date('2022-02-11'),
      status: 'Pending',
    },
    {
      id: 3,
      article: 'Article 3',
      author: 'author 3',
      domain: 'domain 3',
      subdomain: 'subdomain 3',
      date: new Date('2022-10-21'),
      status: 'Pending',
      
    },
    {
      id:4,
      article: 'Article 4',
      author: 'author 4',
      domain: 'domain 4',
      subdomain: 'subdomain 4',
      date: new Date('2022-09-09'),
      status: 'Approved',
     
    },
    {
      id: 5,
      article: 'Article 5',
      author: 'author 5',
      domain: 'domain 5',
      subdomain: 'subdomain 5',
      date: new Date('2022-08-29'),
      status: 'Approved',
      
    },
    {
      id:6,
      article: 'Article 6',
      author: 'author 6',
      domain: 'domain 6',
      subdomain: 'subdomain 6',
      date: new Date('2022-04-17'),
      status: 'Pending',
    },
    {
      id: 7,
      article: 'Article 7',
      author: 'author 7',
      domain: 'domain 7',
      subdomain: 'subdomain 7',
      date: new Date('2022-07-07'),
      status: 'Approved',
      
    },
  ] as Articles[];