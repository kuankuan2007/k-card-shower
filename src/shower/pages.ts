const pageConfig: PageConfig = {
  pageList: {
    welcome: async () => (await import('@/pages/welcome/index.ts')).default,
    '404': async () => (await import('@/pages/404/index.ts')).default,
  },
};
export default pageConfig;
