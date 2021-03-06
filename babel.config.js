module.exports = function (api) {
	api.cache(true)
	return {
		presets: [
			["@babel/typescript", {
				onlyRemoveTypeImports: true,
				// parses js files as typescript
				// not for actually writing typescript in js files (IDEs should complain anyways), but useful for allowing modern syntax in js files
				allExtensions: true,
				allowDeclareFields: true,
			}],
			["@babel/env", {
				bugfixes: true,
				useBuiltIns: "usage",
				corejs: "3.0.0",
				// target should be set by using browserslist in the package.json
			}],
		],
		plugins: [
			["module-resolver", {
				root: ["../"],
				alias: {
					"@": "./src",
					"@tests": "./tests",
					"@utils": "@alanscodelog/utils/dist",
				},
			}],
			"@babel/plugin-proposal-class-properties",
			"@babel/plugin-proposal-export-namespace-from",
		],
		env: {
			modern: {
				presets: [
					["@babel/env", {
						modules: false,
						targets: {
							esmodules: true,
							node: "14",
						},
					}],
				],
			},
		},
	}
}
