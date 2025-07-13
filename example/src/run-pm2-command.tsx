import path from 'node:path';
import {LaunchType, environment} from '@raycast/api';
import {runPm2Command} from 'raycast-pm2';

export default async function RunPm2Command() {
	await runPm2Command(
		{
			command: 'start',
			options: {
				script: path.join(environment.assetsPath, 'scripts/example.js'),
				name: 'test-from-raycast-pm2',
			},
		},
		{},
		{
			name: 'main',
			type: LaunchType.UserInitiated,
			extensionName: 'pm2',
			ownerOrAuthorName: 'litomore',
		},
	);
}
