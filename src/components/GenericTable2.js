import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Grid, GridColumn } from '@progress/kendo-react-grid'
import { process } from '@progress/kendo-data-query'
import FilterAltIcon from '@mui/icons-material/FilterAlt'
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff'
import './GenericTable2.css'

const initialDataState = {
  sort: [
    {
      field: 'code',
      dir: 'asc',
    },
  ],
}
const GenericTable2 = (props) => {
  const [dataState, setDataState] = React.useState(initialDataState)
  const [showFilter, setShowFilter] = React.useState(false)

  return (
    <div>
      <div
        style={{
          backgroundColor: '#f5f5f5',
          width: '30px',
          height: '30px',
          borderRadius: '2px',
          display: 'grid',
          justifyContent: 'center',
          alignContent: 'center',
          cursor: 'pointer',
        }}
      >
        {showFilter ? (
          <FilterAltOffIcon onClick={() => setShowFilter(false)} />
        ) : (
          <FilterAltIcon onClick={() => setShowFilter(true)} />
        )}
      </div>
      <Grid
        style={{ marginTop: '5px' }}
        sortable={true}
        filterable={showFilter}
        data={process(props.items, dataState)}
        {...dataState}
        onDataStateChange={(e) => {
          setDataState(e.dataState)
        }}
      >
        {props.columns.map((col) => (
          <GridColumn
            className="bar"
            key={col.key}
            field={col.key}
            title={col.label}
          />
        ))}

        {/* <Column field="ProductID" title="ID" width="80px" filterable={false} />
      <Column field="ProductName" title="Name" width="250px" />
      <Column field="UnitPrice" title="Price" filter="numeric" width="150px" />
      <Column
        field="UnitsInStock"
        title="In stock"
        filter="numeric"
        width="150px"
      />
      <Column
        field="Discontinued"
        filter="boolean"
        cell={(props) => (
          <td>
            <input
              disabled={true}
              type="checkbox"
              checked={props.dataItem[props.field || '']}
            />
          </td>
        )}
      /> */}
      </Grid>
    </div>
  )
}

export default GenericTable2
