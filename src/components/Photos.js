import React, { useEffect } from 'react';
import { useStores } from '../store/PhotoSearchEngine'
import { observer } from 'mobx-react'
import '../App.css'

const Photos = observer((props) => {
  const { photoSearchEngine } = useStores()
  useEffect(() => {
    let searchTags = props.match.params.tags || 'random'
    photoSearchEngine.getPhotos(searchTags)
    return function cleanup() {
      photoSearchEngine.resetSearch()
    };
  }, [photoSearchEngine, props.match.params.tags])
  return (
    (<div className="photos">
      {photoSearchEngine.foundPhotos
        ? photoSearchEngine.photos.map(ph =>
          <div key={ph.photoBasic} className="photo">
            <img src={`${ph.photoBasic}`} className="photoTag" alt="Smiley face" />
          </div>)
        : <div className="notFound"> No photos found</div>}
    </div>)
  );
})

export default Photos