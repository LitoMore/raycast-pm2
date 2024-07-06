export type {StartOptions} from 'pm2';

export type ProcessStatus =
	| 'online'
	| 'stopping'
	| 'stopped'
	| 'launching'
	| 'errored'
	| 'one-launch-status';

export type Pm2Command = 'start' | 'stop' | 'restart' | 'reload' | 'delete';

export type Pm2Process = number | string;
