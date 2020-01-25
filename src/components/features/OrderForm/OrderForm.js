import React from 'react';
// import styles from './OrderForm.scss';
import {Row, Col} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import PropTypes from 'prop-types';
import OrderOption from './OrderOption';
import pricing from '../../../data/pricing';



class OrderForm extends React.Component {
  state = {
    currentValue: '',
  }

  static propTypes = {
    tripCost: PropTypes.node,
    options: PropTypes.object,
    setOrderOption: PropTypes.func,
  }

  render() {
    return (
      <Row>
        {pricing.map(option => (
          <Col md={4} key={option.id}>
            <OrderOption key={option.id} {...option}
              currentValue={this.props.options[option.id]}
              setOrderOption={this.props.setOrderOption}
            />
          </Col>
        ))}
        <Col xs={12}>
          {console.log(this.props.tripCost)}
          <OrderSummary tripCost={this.props.tripCost} opts={this.props.options}/>
        </Col>
      </Row>
  
    );
  }
}

export default OrderForm;