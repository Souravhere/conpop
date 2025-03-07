import { PrintOptions, PrintData } from './types';

export class ConsolePrinter {
  private static buildStyles(options: PrintOptions = {}): string {
    const styles: string[] = [];
    
    if (options.color) styles.push(`color: ${options.color}`);
    if (options.background) styles.push(`background: ${options.background}`);
    if (options.size) styles.push(`font-size: ${options.size}`);
    if (options.bold) styles.push('font-weight: bold');
    if (options.italic) styles.push('font-style: italic');
    
    return styles.join(';');
  }

  static print(data: PrintData): void {
    const { content, options = {} } = data;
    
    if (Array.isArray(content)) {
      console.group(`%c${content[0]}`, this.buildStyles(options));
      content.slice(1).forEach(item => {
        console.log(`%c${item}`, this.buildStyles(options));
      });
      console.groupEnd();
    } else {
      console.log(`%c${content}`, this.buildStyles(options));
    }
  }

  static clear(): void {
    console.clear();
  }
}