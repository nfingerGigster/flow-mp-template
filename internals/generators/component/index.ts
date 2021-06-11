/**
 * Component Generator
 */

import { Actions, PlopGeneratorConfig } from 'node-plop';
import inquirer from 'inquirer';

import { pathExists } from '../utils';
import { baseGeneratorPath } from '../paths';

inquirer.registerPrompt('directory', require('inquirer-directory'));

export enum ComponentPromptNames {
  componentName = 'componentName',
  path = 'path',
  wantMemo = 'wantMemo',
  wantStyledComponents = 'wantStyledComponents',
  wantTranslations = 'wantTranslations',
  wantLoadable = 'wantLoadable',
  wantTests = 'wantTests',
}

type Answers = { [P in ComponentPromptNames]: string };

export const componentGenerator: PlopGeneratorConfig = {
  description: 'Add a component',
  prompts: [
    {
      type: 'input',
      name: ComponentPromptNames.componentName,
      message: 'What should it be called?',
    },
    {
      type: 'directory',
      name: ComponentPromptNames.path,
      message: 'Where do you want it to be created?',
      basePath: `${baseGeneratorPath}`,
    } as any,
    {
      type: 'confirm',
      name: ComponentPromptNames.wantMemo,
      default: false,
      message: 'Do you want to wrap your component in React.memo?',
    },
    {
      type: 'confirm',
      name: ComponentPromptNames.wantStyledComponents,
      default: true,
      message: 'Do you want to use styled-components?',
    },
    {
      type: 'confirm',
      name: ComponentPromptNames.wantTranslations,
      default: false,
      message:
        'Do you want i18n translations (i.e. will this component use text)?',
    },
    {
      type: 'confirm',
      name: ComponentPromptNames.wantLoadable,
      default: false,
      message: 'Do you want to load the component asynchronously?',
    },
    {
      type: 'confirm',
      name: ComponentPromptNames.wantTests,
      default: false,
      message: 'Do you want to have tests?',
    },
  ],
  actions: data => {
    const answers = data as Answers;

    const componentPath = `${baseGeneratorPath}/${answers.path}/{{properCase ${ComponentPromptNames.componentName}}}`;
    const actualComponentPath = `${baseGeneratorPath}/${answers.path}/${answers.componentName}`;

    if (pathExists(actualComponentPath)) {
      throw new Error(`Component '${answers.componentName}' already exists`);
    }
    const actions: Actions = [
      {
        type: 'add',
        path: `${componentPath}/index.tsx`,
        templateFile: './component/index.tsx.hbs',
        abortOnFail: true,
      },
    ];

    if (answers.wantLoadable) {
      actions.push({
        type: 'add',
        path: `${componentPath}/Loadable.ts`,
        templateFile: './component/loadable.ts.hbs',
        abortOnFail: true,
      });
    }

    if (answers.wantTests) {
      actions.push({
        type: 'add',
        path: `${componentPath}/__tests__/index.test.tsx`,
        templateFile: './component/index.test.tsx.hbs',
        abortOnFail: true,
      });
    }

    if (answers.wantTranslations) {
      actions.push({
        type: 'add',
        path: `${componentPath}/messages.ts`,
        templateFile: './component/messages.ts.hbs',
        abortOnFail: true,
      });
    }

    actions.push({
      type: 'prettify',
      data: { path: `${actualComponentPath}/**` },
    });

    return actions;
  },
};
