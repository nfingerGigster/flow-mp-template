/**
 * Atom Generator
 */

 import { Actions, PlopGeneratorConfig } from 'node-plop';
 import path from 'path';
 import inquirer from 'inquirer';
 
 import { pathExists } from '../utils';
 import { atomGeneratorPath } from '../paths';
 
 inquirer.registerPrompt('directory', require('inquirer-directory'));
 
 export enum AtomPromptNames {
   'atomName' = 'atomName',
   'path' = 'path',
 }
 
 type Answers = { [P in AtomPromptNames]: string };
 
 export const rootStatePath = path.join(
   __dirname,
   '../../../src/types/RootState.ts',
 );
 
 export const atomGenerator: PlopGeneratorConfig = {
   description: 'Add a Recoil Atom',
   prompts: [
     {
       type: 'input',
       name: AtomPromptNames.atomName,
       message: 'What should it be called (automatically adds ...Atom postfix)',
     }
   ],
   actions: data => {
     const answers = data as Answers;
     
     const atomPath = `${atomGeneratorPath}/${answers.atomName}`;
     
     if (pathExists(atomPath)) {
       throw new Error(`Atom '${answers.atomName}' already exists`);
     }
     const actions: Actions = [];
 
     actions.push({
       type: 'add',
       path: `${atomPath}/index.ts`,
       templateFile: './atom/index.ts.hbs',
       abortOnFail: true,
     });
     actions.push({
       type: 'add',
       path: `${atomPath}/selectors.ts`,
       templateFile: './atom/selectors.ts.hbs',
       abortOnFail: true,
     });
     actions.push({
       type: 'add',
       path: `${atomPath}/types.ts`,
       templateFile: './atom/types.ts.hbs',
       abortOnFail: true,
     });
     actions.push({
       type: 'prettify',
       data: { path: `${atomPath}/**` },
     });
 
     return actions;
   },
 };
 