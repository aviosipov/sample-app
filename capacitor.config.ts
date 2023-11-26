import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.comax.captest',
  appName: 'cap-test-app',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
