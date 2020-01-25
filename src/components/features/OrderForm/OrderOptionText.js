import React from 'react';
import styles from './OrderOption.scss';
import { formatPrice } from '../../../utils/formatPrice';
import PropTypes from 'prop-types';

const OrderOptionText = ({currentValue, price, setOptionValue}) => (
  <div className={styles.number}>
    <input type='text'
      className={styles.inputSmall}
      value={currentValue}
      onChange={event => setOptionValue(event.currentTarget.value)}
    />
    &nbsp; {formatPrice(price)}
  </div>
);

OrderOptionText.propTypes = {
  currentValue: PropTypes.node,
  setOptionValue: PropTypes.func, 
  price: PropTypes.string,
};

export default OrderOptionText ;