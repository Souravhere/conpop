# ConPop - Pop Some Color into Your Console!

A fun, lightweight library to make your console logs burst with style! Created by Sourav Chhimpa for coders who want their logs to pop with personality. Whether you're debugging or just flexing your flair, ConPop’s got your back—works everywhere JavaScript does!

## Installation

Pop it into your project with one command:

```bash
npm install @souravchhimpa1/conpop
```

## Usage

Turn boring logs into eye-candy with just a few lines. Check out these vibes:

### JavaScript Vibes

```javascript
const { ConsolePrinter } = require('@souravchhimpa1/conpop');

const data = {
    content: ['Party Time!', 'Dance', 'Groove'],
    options: {
        color: 'hotpink',
        size: '18px',
        bold: true
    }
};

ConsolePrinter.print(data); // Logs go *POP*!
ConsolePrinter.clear(); // Wipe the dance floor clean!
```

### TypeScript Swagger

```typescript
import { ConsolePrinter, PrintData } from '@souravchhimpa1/conpop';

const data: PrintData = {
    content: 'Hello, World!',
    options: {
        color: 'limegreen',
        background: 'black',
        size: '20px',
        italic: true
    }
};

ConsolePrinter.print(data); // Boom—styled logs!
```

## Features That Pop

- **Color Explosion**: Add hues, backgrounds, and sizes to your logs.
- **Group Groove**: Print arrays as collapsible console groups.
- **Type-Safe Fun**: Full TypeScript support for smooth coding.
- **Framework Party**: Works with React, Node, Vue, Angular—any JS gig!
- **No Baggage**: Zero dependencies, super light.

## Quick Start

1. Install with `npm install @souravchhimpa1/conpop`.
2. Import `ConsolePrinter` and toss in your data.
3. Watch your console light up like a disco ball!

### Example: Party Mode

```javascript
ConsolePrinter.print({
    content: ['DISCO', 'Let’s', 'Dance!'],
    options: { color: 'purple', size: '16px', bold: true }
});
```

## Why ConPop?

Because plain logs are meh, and you deserve wow! This is a passion project by Sourav Chhimpa to sprinkle some fun into the dev world. Built with ❤️ and a dash of mischief.

## License

MIT - Free to remix, share, and pop off however you like!

## Say Hi!

Got ideas to make ConPop pop harder? Hit me up:

- [thenextlabs.com](https://thenextlabs.com)
- npm: [@souravchhimpa1](https://www.npmjs.com/~souravchhimpa1)

Let’s make coding colorful together!

## Notes

Update your `package.json` with:

```json
{
    "name": "@souravchhimpa1/conpop",
    "version": "1.0.0",
    "main": "dist/index.js",
    "types": "dist/index.d.ts",
    "author": "Sourav Chhimpa <your-email@example.com> (https://thenextlabs.com)",
    "repository": "https://github.com/souravchhimpa1/conpop"
}
```

Publish it:

```bash
npm run build
npm publish --access public
```
