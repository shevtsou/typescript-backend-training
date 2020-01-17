import {
    AwilixContainer,
    createContainer,
    InjectionMode,
    listModules,
  } from 'awilix';
  
  export default function configureContainer(): AwilixContainer {
    const container = createContainer({
      injectionMode: InjectionMode.PROXY,
    });
  
    const result = listModules('./containers/**/*.{ts,js}', { cwd: __dirname });
    result.forEach((m) => require(m.path).default(container));
  
    return container;
  }
  