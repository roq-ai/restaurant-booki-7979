import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrderInterface {
  id?: string;
  total_price: number;
  status: string;
  customer_id: string;
  waiter_id: string;
  created_at?: any;
  updated_at?: any;

  user_order_customer_idTouser?: UserInterface;
  user_order_waiter_idTouser?: UserInterface;
  _count?: {};
}

export interface OrderGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  customer_id?: string;
  waiter_id?: string;
}
