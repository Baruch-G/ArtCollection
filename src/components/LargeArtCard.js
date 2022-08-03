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
            <img
              className="img-el"
              src={
                props.ImgUrl ? props.ImgUrl : require('../assets/no-img.png')
              }
            ></img>
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
                <h3>{props.title}</h3>
              </Row>
              <div className="seperator"></div>

              <Row
                style={{
                  height: '65%',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  marginRight: '5px',
                  display: 'flex',
                }}
              >
                <div style={{ width: '66%', display: 'grid' }}>
                  <p>
                    <span style={{ fontWeight: 'bold' }}>
                      {props.t1.split(':')[0] + ':'}
                    </span>
                    {props.t1.split(':')[1]}
                  </p>

                  <p>
                    <span style={{ fontWeight: 'bold' }}>
                      {props.t2.split(':')[0] + ':'}
                    </span>
                    {props.t2.split(':')[1]}
                  </p>
                  <p>
                    <span style={{ fontWeight: 'bold' }}>
                      {props.t3.split(':')[0] + ':'}
                    </span>
                    {props.t3.split(':')[1]}
                  </p>
                  <p style={{alignSelf: 'end'}}>
                    <span style={{ fontWeight: 'bold' }}>
                      {props.t4.split(':')[0] + ':'}
                    </span>
                    {props.t4.split(':')[1]}
                  </p>
                </div>
                <div className="info-grid">
                  <h6>קבצים מצורפים:</h6>
                  <a href="https://ynet.co.il" target="_blank">
                    שם קובץ
                  </a>
                  <br />
                  <a href="https://ynet.co.il" target="_blank">
                    קובץ נוסף
                  </a>
                </div>
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
                        <Col style={{ maxWidth: '33%' }}>
                          <h6>
                            <b
                              style={{
                                color: 'white',
                              }}
                            >{`${label.lbl}:`}</b>
                          </h6>
                        </Col>
                        <Col style={{ maxWidth: '33%' }}>
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
