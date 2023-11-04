import { ZingMp3 } from 'zingmp3-api-full-v3';

let search = async (req, res) => {
    let search_name = req.query.info
    if (!search_name) {
        return res.status(200).json({
            err: 1,
            msg: "Please input your name song"
        })
    }
    let data = await ZingMp3.search(search_name).then(data => {
        for (let key in data.data.counter) {
            if (data.data.counter[key]) {
                return data
            }
        }
        return false
    })
    if (!data) {
        return res.status(200).json({
            err: 2,
            msg: 'not found'
        })
    }

    return res.status(200).json(data)
}

let getDetailPlaylist = async (req, res) => {
    let idPlayList = req.query.id
    if (!idPlayList) {
        return res.status(200).json({
            err: 1,
            msg: "missing id playlist"
        })
    }
    let data = await ZingMp3.getDetailPlaylist(idPlayList)
        .then(result => result)
        .catch(err => err)
    return res.status(200).json(data)
}
let getHome = async (req, res) => {
    let data = await ZingMp3.getHome()
        .then(result => result)
        .catch(err => err)
    return res.status(200).json(data)
}

let getTop100 = async (req, res) => {
    let data = await ZingMp3.getTop100()
        .then(result => result)
        .catch(err => err)
    return res.status(200).json(data)
}
let getChartHome = async (req, res) => {
    let data = await ZingMp3.getChartHome()
        .then(result => result)
        .catch(err => err)
    return res.status(200).json(data)
}
let getNewReleaseChart = async (req, res) => {
    let data = await ZingMp3.getNewReleaseChart()
        .then(result => result)
        .catch(err => err)
    return res.status(200).json(data)
}
let getInfoSong = async (req, res) => {
    let id = req.query.id
    if (!id) {
        return res.status(200).json({
            err: 1,
            msg: "missing id song"
        })
    }
    let data = await ZingMp3.getInfoSong(id)
        .then(result => result)
        .catch(err => err)
    return res.status(200).json(data)
}
let getArtist = async (req, res) => {
    let name = req.query.name
    if (!name) {
        return res.status(200).json({
            err: 1,
            msg: "Please input your name song"
        })
    }
    let data = await ZingMp3.search(name)
        .then(data => data)
        .catch(err => err)
    return res.status(200).json(data)
}


let getSongById = async (req, res) => {
    let id = req.query.id
    //tra ve link nhac
    let songData = await ZingMp3.getSong(id).then(data => data.data['128'])
    return res.send(songData)
}

module.exports = {
    search,
    getSongById,
    getDetailPlaylist,
    getHome,
    getTop100,
    getChartHome,
    getNewReleaseChart,
    getInfoSong,
    getArtist
};
