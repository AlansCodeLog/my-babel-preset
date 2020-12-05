[![Release](https://github.com/alanscodelog/my-babel-preset/workflows/Release/badge.svg)](https://www.npmjs.com/package/@alanscodelog/babel-preset)

My preferred babel config (as a preset).

# Install

```bash
yarn add -D @alanscodelog/babel-preset \\
@babel/core \\
@babel/preset-env \\
@babel/preset-typescript \\
@babel/plugin-proposal-class-properties \\
@babel/plugin-proposal-export-namespace-from \\
babel-plugin-module-resolver \\
```

Set babel config and `browserslist` (targets for `@babel/preset-env` are unset) in `package.json`.
```json
// package.json
"babel":{ "presets":["@alanscodelog"] },
"browserslist": "...",
```