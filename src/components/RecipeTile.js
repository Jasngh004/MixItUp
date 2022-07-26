import React from 'react'

export default function (recipes) {
  return (
    <div className='RecipeTile'>
        <p>{recipes["recipe"]["label"]}</p>
    </div>
  )
}
