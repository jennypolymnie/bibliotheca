import React from 'react'
import { Grid, Menu, Form, Select } from 'semantic-ui-react'

const extraction = [
    { key: 'Q', text: 'Qiamp', value: 'qiamp' },
    { key: 'I', text: 'Investigator', value: 'investigator' },
    { key: 'N', text: 'pas réalisé', value: 'pas réalisé' },
  ]


const GridForm = () => (
  <Grid textAlign='center' columns={2}>
    <Grid.Row>
      <Grid.Column>
        <Menu fluid vertical>
          <Menu.Item className='header'>Chimie</Menu.Item>
          <Menu.Item>Kit Extraction</Menu.Item>
          <Form.Field control={Select} options={extraction} placeholder='Choisir' />
          <Menu.Item>Kit de quantification</Menu.Item>
          <Form.Field control={Select} options={extraction} placeholder='Choisir' />
          <Menu.Item>Kit Amplification</Menu.Item>
          <Form.Field control={Select} options={extraction} placeholder='Choisir' />
          <Menu.Item>Test indicatif sang</Menu.Item>
          <Form.Field control={Select} options={extraction} placeholder='Choisir' />
          <Menu.Item>Test indicatif salive</Menu.Item>
          <Form.Field control={Select} options={extraction} placeholder='Choisir' />
          <Menu.Item>Test indicatif sperme</Menu.Item>
          <Form.Field control={Select} options={extraction} placeholder='Choisir' />
          <Menu.Item></Menu.Item>
        </Menu>
      </Grid.Column>
      <Grid.Column>
        <Menu fluid vertical>
          <Menu.Item className='header'>Equippement</Menu.Item>
          <Menu.Item>Robot Extraction</Menu.Item>
          <Form.Field control={Select} placeholder='Choisir' />
          <Menu.Item>Bloc chauffant</Menu.Item>
          <Form.Field control={Select} placeholder='Choisir' />
          <Menu.Item>Electrophorèse capillaire</Menu.Item>
          <Form.Field control={Select} placeholder='Choisir' />
          <Menu.Item>Quantification</Menu.Item>
          <Form.Field control={Select} placeholder='Choisir' />
          <Menu.Item>Sequenceur nouvelle génération</Menu.Item>
          <Form.Field control={Select} placeholder='Choisir' />
          <Menu.Item></Menu.Item>
        </Menu>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default GridForm