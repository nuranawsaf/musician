export interface NavdataProps {
    id: number;
    title: string;
    type: 'link' ;
    href?: string;
  }

  export const navdata: Array<NavdataProps> = [
    {
        id: 1,
        title: 'Home',
        type: 'link',
        href: '/',
      },
      {
        id: 2,
        title: 'About',
        type: 'link',
        href: '#about',
      },
      {
        id: 3,
        title: 'Tour Dates',
        type: 'link',
        href: '#tour',
      },
      {
        id: 4,
        title: 'Discography',
        type: 'link',
        href: '#discography',
      },
      {
        id: 5,
        title: 'Contact',
        type: 'link',
        href: '/contact',
      },
  ];