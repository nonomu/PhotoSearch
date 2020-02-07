import { observable, action, computed } from 'mobx'
import React from 'react'
import axios from 'axios'

class PhotoSearchEngine {
  @observable photos = []
  @observable photosSearchHistory = []
  @action async getPhotos(tags) {
    try {
      if (tags === "random") {
        this.getRandomPhotos()
        return
      }
      let results = await axios.get(`https://pixabay.com/api/?key=14187346-8dbb41b91d19190e6af3c651f&q=${tags}&image_type=photo&per_page=200`)
      let photos = results.data.hits.map(p => { return { photoBasic: p.webformatURL, height: p.previewHeight, width: p.previewWidth, photoBig: p.largeImageURL } })
      this.photos = photos
      this.addToHistory(tags)
    }
    catch (e) {
      console.log(e)
    }
  }
  @action getRandomPhotos = async () => {
    try {
      let results = await axios.get(`https://pixabay.com/api/?key=14187346-8dbb41b91d19190e6af3c651f&image_type=photo&pretty=true&per_page=200`)
      let photos = results.data.hits.map(p => { return { photoBasic: p.webformatURL, height: p.previewHeight, width: p.previewWidth, photoHD: p.largeImageURL } })
      this.photos = photos
    }
    catch (e) {
      console.log(e)
    }
  }
  @action addToHistory = async (tags) => {
    if (this.photosSearchHistory.length >= 3) {
      let tagsArray = [...this.photosSearchHistory]
      tagsArray.shift()
      this.photosSearchHistory = [...tagsArray, tags]
    }
    else { this.photosSearchHistory = [...this.photosSearchHistory, tags] }
  }

}

const storesContext = React.createContext({
  photoSearchEngine: new PhotoSearchEngine()
})

export const useStores = () => React.useContext(storesContext)