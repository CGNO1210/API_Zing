import express from 'express';
import homeController from '../controllers/homeController.js';
import apiController from '../controllers/apiController.js';

let router = express.Router();

let initWebRoutes = (app) => {

    router.get("/", homeController.getHomePage)
    router.get("/allinfo", homeController.getAllInfo)
    router.get("/search_music", homeController.search)
    router.get("/song", homeController.getSongById)


    //api
    router.get("/api/search", apiController.search) //param: info
    router.get("/api/getSongById", apiController.getSongById)//param: id
    router.get("/api/getDetailPlaylist", apiController.getDetailPlaylist) //param id
    router.get("/api/getHome", apiController.getHome)
    router.get("/api/getTop100", apiController.getTop100)
    router.get("/api/getChartHome", apiController.getChartHome)
    router.get("/api/getNewReleaseChart", apiController.getNewReleaseChart)
    router.get("/api/getInfoSong", apiController.getInfoSong) //param id
    router.get("/api/getArtist", apiController.getArtist) // param :name ; vd:sontungmtp

    return app.use("/", router);
}

module.exports = initWebRoutes;