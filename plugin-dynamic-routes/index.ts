module.exports = (_context: any, options: any) => {
  return {
    name: 'plugin-dynamic-routes',
    async contentLoaded({ _content, actions }) {
      const { routes } = options;
      const { addRoute } = actions;
      routes.map(route => addRoute(route));
    },
  };
};
