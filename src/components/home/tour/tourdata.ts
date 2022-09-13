export interface TourdataProps {
    id: number;
    title: string;
    type: 'string' | 'button';
    des?: string;
    btn: string;
    date: number;
    month: string;
  }

  export const tourdata: Array<TourdataProps> = [
    {
        id: 1,
        date: 28,
        month: 'OCT',
        title: 'MELBOURNE, AUSTRALIA',
        des: 'MARVEL STADIUM',
        btn: 'BUY TICKETS',
        type: 'string',
    },
    {
        id: 2,
        date: 20,
        month: 'NOV',
        title: 'AUCKLAND, NEW ZEALAND',
        des: 'MT. SMART STADIUM',
        btn: 'BUY TICKETS',
        type: 'string',
    },
    {
        id: 3,
        date: 15,
        month: 'APR',
        title: 'SANTIAGO, CHILE',
        des: 'ESTADIO NACIONAL',
        btn: 'TICKETS SOLDOUT',
        type: 'string',
    },
    {
        id: 4,
        date: 18,
        month: 'APR',
        title: 'BUENOS AIRES, ARGENTINA',
        des: 'CAMPO ARGENTINO DE POLO',
        btn: 'BUY TICKETS',
        type: 'string',
    },
    {
        id: 5,
        date: 25,
        month: 'AUG',
        title: 'CURTIBA, BRAZIL',
        des: 'ESTADIO COUTO PEREIRA',
        btn: 'TICKETS SOLD OUT',
        type: 'string',
    },
    {
        id: 6,
        date: 11,
        month: 'SEP',
        title: 'SAO PAULO, BRAZIL',
        des: 'ESTADIO DO MORUMBI',
        btn: 'BUY TICKETS',
        type: 'string',
    },
  ];