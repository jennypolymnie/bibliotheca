import React from 'react'
import {Table, Rating } from 'semantic-ui-react'
import PropTypes from 'prop-types'

const TableRating = ({nature, hierarchieLevel, support, transfert}) => (
  <Table cellpadding="5">
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Elements</Table.HeaderCell>
        <Table.HeaderCell>Présent</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>
            {nature}
        </Table.Cell>
        <Table.Cell>
          <Rating icon='star' defaultRating={3} maxRating={3} />
        </Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell>
            {hierarchieLevel}
        </Table.Cell>
        <Table.Cell>
          <Rating icon='star' defaultRating={3} maxRating={3} />
        </Table.Cell>
      </Table.Row>


      <Table.Row>
        <Table.Cell>
            {support}
        </Table.Cell>
        <Table.Cell>
          <Rating icon='star' defaultRating={3} maxRating={3} />
        </Table.Cell>
      </Table.Row>


      <Table.Row>
        <Table.Cell>
            {transfert}
        </Table.Cell>
        <Table.Cell>
          <Rating icon='star' defaultRating={3} maxRating={3} />
        </Table.Cell>
      </Table.Row>

    </Table.Body>
  </Table>
)

TableRating.PropTypes = {
  nature: PropTypes.string.isRequired,
  hierarchieLevel: PropTypes.string.isRequired,
  support: PropTypes.string.isRequired,
  transfert: PropTypes.string.isRequired,
  
}

export default TableRating