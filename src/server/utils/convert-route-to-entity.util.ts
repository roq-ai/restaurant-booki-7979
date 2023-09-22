const mapping: Record<string, string> = {
  guests: 'guest',
  menus: 'menu',
  orders: 'order',
  reservations: 'reservation',
  restaurants: 'restaurant',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
