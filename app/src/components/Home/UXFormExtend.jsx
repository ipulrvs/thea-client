import React from 'react'

import UXForm from './UXForm.jsx'
import ServiceExtend from './ServiceExtend'

import connect from 'redux-connect-decorator'
@connect(store => ({ 
  global: store.global,
  entity: store.entity
}))
export default class UXFormExtend extends UXForm {
  constructor(props){
    super(props)
    this.service = ServiceExtend
  }
}