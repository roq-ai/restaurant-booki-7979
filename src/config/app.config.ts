interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: [],
  tenantRoles: ['Owner', 'Chef', 'Waiter', 'Customer'],
  tenantName: 'Guest',
  applicationName: 'Restaurant booking and order taking system',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage users',
    'Manage guests',
    'Manage restaurants',
    'Manage menus',
    'Manage orders',
    'Manage reservations',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/97a92d7a-db60-4f7d-b3dd-06a5437f0540',
};
