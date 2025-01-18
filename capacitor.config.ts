import type {CapacitorConfig} from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'detector',
  webDir: 'www',
  plugins: {
    Camera: {
      // Configuración de permisos específica del plugin de cámara
      permissions: {
        android: ['camera', 'storage'], // Permisos necesarios en Android
        ios: ['camera']                // Permisos necesarios en iOS
      }
    }
  }
};

export default config;
