import { MenuInterface } from 'interfaces/menu';
import { ReservationInterface } from 'interfaces/reservation';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface RestaurantInterface {
  id?: string;
  name: string;
  address: string;
  capacity: number;
  owner_id: string;
  created_at?: any;
  updated_at?: any;
  menu?: MenuInterface[];
  reservation?: ReservationInterface[];
  user?: UserInterface;
  _count?: {
    menu?: number;
    reservation?: number;
  };
}

export interface RestaurantGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  address?: string;
  owner_id?: string;
}
