import { ZingMp3 } from 'zingmp3-api-full-v3';

let getHomePage = (req, res) => {
    return res.render('home.ejs')
}
let getAllInfo = async (req, res) => {
    try {
        let info = await ZingMp3.getInfoSong('ZWADA0OW').then(data => data)
        return res.send(info)
    } catch (e) {
        console.log('get allinfo err: ', e)
    }
}

let search = async (req, res) => {
    let search_name = req.query.name
    let data = await ZingMp3.search(search_name).then(data => {
        for (let key in data.data.counter) {
            if (data.data.counter[key]) {
                return data
            }
        }
        return false
    })
    if (!data) {
        return res.send('Not found')
    }
    let list_song_id = data.data.songs
    // return res.render('listmusic.ejs', { list_song_id })
    return res.send(data)
}
let getSongById = async (req, res) => {
    let id = req.query.id
    let songData = await ZingMp3.getSong(id).then(data => data.data['128'])
    return res.send(`<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    
    <body>
        <audio src="${songData}"></audio>
        <button>Play</button>
        <script>
            const audio = document.querySelector('audio');
            const button = document.querySelector('button');
            function playAudio() {
                if (audio.paused) {
                    audio.play();
                    button.textContent = 'Pause';
                } else {
                    audio.pause();
                    button.textContent = 'Play';
                }
            };
            button.addEventListener('click', playAudio);
        </script>
        </script>
    </body>
    </html>`)
}
module.exports = {
    getHomePage,
    getAllInfo,
    search,
    getSongById
};
