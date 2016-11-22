import { Song } from './song.class';

export class Chart
{
    id:number;
    chartName: string;
    img: string;
    createDate:string;
    autor: string;
    description: string;

    songList: Song[];

}