// JavaScript
const { ConsolePrinter } = require('pretty-console');

const data = {
  content: ['Group Title', 'Item 1', 'Item 2'],
  options: {
    color: 'blue',
    size: '16px',
    bold: true
  }
};

ConsolePrinter.print(data);
ConsolePrinter.clear();