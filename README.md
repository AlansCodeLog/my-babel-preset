My preferred babel config (as a preset).

# Install

```bash
yarn add -D @alanscodelog/babel-preset \\
@babel/cli \\
@babel/core \\
@babel/node \\
@babel/preset-env \\
@babel/preset-typescript \\
@babel/plugin-proposal-class-properties \\
babel-plugin-module-resolver
```

Set babel config and `browserslist` (targets for `@babel/preset-env` are unset) in `package.json`.
```json
// package.json
"babel":{ "presets":["@alanscodelog"] },
"browserslist": "...",
```
