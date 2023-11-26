export interface MrRobotPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
