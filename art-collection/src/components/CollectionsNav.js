import * as React from 'react'
import { Nav } from 'rsuite'
import { Form } from 'rsuite'
import { RadioGroup } from 'rsuite'
import { Radio } from 'rsuite'
// import { Home } from 'rsuite'
import TocIcon from '@mui/icons-material/Toc'
import CreditCardIcon from '@mui/icons-material/CreditCard'
import { FaCommentsDollar } from 'react-icons/fa'
const CollectionsNav = () => {
  const [mode, setMode] = React.useState('List')
  const [prints, setPrints] = React.useState([])

  React.useEffect(() => {
    fetchPrints()
  }, [mode])

  const fetchPrints = () => {
    fetch('https://localhost:7009/Prints')
      .then((response) => response.json())
      .then((data) => {
        setPrints(data)
        console.log(data)
      })
      .catch((e) => console.log(e))
  }

  return (
    <div style={{ display: 'grid' }}>
      <div
        style={{
          direction: 'rtl',
          width: '70%',
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
            defaultValue="List"
            onChange={(e) => setMode(e)}
          >
            <Radio value="List" style={mode == 'List' ? selected : notSelected}>
              <TocIcon style={{ color: mode == 'List' ? 'black' : 'white' }} />
            </Radio>
            <Radio
              value="Cards"
              style={mode == 'Cards' ? selected : notSelected}
            >
              <CreditCardIcon
                style={{ color: mode == 'Cards' ? 'black' : 'white' }}
              />
            </Radio>
          </RadioGroup>
        </Form.Group>

        {/* <PrintsTable/> */}
      </div>
    </div>
  )
}

const selected = {
  backgroundColor: 'white',
}

const notSelected = {
  backgroundColor: 'transparent',
  color: 'red',
}

export default CollectionsNav
