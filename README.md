1. Create an MVP for https://xd.adobe.com/view/*****

2. Use NGRX store to store data for each step and create nested structure wherever applicable.

3. DO NOT HARDCODE anything inside component or template files. 
Use https://github.com/typicode/json-server to create a fake json server which will eventually 
make the store as a source of truth for data.

4. The Auth module you create for this should be lazy loaded.

5. We will evaluate on following:
- Store Design
- Typescript
- Application Structure(Modules)
- Well Organised Components - Smart and Dumb Components
- Components having onPush ChangeDetection.

6. Do not use any third party libraries.
___________________
DEV
1. ng deploy --base-href=https://vg1ne.github.io/ngrxAuth/ 
https://www.npmjs.com/package/angular-cli-ghpages#configuration-file


