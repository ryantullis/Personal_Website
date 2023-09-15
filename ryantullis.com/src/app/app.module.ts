import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import app.material.module.ts
 import { MaterialModule } from './material.module';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
//ng-icons
import { NgIconsModule } from '@ng-icons/core';
import { ionLogoGithub,ionLogoLinkedin } from '@ng-icons/ionicons';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgIconsModule.withIcons({ ionLogoGithub,ionLogoLinkedin }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
