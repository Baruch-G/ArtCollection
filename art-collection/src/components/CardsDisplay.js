import React from 'react'
import ItemCard from './ItemCard'

const CardsDisplay = (props) => {
  return (
    <div style={{ display: 'grid', justifyItems: 'center' }}>
      {props.prints.map((i) => {
        var labels = [
          {
            lbl: 'HPGP',
            txt: i.HPGP,
          },
          {
            lbl: 'שם יוצר/אמן',
            txt: i.ArtistName,
          },
        ]
        return (
          <div style={{ marginTop: '40px' }} key={i.Id}>
            <ItemCard t1={i.Title} t2={i.Notes} labels={labels}></ItemCard>
          </div>
        )
      })}
    </div>
  )
}

export default CardsDisplay
