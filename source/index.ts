import {LaunchType} from '@raycast/api';
import {
	CallbackLaunchOptions,
	LaunchOptions,
	crossLaunchCommand,
} from 'raycast-cross-extension';
import {Pm2Command, Pm2Process, StartOptions} from './types.js';

export async function runPm2Command(
	commandOptions: {
		command: 'start';
		options: StartOptions | Pm2Process;
	},
	LaunchOptions?: Partial<LaunchOptions>,
	callbackOptions?: CallbackLaunchOptions,
): Promise<void>;

export async function runPm2Command(
	commandOptions: {
		command: Exclude<Pm2Command, 'start'>;
		options: Pm2Process;
	},
	launchOptions?: Partial<LaunchOptions>,
	callbackOptions?: CallbackLaunchOptions,
): Promise<void>;

export async function runPm2Command(
	commandOptions: {
		command: Pm2Command;
		options: StartOptions | Pm2Process;
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
			},
		},
		callbackOptions,
	);
}

export * from './types.js';
