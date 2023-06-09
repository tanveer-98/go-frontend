/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_FB_APIKEY: string
    readonly VITE_EMAIL_APIKEY : string;
    // more env variables...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }