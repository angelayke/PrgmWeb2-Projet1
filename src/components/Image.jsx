import React from 'react'

const Image = ({src, alt, loading = "lazy"}) => {

  return (
    <img src={src} alt={alt} loading={loading} />
  )
}

export default Image