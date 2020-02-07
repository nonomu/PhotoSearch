import React, { useEffect } from 'react';
import { useStores } from '../store/PhotoSearchEngine'
import { observer } from 'mobx-react'


import '../App.css'

const Photos = observer((props) => {
  const { photoSearchEngine } = useStores()
  useEffect(() => {
    async function fetchMyStoreData() {
      await photoSearchEngine.getPhotos(props.tags)
    }
    fetchMyStoreData()
    var body = document.body.style;
    body.backgroundImage = `url("https://previews.123rf.com/images/irrrina/irrrina1406/irrrina140600285/29418973-background-from-white-coarse-canvas-texture-clean-background-no-dust-image-with-copy-space-and-light.jpg")`;
    body.backgroundRepeat = 'repeat'
    body.overflow = 'visible';
  }, [])
  if (photoSearchEngine.photos.length === 0) return
  return (
    <div className="photos">
      {photoSearchEngine.photos.map(ph => <div key={ph.photoBasic} className="photo">
        <img src={`${ph.photoBasic}`} className="photoTag" alt="Smiley face" />
      </div>)}
    </div>
  );
})

export default Photos