import {LaunchType} from '@raycast/api';
import {
	CallbackLaunchOptions,
	LaunchOptions,
	crossLaunchCommand,
} from 'raycast-cross-extension';
import {Pm2Command, Pm2Process, RuntimeOptions, StartOptions} from './types.js';

export async function runPm2Command(
	commandOptions: {
		command: 'start';
		options: StartOptions | Pm2Process;
		runtimeOptions?: RuntimeOptions;
	},
	LaunchOptions?: Partial<LaunchOptions>,
	callbackOptions?: CallbackLaunchOptions,
): Promise<void>;

export async function runPm2Command(
	commandOptions: {
		command: Exclude<Pm2Command, 'start'>;
		options: Pm2Process;
		runtimeOptions?: RuntimeOptions;
	},
	launchOptions?: Partial<LaunchOptions>,
	callbackOptions?: CallbackLaunchOptions,
): Promise<void>;

export async function runPm2Command(
	commandOptions: {
		command: Pm2Command;
		options: StartOptions | Pm2Process;
		runtimeOptions?: RuntimeOptions;
	},
	launchOptions?: Partial<LaunchOptions>,
	callbackOptions?: CallbackLaunchOptions,
) {
	await crossLaunchCommand(
		{
			name: 'api',
			type: LaunchType.Background,
			extensionName: 'pm2',
			ownerOrAuthorName: 'litomore',
			...launchOptions,
			context: {
				...launchOptions?.context,
				command: commandOptions.command,
				options: commandOptions.options,
				runtimeOptions: commandOptions.runtimeOptions,
			},
		},
		callbackOptions,
	);
}

export * from './types.js';
