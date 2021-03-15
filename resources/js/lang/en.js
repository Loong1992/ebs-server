export default {
  route: {
    dashboard: 'Dashboard',
    userProfile: 'User Profile',
    permission: 'Permission',
    pagePermission: 'Page Permission',
    directivePermission: 'Directives',
    rolePermission: 'Role Permission',
    administrator: 'Administrator',
    users: 'Users',
    errorPages: 'Error Pages',
    page401: '401',
    page404: '404',
    ebs: 'Enggang Battery Supplies',
    batteries: 'Battery',
    batteryManufacturers: 'Battery Manufacturer',
    cars: 'Car',
    carManufacturers: 'Car Manufacturer',
    clients: 'Client',
  },

  navbar: {
    logOut: 'Log Out',
    dashboard: 'Dashboard',
    github: 'Github',
    theme: 'Theme',
    size: 'Global Size',
    profile: 'Profile',
  },

  login: {
    title: 'Login Form',
    logIn: 'Log in',
    username: 'Username',
    password: 'Password',
    any: 'any',
    thirdparty: 'Or connect with',
    thirdpartyTips: 'Can not be simulated on local, so please combine you own business simulation! ! !',
    email: 'Email',
  },

  permission: {
    addRole: 'New Role',
    editPermission: 'Edit Permission',
    roles: 'Your roles',
    switchRoles: 'Switch roles',
    tips: 'In some cases it is not suitable to use v-role/v-permission, such as element Tab component or el-table-column and other asynchronous rendering dom cases which can only be achieved by manually setting the v-if with checkRole or/and checkPermission.',
    delete: 'Delete',
    confirm: 'Confirm',
    cancel: 'Cancel',
  },

  table: {
    description: 'Description',
    dynamicTips1: 'Fixed header, sorted by header order',
    dynamicTips2: 'Not fixed header, sorted by click order',
    dragTips1: 'The default order',
    dragTips2: 'The after dragging order',
    name: 'Name',
    title: 'Title',
    importance: 'Imp',
    type: 'Type',
    remark: 'Remark',
    search: 'Search',
    add: 'Add',
    export: 'Export',
    reviewer: 'reviewer',
    id: 'ID',
    date: 'Date',
    author: 'Author',
    readings: 'Readings',
    status: 'Status',
    actions: 'Actions',
    edit: 'Edit',
    publish: 'Publish',
    draft: 'Draft',
    delete: 'Delete',
    cancel: 'Cancel',
    confirm: 'Confirm',
    keyword: 'Keyword',
    role: 'Role',
  },

  tagsView: {
    refresh: 'Refresh',
    close: 'Close',
    closeOthers: 'Close Others',
    closeAll: 'Close All',
  },

  settings: {
    title: 'Page style setting',
    theme: 'Theme Color',
    tagsView: 'Open Tags-View',
    fixedHeader: 'Fixed Header',
    sidebarLogo: 'Sidebar Logo',
  },

  roles: {
    description: {
      admin: 'Super Administrator. Have access and full permission to all pages.',
      manager: 'Manager. Have access and permission to most of pages except permission page.',
      editor: 'Editor. Have access to most of pages, full permission with articles and related resources.',
      user: 'Normal user. Have access to some pages',
      visitor: 'Visitor. Have access to static pages, should not have any writable permission',
    },
  },

  ebs: {
    model: 'Model',
    modelReference: 'Model Reference',
    manufacturer: 'Manufacturer',
    logo: 'Logo',
    type: 'Type',
    series: 'Series',
    price: 'Price',
    warranty: 'Warranty',
    tradeIn: 'Trade-in',
    stock: 'Stock',
    client: {
      car: 'Car',
      battery: 'Battery',
      handphoneNumber: 'Handphone No.',
      totalVisits: 'Visits',
      totalTransactions: 'Transactions',
      serviceDifficulty: 'Service Difficulty',
      paymentMethod: 'Payment Method',
      servicePoints: 'Service Points',
      description: 'Description',
      firstVisitAt: 'First Visit At',
      lastVisitAt: 'Last Visit At',
      discount: 'Discount',
    },
  },
};
