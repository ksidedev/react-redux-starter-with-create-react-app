import React, { Component } from 'react'
import { connect } from 'react-redux'
import { PanelGroup, Panel } from 'react-bootstrap';
import { SelectedSendPoint } from '../../shared/actions'
import Spidertxt from './Spidertxt'
import Speed from './Speed'
import RateDecentOn from './RateDecentOn'
import RateClimb from './RateClimb'
import '../Styles/Accordion/Accordion.css'

class Accordion extends Component {
  constructor(props: any) {
    super(props)

    this.getSelectedAccordion = this.getSelectedAccordion.bind(this)
  }

  getSelectedAccordion(eventKey) {
    console.log(eventKey)
    this.props.dispatch(SelectedSendPoint({name: eventKey}))
  }

  render() {

    return (
      <div className="">
      <div className="col-xs-12">
        <h4 className="col-xs-12">Additional Information</h4>
      </div>
      <PanelGroup activeKey={this.props.SelectedSendPoint.name} onSelect={this.getSelectedAccordion} accordion id="accordion-uncontrolled-example">
        <Panel eventKey="spidertext" className="col-xs-12">
          <Panel.Heading className="col-xs-12 accordionWrapper">
            <Panel.Title toggle>Spidertxt <span className="arrowIcon glyphicon glyphicon-chevron-down"></span></Panel.Title>
          </Panel.Heading>
          <Panel.Body collapsible><Spidertxt /></Panel.Body>
        </Panel>
        <Panel eventKey="speed" className="col-xs-12">
          <Panel.Heading className="col-xs-12 accordionWrapper">
            <Panel.Title toggle>SpeedUp / speedDown<span className="arrowIcon glyphicon glyphicon-chevron-down"></span></Panel.Title>
          </Panel.Heading>
          <Panel.Body collapsible expanded={'true'}><Speed /></Panel.Body>
        </Panel>

        <Panel eventKey="rateclimb" className="col-xs-12">
          <Panel.Heading className="col-xs-12 accordionWrapper">
            <Panel.Title toggle>rateClimbOn / rateClimbOff<span className="arrowIcon glyphicon glyphicon-chevron-down"></span></Panel.Title>
          </Panel.Heading>
          <Panel.Body collapsible><RateClimb /></Panel.Body>
        </Panel>

        <Panel eventKey="ratedecent" className="col-xs-12">
          <Panel.Heading className="col-xs-12 accordionWrapper">
            <Panel.Title toggle>rateDescentOn / rateDescentOff<span className="arrowIcon glyphicon glyphicon-chevron-down"></span></Panel.Title>
          </Panel.Heading>
          <Panel.Body collapsible><RateDecentOn /></Panel.Body>
        </Panel>
      </PanelGroup>
      </div>
    )
  }
}

export default connect(state => ({
  SelectedSendPoint: state.SelectedSendPoint
}))(Accordion)