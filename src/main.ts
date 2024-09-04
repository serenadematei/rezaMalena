import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

//import { environment } from './environments/environment';
//import { provideFirebaseApp,initializeApp } from '@angular/fire/app';
//import { initializeApp } from "firebase/app";
import { environment } from './environments/environment';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';



//initializeApp(environment.firebase);


bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
  ],
});
