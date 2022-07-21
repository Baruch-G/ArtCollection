import React from 'react'
import './LargeArtCard.css'
import { Grid, Row, Col } from 'rsuite'
import { listItemButtonClasses } from '@mui/material'

const LargeArtCard = (props) => {
  return (
    <div className="card">
      <Grid style={{ height: '100%', width: '100%' }}>
        <Row style={{ height: '100%' }} className="show-grid">
          <Col xs={8} className="img-area">
            <img className="img-el" src={require('../assets/no-img.png')}></img>
          </Col>
          <Col className="body-area" xs={16} style={{ height: '100%' }}>
            <Grid style={{ width: '100%', height: '100%' }}>
              <Row
                style={{
                  backgroundColor: '',
                  height: '20%',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  marginRight: '5px',
                }}
              >
                <h3>{props.t1}</h3>
              </Row>
              <div className="seperator"></div>
              <Row
                style={{
                  backgroundColor: 'red',
                  height: '65%',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  marginRight: '5px',
                }}
              >
                <h6>{props.t2}</h6>
                <p>{props.t3}</p>
              </Row>
              <div className="seperator"></div>

              <Row
                style={{
                  backgroundColor: '',
                  height: '15%',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {props.labels.map((label) => (
                  <Col key={label.lbl} style={{ width: `${label.width}%` }}>
                    <Grid
                      style={{
                        width: '100%',
                        height: '100%',
                        display: 'grid',
                        justifyItems: 'right',
                      }}
                    >
                      <Row
                        style={{
                          width: '100%',
                          display: 'flex',
                        }}
                      >
                        <Col style={{ maxWidth: '50%' }}>
                          <h6>
                            <b
                              style={{
                                color: 'white',
                              }}
                            >{`${label.lbl}:`}</b>
                          </h6>
                        </Col>
                        <Col style={{ maxWidth: '50%' }}>
                          <div
                            style={{
                              whiteSpace: 'nowrap',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                            }}
                          >
                            {label.txt}
                          </div>
                        </Col>
                      </Row>
                    </Grid>
                  </Col>
                ))}
              </Row>
            </Grid>
          </Col>
        </Row>
      </Grid>
    </div>
  )
}

export default LargeArtCard
