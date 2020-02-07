import React, { useEffect } from 'react';
import TagsInput from './TagsInput'
import { observer } from 'mobx-react'

const Home = observer(() => {
  useEffect(() => {
    var body = document.getElementsByTagName('body')[0];
    body.style.backgroundImage = `url("https://cdnb.artstation.com/p/assets/images/images/006/897/659/large/mikael-gustafsson-wallpaper-mikael-gustafsson.jpg?1502104559")`;
    body.style.overflow='hidden';
    window.scrollTo(-2, 0);
    

  }, [])
  return (
    <div>
      <div className="header">
      Find Your Inspiration
      </div>
      <div className="content">
        <TagsInput tags={['Snow']} />
      </div>
    </div>
  )
})

export default Home