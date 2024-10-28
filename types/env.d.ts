// types/env.d.ts
declare global {
    namespace NodeJS {
      interface ProcessEnv {
        NOTION_TOKEN: string;
        DATABASE_ID: string;
        [key: string]: string | undefined;
      }
    }
  }
  
  export {};