declare namespace NodeJS {
  interface ProcessEnv {
    readonly REACT_APP_URL: string;
    readonly REACT_APP_API_URL: string;
  }
}

declare module 'react-document-meta' {
  export interface DocumentMetaProps {
    title?: string | ((prev: string) => string);
    description?: string | ((prev: string) => string);
    canonical?: string | ((prev: string) => string);
    base?: string;
    meta?: Record<string, string | Record<string, string | string[]>>;
    link?: Record<string, Record<string, string | string[]>>;
    auto?: Record<string, boolean>;
    extend?: boolean;
  }

  export default class DocumentMeta extends React.Component<DocumentMetaProps> {}
}
