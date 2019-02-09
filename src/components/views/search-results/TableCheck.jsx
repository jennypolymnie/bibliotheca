import React from 'react';
import { Table, Icon } from 'semantic-ui-react';

const TableCheck = () => (
    <Table cellpadding="5">
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Element</Table.HeaderCell>
                <Table.HeaderCell>Présent</Table.HeaderCell>
            </Table.Row>
        </Table.Header>

        <Table.Body>
            <Table.Row>
                <Table.Cell>
            Nature
                </Table.Cell>
                <Table.Cell>
                    <Icon name="check" size="large" color="green" />
                </Table.Cell>
            </Table.Row>

            <Table.Row>
                <Table.Cell>
            Niveau de hiérarchie
                </Table.Cell>
                <Table.Cell>
                    <Icon name="check" size="large" color="green" />
                </Table.Cell>
            </Table.Row>


            <Table.Row>
                <Table.Cell>
            Support
                </Table.Cell>
                <Table.Cell>
                    <Icon name="check" size="large" color="green" />
                </Table.Cell>
            </Table.Row>


            <Table.Row>
                <Table.Cell>
            Transfert
                </Table.Cell>
                <Table.Cell>
                    <Icon name="check" size="large" color="green" />
                </Table.Cell>
            </Table.Row>

        </Table.Body>
    </Table>
);

export default TableCheck;
