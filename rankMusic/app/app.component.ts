/**
 * a sample component using the my-app directive
 * @author Samed Sulanc, Clemens Buckert
 */
import { Component } from '@angular/core';
//Für die Listenausgabe
import {Song} from "./song.model";
import {Chart} from './chart.model';



export const SONGS: Song[] = [
  {
    title: "Song1",
    interpret: "Interpret1",
    album: "Album1",
    genre: "Techno",
    url: "url",
    soundLength: 180,
    relaseDate: "18.11.2021",
    position: 1
  },
  {
    title: "Song2",
    interpret: "Interpret2",
    album: "Album1",
    genre: "Rock",
    url: "url",
    soundLength: 220,
    relaseDate: "18.11.2021",
    position: 2
  },
  {
    title: "Song3",
    interpret: "Interpret3",
    album: "Album1",
    genre: "Techno",
    url: "url",
    soundLength: 300,
    relaseDate: "18.11.2021",
    position: 3
  }
  ];

export const SONGCHARTS: Chart[] = [
  {
    id: 0,
    chartName: "November",
    img: "some Image",
    createDate:"18.11.2016",
    autor: "Mr. X",
    description: "Songs aus dem November",
    songList: [SONGS[0],SONGS[1],SONGS[2]]
  },
  {
    id: 1,
    chartName: "Dezember",
    img: "some Image",
    createDate:"18.11.2016",
    autor: "Mr. XY",
    description: "Songs aus dem Dezember",
    songList: [SONGS[1],SONGS[2]]
  }
];



@Component({
    selector: 'my-app',
    template: `<h1> Hier könnte Ihre SongChart stehen </h1> 
               
               <table>
               
               <td *ngFor='let songchart of songcharts ; let currentIndex=index'>
                <tr class="songChCollection">Chart Name: {{songchart.chartName}}</tr>
                <tr class="songChCollection">Creation date: {{songchart.createDate}}</tr>
                <tr class="songChCollection">Chart Autor: {{songchart.autor}}</tr>
                <tr class="songChCollection">Chart Beschreibung: {{songchart.description}}</tr>
                <tr class="songChCollection">Chart Autor: {{songchart.autor}}</tr>
                <tr><h3>Songs in dieser Chart</h3></tr>
                  <table>
                  <td *ngFor='let songOfChart of songchart.songList ; let currentIndex=index'>
                    <tr class="songChSongs">Song Titel: {{songOfChart.title}}</tr>
                    <tr class="songChSongs">Interpret: {{songOfChart.interpret}}</tr>
                    <tr class="songChSongs">Album: {{songOfChart.album}}</tr>
                  </td>
                  </table>
                
               </td>
               </table>        
`
})

export class AppComponent {

  songs = SONGS;
  songcharts = SONGCHARTS;

}


