[![Release](https://github.com/alanscodelog/my-babel-preset/workflows/Release/badge.svg)](https://www.npmjs.com/package/@alanscodelog/babel-preset)

My preferred babel config (as a preset) for transpiling typescript with path alias\* support and optional es modules support\*\*.

\* `@/`, `@tests`, and `@utils` (for my [utils package](https://github.com/alanscodelog/my-utils)).
\*\* Requires use of my other package [dts-alias](https://github.com/alanscodelog/dts-alias) if using tsc to output types.

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

# Usage

Set babel config and `browserslist` (targets for `@babel/preset-env` are unset) in `package.json`.
```json
// package.json
"babel":{ "presets":["@alanscodelog"] },
"browserslist": "...",
```

## ES Modules

Can optionally output es modules by adding `--env-name modern` to the end of the babel command.
