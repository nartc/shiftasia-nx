import {
  formatFiles,
  getProjects,
  Tree,
  updateProjectConfiguration,
} from '@nrwl/devkit';
import { ConvertToPublishableGeneratorSchema } from './schema';

export default async function (
  tree: Tree,
  options: ConvertToPublishableGeneratorSchema
) {
  // await libraryGenerator(tree, {
  //   name: options.name,
  //   buildable: true,
  //   inlineTemplate: true,
  //   inlineStyle: true,
  //   standalone: true,
  // });
  //
  // updateJson(tree, `libs/${options.name}/.eslintrc.json`, (json) => {
  //   json.overrides[0].rules = {};
  //   return json;
  // });

  const projects = getProjects(tree);

  for (const [projectName, projectConfiguration] of projects.entries()) {
    if (
      projectConfiguration.projectType === 'application' ||
      !projectConfiguration.targets['build'] ||
      projectConfiguration.targets['build'].executor !==
        '@nrwl/angular:ng-packagr-lite'
    ) {
      continue;
    }

    if (projectName === 'model') {
      continue;
    }

    updateProjectConfiguration(tree, projectName, {
      ...projectConfiguration,
      targets: {
        ...projectConfiguration.targets,
        build: {
          ...projectConfiguration.targets['build'],
          executor: '@nrwl/angular:package',
        },
      },
    });
  }
  //
  await formatFiles(tree);
}
