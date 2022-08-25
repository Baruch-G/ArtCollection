import React, { useEffect, useState } from 'react'
import LargeArtCard from './LargeArtCard'
import { GET } from '../fetch'

const LPrintsCardsDisplay = (props) => {
  return (
    <div style={{ display: 'grid', justifyItems: 'center' }}>
      {props.prints.map((i) => {
        var labels = [
          {
            lbl: 'HPGP',
            txt: i.HPGP,
            width: 30,
          },
          {
            lbl: 'שם יוצר/אמן',
            txt: i.ArtistName,
            width: 70,
          },
        ]
        return (
          <div style={{ marginTop: '40px' }} key={i.Id}>
            <LargeArtCard
              ImgUrl={i.ImgUrl}
              title={i.Title}
              t1={`סוג הדפס: ${i.PrintKind ? i.PrintKind : 'לא ידוע'}`}
              t2={`מקור: ${i.Source ? i.Source : ''}`}
              t3={`מ"מ והערות: ${i.References ? i.References : ''}`}
              t4={`הערות: ${i.Notes ? i.Notes : ''}`}
              labels={labels}
            ></LargeArtCard>
          </div>
        )
      })}
    </div>
  )
}

export default LPrintsCardsDisplay
