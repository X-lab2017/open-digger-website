module.exports = (context: any, options: any) => {
  const defaultLocale = context.i18n.defaultLocale;
  const currentLocal = context.i18n.currentLocale;
  if (defaultLocale !== currentLocal) {
    // handle i18n
    options.routes[0].path = `/${currentLocal}${options.routes[0].path}`;
  }
  if (process.env.PULL_NUM) {
    // handle preview
    options.routes[0].path = `/pull_${process.env.PULL_NUM}${options.routes[0].path}`;
  }
  console.log(options.routes[0].path);
  return {
    name: 'plugin-dynamic-routes',
    async contentLoaded({ _content, actions }) {
      const { routes } = options;
      const { addRoute } = actions;
      routes.map(route => addRoute(route));
    },
  };
};
