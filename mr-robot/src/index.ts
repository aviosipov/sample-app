import { registerPlugin } from '@capacitor/core';

import type { MrRobotPlugin } from './definitions';

const MrRobot = registerPlugin<MrRobotPlugin>('MrRobot', {
  web: () => import('./web').then(m => new m.MrRobotWeb()),
});

export * from './definitions';
export { MrRobot };
