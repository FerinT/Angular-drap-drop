import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app_module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);