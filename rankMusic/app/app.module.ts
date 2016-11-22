import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {ChartDetailComponent} from "./chart-detail.component";
import {FormsModule} from "@angular/forms";
import {SongDetailComponent} from "./song-detail.component";

@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [
        AppComponent,
        ChartDetailComponent,
        SongDetailComponent
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
