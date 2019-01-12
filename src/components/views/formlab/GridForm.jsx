import React from 'react'
import { Grid, Menu, Form, Select } from 'semantic-ui-react'

const extraction = [
    { key: 'Q', text: 'Qiamp', value: 'qiamp' },
    { key: 'I', text: 'Investigator', value: 'investigator' },
    { key: 'N', text: 'pas réalisé', value: 'pas réalisé' },
  ]

  const quantification = [
    { key: 'N', text: 'YHres', value: 'YHres' },
    { key: 'F', text: 'Quantifiler Duo', value: 'Quantifiler Duo' },
    { key: 'A', text: 'Autre', value: 'Autre' },
  ]

  const amplification = [
    { key: 'N', text: 'NGMSelect', value: 'ngmselect' },
    { key: 'F', text: 'Fusion6C', value: 'fusion6c' },
  ]

  const sang = [
    { key: 'N', text: 'Hexagon OBTI', value: 'hexagonobti' },
    { key: 'F', text: 'Autre', value: 'autre' },
  ]

  const salive = [
    { key: 'N', text: 'RSID Saliva', value: 'rsidsaliva' },
    { key: 'F', text: 'Autre', value: 'autre' },
  ]

  const sperme = [
    { key: 'N', text: 'Christmas Tree', value: 'christmastree' },
    { key: 'F', text: 'PSA', value: 'psa' },
  ]


  const GridForm = () => (
  
    <Grid textAlign='center' columns={2}>
      <Grid.Row>

        <Grid.Column>
          <Menu fluid vertical>
            <Menu.Item className='header'>Chimie</Menu.Item>
            <Menu.Item>Kit Extraction</Menu.Item>
            <Form.Field 
            control={Select} 
            options={extraction} 
            placeholder='Choisir' />

            <Menu.Item>Kit de quantification</Menu.Item>
            <Form.Field 
            control={Select} 
            options={quantification} 
            placeholder='Choisir' />
          
            <Menu.Item>Kit Amplification</Menu.Item>
            <Form.Field 
            control={Select} 
            options={amplification} 
            placeholder='Choisir' />
          
            <Menu.Item>Test indicatif sang</Menu.Item>
            <Form.Field 
            control={Select} 
            options={sang} 
            placeholder='Choisir' />
          
            <Menu.Item>Test indicatif salive</Menu.Item>
            <Form.Field 
            control={Select} 
            options={salive} 
            placeholder='Choisir' />
          
            <Menu.Item>Test indicatif sperme</Menu.Item>
            <Form.Field 
            control={Select} 
            options={sperme} 
            placeholder='Choisir' />
          
            <Menu.Item></Menu.Item>
          </Menu>
      </Grid.Column>
      
      <Grid.Column>
        <Menu fluid vertical>
          <Menu.Item className='header'>Equippement</Menu.Item>
          <Menu.Item>Robot Extraction</Menu.Item>
          <Form.Field 
          control={Select} 
          options={sperme} 
          placeholder='Choisir' />

          <Menu.Item>Bloc chauffant</Menu.Item>
          <Form.Field 
          control={Select} 
          options={sperme} 
          placeholder='Choisir' />
          
          <Menu.Item>Electrophorèse capillaire</Menu.Item>
          <Form.Field 
          control={Select} 
          options={sperme} 
          placeholder='Choisir' />
          
          <Menu.Item>Quantification</Menu.Item>
          <Form.Field
          control={Select} 
          options={sperme} 
          placeholder='Choisir' />
          
          <Menu.Item>Sequenceur nouvelle génération</Menu.Item>
          <Form.Field 
          control={Select} 
          options={sperme} 
          placeholder='Choisir' />
          
          <Menu.Item></Menu.Item>
        </Menu>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default GridForm