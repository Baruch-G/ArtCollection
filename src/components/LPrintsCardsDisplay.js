import React from 'react'
import LargeArtCard from './LargeArtCard'

const LPrintsCardsDisplay = (props) => {
  return (
    <div style={{ display: 'grid', justifyItems: 'center' }}>
      {props.prints.map((i) => {
        var labels = [
          {
            lbl: 'HPGP',
            txt: i.HPGP,
            width: 30
          },
          {
            lbl: 'שם יוצר/אמן',
            txt: i.ArtistName,
            width : 70
          }
        ]
        return (
          <div style={{ marginTop: '40px' }} key={i.Id}>
            <LargeArtCard t1={i.Title} t2={i.Notes} t3={i.References} labels={labels}></LargeArtCard>
          </div>
        )
      })}
    </div>
  )
}

export default LPrintsCardsDisplay
