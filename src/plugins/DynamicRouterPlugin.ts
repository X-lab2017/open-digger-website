import path from 'path';
import { normalizeUrl, posixPath } from '@docusaurus/utils';
import { LoadContext, Plugin } from '@docusaurus/types';

export default function DynamicRouterPlugin(context: LoadContext, options: { name: string; urlPath: string; component: string }): Plugin {
  const { name, urlPath, component } = options;
  return {
    name,
    contentLoaded: async ({ actions }) => {
      const basePath = normalizeUrl([context.baseUrl, urlPath]);
      const paths = await actions.createData(
        'paths.json',
        JSON.stringify(basePath),
      );

      const aliasedSource = (source) =>
        `@generated/${posixPath(
          path.relative(context.generatedFilesDir, source),
        )}`;

      actions.addRoute({
        path: basePath,
        exact: false,
        component,
        modules: {
          basePath: aliasedSource(paths),
        },
      });
    },
  };
}
