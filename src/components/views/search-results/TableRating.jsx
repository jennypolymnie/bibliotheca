import React from 'react';
import { Table, Rating } from 'semantic-ui-react';

const TableRating = () => (
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
            Nature
        </Table.Cell>
        <Table.Cell>
          <Rating icon='star' defaultRating={3} maxRating={3} />
        </Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell>
            Niveau de hiérarchie
        </Table.Cell>
        <Table.Cell>
          <Rating icon='star' defaultRating={3} maxRating={3} />
        </Table.Cell>
      </Table.Row>


      <Table.Row>
        <Table.Cell>
            Support
        </Table.Cell>
        <Table.Cell>
          <Rating icon='star' defaultRating={3} maxRating={3} />
        </Table.Cell>
      </Table.Row>


      <Table.Row>
        <Table.Cell>
            Transfert
        </Table.Cell>
        <Table.Cell>
          <Rating icon='star' defaultRating={3} maxRating={3} />
        </Table.Cell>
      </Table.Row>

    </Table.Body>
  </Table>
)

export default TableRating