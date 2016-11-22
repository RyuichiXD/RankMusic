import {Component, Input} from '@angular/core';
import {Chart} from "./chart.class";
import {Song} from "./song.class";
import {SONGS} from "./app.component";

@Component({
    moduleId: module.id,
    selector: 'chart-detail',
    templateUrl: 'chart-detail.component.html'
})
export class ChartDetailComponent {
    @Input() chart:Chart;

    songs:Song [];
    selectedSong: Song;
    
    onSelect(song:Song):void {
        this.selectedSong = song;
    }
}
