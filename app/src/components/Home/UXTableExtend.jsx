import React from 'react'

import UXTable from './UXTable.jsx'
import ServiceExtend from './ServiceExtend'

import connect from 'redux-connect-decorator'
@connect(store => ({ 
  global: store.global,
  entity: store.entity
}))
export default class UXTableExtend extends UXTable {
  constructor(props){
    super(props)
    this.service = ServiceExtend
  }
}