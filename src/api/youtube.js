import axios from "axios"

const KEY = 'AIzaSyDtrLGeh-tbXVDMHmgz-lg6DVHyLZMuVI4'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
        // dont preconfigure the search query here
    }

})