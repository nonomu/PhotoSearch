import React from 'react';
import TagsInput from './TagsInput'
import { observer } from 'mobx-react'

const Home = observer(() => {
  return (
    <div className="home">
      <div className="header">
        <p className="home-sentence">Find Your Inspiration</p>
      </div>
      <div className="content">
        <TagsInput tags={[]} />
      </div>
    </div>
  )
})

export default Home