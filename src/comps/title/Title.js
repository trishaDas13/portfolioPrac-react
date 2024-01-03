import React from 'react'
import './title.css'

function Title(props) {
  return (
    <>
        <h1 className='article_title'>{props.title}</h1>
    </>
  )
}

export default Title;