import * as React from 'react'
import { Nav } from 'rsuite'
import { Form } from 'rsuite'
import { RadioGroup } from 'rsuite'
import { Radio } from 'rsuite'
// import { Home } from 'rsuite'
import TocIcon from '@mui/icons-material/Toc'
import CreditCardIcon from '@mui/icons-material/CreditCard'
import { FaCommentsDollar } from 'react-icons/fa'
import PrintsTable from './PrintsTable'
import ItemCard from './ItemCard'
import CardsDisplay from './CardsDisplay'
import { POST, GET } from '../fetch'

const CollectionsNav = () => {
  const [mode, setMode] = React.useState('table')
  const [prints, setPrints] = React.useState([])

  const modes = [
    {
      mode: 'table',
      icon: <TocIcon style={{ color: mode == 'table' ? 'black' : 'white' }} />,
      component: <PrintsTable prints={prints} />,
    },
    {
      mode: 'cards',
      icon: (
        <CreditCardIcon
          style={{ color: mode == 'cards' ? 'black' : 'white' }}
        />
      ),
      component: <CardsDisplay prints={prints} />,
    },
  ]

  React.useEffect(() => {
    fetchPrints()
  }, [mode])

  const fetchPrints = async () => {
    const {data: Items} = await GET('Prints')
    setPrints(Items)
  }

  return (
    <div style={{ display: 'grid' }}>
      <div
        style={{
          direction: 'rtl',
          width: '90%',
          justifySelf: 'center',
          marginTop: '30px',
        }}
      >
        <Nav appearance="tabs" justified>
          <Nav.Item>הדפסים</Nav.Item>
          <Nav.Item>ציורים (fine)</Nav.Item>
          <Nav.Item>Objets de vertu</Nav.Item>
          <Nav.Item>הכול</Nav.Item>
        </Nav>

        <Form.Group
          controlId="radioList"
          style={{ marginTop: '40px', display: 'grid' }}
        >
          <RadioGroup
            style={{ justifySelf: 'end' }}
            name="radioList"
            inline
            appearance="picker"
            defaultValue="table"
            onChange={(e) => {
              setMode(e)
            }}
          >
            {modes.map((currMode) => (
              <Radio
                key={currMode.mode}
                value={currMode.mode}
                style={currMode.mode == mode ? selected : notSelected}
              >
                {currMode.icon}
              </Radio>
            ))}
          </RadioGroup>
        </Form.Group>
        {modes.map((i) => (
          <div key={i.mode}>{i.mode == mode ? i.component : null}</div>
        ))}
      </div>
    </div>
  )
}

const selected = {
  backgroundColor: 'white',
  borderRadius: '3px',
}

const notSelected = {
  backgroundColor: 'transparent',
}

export default CollectionsNav
