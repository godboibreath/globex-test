/// <reference types="vite/client" />

interface ViteTypeOptions {
    strictImportMetaEnv: unknown;
}

interface ImportMetaEnv {
    readonly PORT: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
