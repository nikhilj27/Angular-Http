import { YOUTUBE_API_KEY, YOUTUBE_API_URL, YouTubeSearchService  } from './you-tube-search.service';

export const youTubeSearchInjectables: Array<any> = [
    {provide: YOUTUBE_API_KEY, useValue: YOUTUBE_API_KEY},
    {provide: YOUTUBE_API_URL, useValue: YOUTUBE_API_URL},
    {provide: YouTubeSearchService, useClass: YouTubeSearchService}
]