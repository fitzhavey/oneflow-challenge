const fs = require('fs');
const spark = require('./Spark');

/**
 * Provides access to a datasource of information on the 
 * show Silicon Valley. Results can be filtered by season with the
 * getSeason() method.
 * 
 * Extended by using a library (from another of my projects) to download the data
 * from a database and cache it in a local json file with _fallbackDownloadData()
 */
module.exports = class DataService{

    constructor(){
        this._fallbackDownloadData();
    }

    /**
     * @returns {Array} of all episodes in datasource
     */
    getAllEpisodes(){
        return JSON.stringify(this.episodes);            
    }

    /**
     * @returns {Array} all the episodes in a specific season
     * @param {number} season the season to filter to
     */
    getSeason(season){
        return JSON.stringify(
            this.episodes.filter(episode => {
                return episode.season === season;
            })
        );
    }

    /**
     * Internal
     * @param {Object} listObject Object containing arrays as values
     * @returns {Array} array of values from listObject
     */
    _parseList(listObject){
        return Object.keys(listObject).map(key => {
            return listObject[key]
        });
    }

    /**
     * Internal -loads the data from a cached source and then 
     * updates that cached source and reloads data
     */
    _fallbackDownloadData(){
        try{
            this.data = require('../data/cache');   
            this.episodes = this._parseList(this.data._embedded.episodes);                    
            
        }catch(error){
            console.log("No cache found, performing first time load...");
        }
        return spark.read('oneflow').then(data => {
            fs.writeFileSync('data/cache.json', JSON.stringify(data))
            this.data = require('../data/cache');
            this.episodes = this._parseList(this.data._embedded.episodes);
        });
    }
    
}