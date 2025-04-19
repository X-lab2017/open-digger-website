import { LoadContext, Plugin, RouteConfig } from '@docusaurus/types';

type DynamicRouterPluginOptions = {
  routes: Array<RouteConfig & {
    params?: Array<Record<string, string>>;
  }>;
};

export default function DynamicRouterPlugin(context: LoadContext, options: DynamicRouterPluginOptions): Plugin {
  return {
    name: 'dynamic-router-plugin',
    contentLoaded: async ({ actions }) => {
      const { routes } = options;
      const { addRoute } = actions;

      routes.forEach(routeOption => {
        const { params, ...route } = routeOption;

        if (params != null) {
          params.forEach(param => {
            let { path, ...rest } = route;
            Object.entries(param).forEach(([k, v]) => {
              path = (path).replace(':' + k, String(v));
            });
            addRoute({ path, ...rest });
          });
        }
        addRoute(route);
      });
    },
  };
}
