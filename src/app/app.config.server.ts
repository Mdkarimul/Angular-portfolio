import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
<<<<<<< HEAD
import { provideServerRendering } from '@angular/platform-server';
=======
//  import { provideServerRendering } from '@angular/platform-server';
>>>>>>> 39544537facb2c98129f97ba225b9cd092140912
import { appConfig } from './app.config';

const serverConfig: ApplicationConfig = {
  providers: [
<<<<<<< HEAD
    provideServerRendering()
=======
    //  provideServerRendering()
>>>>>>> 39544537facb2c98129f97ba225b9cd092140912
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
