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
import LargeArtCard from './LargeArtCard'
import LPrintsCardsDisplay from './LPrintsCardsDisplay'
import { POST, GET } from '../fetch'
import './CollectionsNav.css'

const CollectionsNav = () => {
  const [mode, setMode] = React.useState('table')
  const [prints, setPrints] = React.useState([])
  const [activeTab, setActiveTab] = React.useState('prints')

  const components = [
    {
      tab: 'prints-table',
      component: <PrintsTable prints={prints} />,
    },
    {
      tab: 'prints-cards',
      component: <LPrintsCardsDisplay prints={prints} />,
    },
    {
      tab: 'paints-table',
      component: <div>עדיין אין נתונים להציג בטאב ציורים</div>,
    },
    {
      tab: 'paints-cards',
      component: <div>עדיין אין נתונים להציג בטאב ציורים</div>,
    },
  ]

  const modes = [
    {
      mode: 'table',
      icon: <TocIcon style={{ color: mode == 'table' ? 'black' : 'white' }} />,
    },
    {
      mode: 'cards',
      icon: (
        <CreditCardIcon
          style={{ color: mode == 'cards' ? 'black' : 'white' }}
        />
      ),
    },
  ]

  const getCurrComponent = () => {
    var com = components.find((c) => c.tab == `${activeTab}-${mode}`)

    return (
      <div>
        {com != undefined ? com.component : <div>עדיין אין מידע לטאב זה </div>}
      </div>
    )
  }

  React.useEffect(() => {
    fetchPrints()
  }, [mode])

  const fetchPrints = async () => {
    const { data: Items } = await GET('prints')
    setPrints(Items)
  }

  const tabs = [
    {
      key: 'prints',
      title: 'הדפסים',
    },
    {
      key: 'paints',
      title: 'ציורים',
    },
    {
      key: 'objects',
      title: 'Objets de vertu',
    },
    {
      key: 'all',
      title: 'הכול',
    },
  ]

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
        <Nav appearance="tabs" justified onSelect={(e) => setActiveTab(e)}>
          {tabs.map((tab) => (
            <Nav.Item
              key={tab.key}
              eventKey={tab.key}
              active={tab.key == activeTab}
            >
              {tab.title}
            </Nav.Item>
          ))}
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
        {getCurrComponent()}
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
