///<reference path="../node_modules/@types/node/index.d.ts"/>
import {Component, OnInit} from '@angular/core';

import {Chart} from "./chart.class";
import {Song} from "./song.class";

export const SONGS:Song[] = [
    {title: "Song1", interpret: "Interpret1", album: "Album1", genre: "Techno", url: "url", soundLength: 180, relaseDate: "18.11.2021", position: 1},
    {title: "Song2", interpret: "Interpret2", album: "Album1", genre: "Rock", url: "url", soundLength: 220, relaseDate: "18.11.2021", position: 2},
    {title: "Song3", interpret: "Interpret3", album: "Album1", genre: "Techno", url: "url", soundLength: 300, relaseDate: "18.11.2021", position: 3}
];

export const CHARTS:Chart[] = [
    {
        id: 0, chartName: "Oktober", img: "glass", createDate: "18.11.2016", autor: "Mr. X", description: "Songs aus dem Oktober",
        songList: [SONGS[0], SONGS[1], SONGS[2]]
    },
    {
        id: 1, chartName: "November", img: "heart", createDate: "18.11.2016", autor: "Mr. X", description: "Songs aus dem November",
        songList: [SONGS[0], SONGS[1], SONGS[2]]
    },
    {
        id: 2, chartName: "Dezember", img: "music", createDate: "18.11.2016", autor: "Mr. XY", description: "Songs aus dem Dezember",
        songList: [SONGS[1], SONGS[2]]
    }
];

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit{
    
    charts:Chart [];
    selectedChart: Chart;
    ngOnInit():void {
        this.charts = CHARTS;
    }
    onSelect(chart:Chart):void {
        this.selectedChart = chart;
    }
}