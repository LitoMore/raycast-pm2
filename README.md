# raycast-pm2

PM2 utilities for Raycast Extensions

[![raycast-cross-extension-badge]][raycast-cross-extension-link]

## Install

```shell
npm i raycast-pm2
```

## Usages

This package follows [Raycast Cross-Extension Conventions][raycast-cross-extension-link].

The extension API command is disabled by default. Remember to enable it from your extension configuration before using.

### Example

```typescript
import path from "node:path";
import { LaunchType, environment } from "@raycast/api";
import { runPm2Command } from "raycast-pm2";

runPm2Command(
	{
		command: "start",
		options: {
			script: path.join(environment.assetsPath, "path-to/your-script.js"),
			name: "your-script",
		},
	},
	{},
	{
		name: "main",
		type: LaunchType.UserInitiated,
		extensionName: "pm2",
		ownerOrAuthorName: "litomore",
	},
);
```

## API

### runPm2Command(commandOptions, launchOptions?, callbackOptions?)

#### commandOptions

Options for running PM2 command. Possible commands are `start`, `stop`, `restart`, `reload`, and `delete`.

#### launchOptions

Type: `Partial<LaunchOptions>`

Optional. Options for launch the target command. It has default values for launching the [PM2 extension](https://raycast.com/litomore/pm2):

- `name` defaults to `api`
- `type` defaults to `LaunchType.Background`
- `extensionName` defaults to `pm2`
- `ownerOrUserName` defaults to `litomore`

#### callbackOptions

Same as the `raycast-cross-extension`'s [`callbackOptions`](https://github.com/LitoMore/raycast-cross-extension-conventions?tab=readme-ov-file#callbackoptions).

## Related

- [Raycast PM2](https://raycast.com/litomore/pm2) - Manage even run your Node.js processes through Raycast

## License

CC0-1.0

[raycast-cross-extension-badge]: https://shields.io/badge/Raycast-Cross--Extension-eee?labelColor=FF6363&logo=raycast&logoColor=fff&style=flat-square
[raycast-cross-extension-link]: https://github.com/LitoMore/raycast-cross-extension-conventions
