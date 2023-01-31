import axios from 'axios';
import {TWITCH_ACCESS_TOKEN, TWITCH_CLIENT_ID} from '@env'
import { IGDB_BASE_URL_GAMES } from '../constants/Urls';

const GameDetailsServiceRequest = (gameId) => {

    return axios({
        url: IGDB_BASE_URL_GAMES,
        method: 'POST',
        headers: {
                'Accept': 'application/json',
                'Client-ID': TWITCH_CLIENT_ID,
                'Authorization': TWITCH_ACCESS_TOKEN,
        },
        data: `
        fields name, cover.image_id, genres.name, first_release_date, total_rating, summary, screenshots.image_id, videos.video_id, artworks.image_id, platforms.platform_logo.image_id, genres.slug,
        similar_games.id, similar_games.cover.image_id, similar_games.name, similar_games.involved_companies.company.name, dlcs, collection.games.cover.image_id, collection.name, dlcs.name, dlcs.cover.image_id,
        involved_companies.company.name, involved_companies.company.developed.cover.image_id, involved_companies.developer, involved_companies.publisher, involved_companies.company.published.cover.image_id; 
        where id = ${gameId};
        limit 1;`
    })
}


export default GameDetailsServiceRequest