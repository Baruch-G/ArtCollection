import React from 'react'
import './ItemCard.css'
import { Grid, Row, Col } from 'rsuite'
import { listItemButtonClasses } from '@mui/material'

const ItemCard = (props) => {
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
                }}
              >
                <h3>{props.t1}</h3>
              </Row>
              <Row
                style={{
                  backgroundColor: '',
                  height: '65%',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                <h4>{props.t2}</h4>
              </Row>
              <Row
                style={{
                  height: '15%',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {props.labels.map((label) => (
                  <Col key={label.lbl} style={{ width: '50%' }}>
                    <Grid
                      style={{
                        width: '100%',
                        height: '100%',
                        display: 'grid',
                        justifyItems: 'right',
                      }}
                    >
                      <Row>
                        <Col>{label.txt}</Col>
                        <Col>
                          <h6>
                            <b style={{ color: 'white' }}>{`${label.lbl}:`}</b>
                          </h6>
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

export default ItemCard
