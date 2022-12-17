
import axios from 'axios';
import moment from 'moment';
import {
IGDB_BASE_URL_GAMES,
IGDB_BASE_URL_GENRES,
IGDB_BASE_URL_PLATFORMS,
PSN_USERPROFILE_ACCOUNT_ID,
YOUTUBE_POSTER,
IGDB_IMAGE_ID,
 
} from '../constants/Urls'
import { bestRatedGames } from '../constants/homePageRequestsConstants';
import {TWITCH_ACCESS_TOKEN, TWITCH_CLIENT_ID} from '@env'

const getBestRatedGamesRequest =  () => {
    
    let unixDate;

    if (time === bestRatedGames.THIS_MONTH) {
        unixDate = moment().subtract(1, "months").unix();
    } else if (time === bestRatedGames.LAST_6_MONTHS) {
        unixDate = moment().subtract(6, "months").unix();
    } else if (time === bestRatedGames.THIS_YEAR) {
        unixDate = moment().subtract(1, "year").unix();
    } else {
        return false;
    }

    return axios({
        url: IGDB_BASE_URL_GAMES,
        method: 'POST',
        headers: {
                'Accept': 'application/json',
                'Client-ID': TWITCH_CLIENT_ID,
                'Authorization': TWITCH_ACCESS_TOKEN,
        },

        data: `fields name, follows, aggregated_rating, first_release_date, release_dates.human, release_dates.date, genres.name, involved_companies.developer, involved_companies.company.name, involved_companies.company.logo.image_id, screenshots.image_id, summary, release_dates.category;
        sort aggregated_rating desc;
        where first_release_date > ${unixDate} & aggregated_rating != null;
        limit 10;`

    });
}

const IGDB_HTTP_REQUEST_MOST_ANTICIPATED = () => {

    const now = moment().unix();

    return axios({
        url: IGDB_BASE_URL_GAMES,
        method: 'POST',
        headers: {
                'Accept': 'application/json',
                'Client-ID': TWITCH_CLIENT_ID,
                'Authorization': TWITCH_ACCESS_TOKEN,
        },
        data: `fields name, summary, hypes, age_ratings.rating, age_ratings.content_descriptions.description, involved_companies.company.logo.image_id, artworks.image_id, involved_companies.company.name, similar_games.cover.image_id, genres.name, 
        first_release_date, release_dates.human,release_dates.date, release_dates.category, cover.image_id, platforms.abbreviation, videos.video_id, screenshots.image_id, category;
        where category = 0 & platforms = (48, 49, 130, 167,169) & first_release_date >  ${now} & hypes != null;
        sort hypes desc;
        limit 10;`
        // data: `fields name, 
        // first_release_date, release_dates.human,release_dates.date, release_dates.category, cover.image_id, category;
        // where category = 0 & platforms = (48, 49, 130, 167,169) & first_release_date >  1670905568 & hypes != null;
        // sort hypes desc;
        // limit 10;`


    })
}


const IGDB_HTTP_REQUEST_RELEASES= () => {

    const nowUnix = moment().unix();

    return axios({ 
        url: IGDB_BASE_URL_GAMES,
        method: 'POST',
        headers: {
                'Accept': 'application/json',
                'Client-ID': TWITCH_CLIENT_ID,
                'Authorization': TWITCH_ACCESS_TOKEN,
        },
        data: `fields release_dates.human, release_dates.date, category, name, cover.image_id, aggregated_rating; 
        where release_dates.date > ${nowUnix} & category = 0; 
        sort release_dates.date asc;
        limit 10;`
    })
}


const IGDB_HTTP_REQUEST_POPULAR = () => {

    const now = moment().unix();
    const last3MonthsUnix = moment().subtract(2, "months").unix();

    return axios({ 
        url: IGDB_BASE_URL_GAMES,
        method: 'POST',
        headers: {
                'Accept': 'application/json',
                'Client-ID': TWITCH_CLIENT_ID,
                'Authorization': TWITCH_ACCESS_TOKEN,
        },
        data: `fields name, cover.image_id, total_rating, age_ratings.rating, age_ratings.content_descriptions.description, artworks.image_id, involved_companies.company.name, screenshots.image_id, similar_games.cover.image_id, follows, summary, rating_count, first_release_date,
        platforms.abbreviation, videos.video_id, release_dates.human, release_dates.date, genres.name, release_dates.category;
        sort follows desc;
        where platforms = (6, 48, 49, 130, 167, 169) & first_release_date > ${last3MonthsUnix} & first_release_date < ${now} & (follows > 1 | rating_count > 1) & total_rating >= 78 ;
        limit 10;`
    })
}

const IGDB_HTTP_REQUEST_GENRES= () => {

    return axios({ 
        url: IGDB_BASE_URL_GENRES,
        method: 'POST',
        headers: {
                'Accept': 'application/json',
                'Client-ID': TWITCH_CLIENT_ID,
                'Authorization': TWITCH_ACCESS_TOKEN,
        },
        data: `fields id, name; where id = (4, 5, 7, 9, 10, 12, 13, 14, 15, 24, 25, 31, 33, 32, 36); limit 10;`
    })
}

const IGDB_HTTP_REQUEST_PLATFORMS = () => {
    return axios ({
        url: IGDB_BASE_URL_PLATFORMS,
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Client-ID': TWITCH_CLIENT_ID,
            'Authorization': TWITCH_ACCESS_TOKEN,
        },
        data: `fields id, name; where id = (8);`
    })
}




const getImage = (path) => `${IGDB_IMAGE_ID}/${path}.jpg`;

const getYoutubePoster = (path) => `${YOUTUBE_POSTER}/${path}/maxresdefault.jpg`
const getYoutubePosterNoMaxRes = (path) => `${YOUTUBE_POSTER}/${path}/0.jpg`

export {
    getBestRatedGamesRequest,
    IGDB_HTTP_REQUEST_MOST_ANTICIPATED,
    IGDB_HTTP_REQUEST_RELEASES,
    IGDB_HTTP_REQUEST_POPULAR,
    IGDB_HTTP_REQUEST_GENRES,
    IGDB_HTTP_REQUEST_PLATFORMS,
    getImage,
    getYoutubePoster,
    getYoutubePosterNoMaxRes

};

