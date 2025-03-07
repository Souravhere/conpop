export interface PrintOptions {
    color?: string;
    background?: string;
    size?: string;
    bold?: boolean;
    italic?: boolean;
  }
  
  export interface PrintData {
    content: string | string[];
    options?: PrintOptions;
  }