import { Genre } from "./Genre";

export interface Filter {
    genre: Genre,
    views: number,
    downloads: number,
    dloadsViewsRatio: number,
    comments: number,
    gradeCount: number,
    gradeViewsRatio: number,
    bitrate320: boolean
}