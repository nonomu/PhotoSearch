import React, { useEffect } from 'react';
import { useStores } from '../store/PhotoSearchEngine'
import { observer } from 'mobx-react'
import '../App.css'

const Photos = observer((props) => {
  const { photoSearchEngine } = useStores()
  useEffect(() => {
    let searchTags=props.match.params.tags
     photoSearchEngine.getPhotos(searchTags)
  }, [])
  
  if (photoSearchEngine.photos.length === 0) return
  console.log("Photos render")
  return (
    <div className="photos">
      {photoSearchEngine.photos.map(ph => <div key={ph.photoBasic} className="photo">
        <img src={`${ph.photoBasic}`} className="photoTag" alt="Smiley face" />
      </div>)}
    </div>
  );
})

export default Photos