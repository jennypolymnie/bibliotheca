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
                    <Icon name="check" size="large" color="darkgrey" />
                </Table.Cell>
            </Table.Row>

            <Table.Row>
                <Table.Cell>
                    Support
                </Table.Cell>
                <Table.Cell>
                    <Icon name="check" size="large" color="darkgrey" />
                </Table.Cell>
            </Table.Row>


            <Table.Row>
                <Table.Cell>
                    Concentration
                </Table.Cell>
                <Table.Cell>
                    <Icon name="check" size="large" color="darkgrey" />
                </Table.Cell>
            </Table.Row>


            <Table.Row>
                <Table.Cell>
                    Test indicatif
                </Table.Cell>
                <Table.Cell>
                    <Icon name="check" size="large" color="darkgrey" />
                </Table.Cell>
            </Table.Row>

        </Table.Body>
    </Table>
);

export default TableCheck;
