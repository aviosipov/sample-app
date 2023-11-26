import { WebPlugin } from '@capacitor/core';

import type { MrRobotPlugin } from './definitions';

export class MrRobotWeb extends WebPlugin implements MrRobotPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
