/// <reference types="vite/client" />

interface ViteTypeOptions {
    strictImportMetaEnv: unknown;
}

interface ImportMetaEnv {
    readonly VITE_PORT: string;
    readonly VITE_SERVER_PORT: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
