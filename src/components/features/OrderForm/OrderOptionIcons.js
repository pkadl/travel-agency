import React from 'react';
import styles from './OrderOption.scss';
import { formatPrice } from '../../../utils/formatPrice';
import PropTypes from 'prop-types';
import Icon from '../../common/Icon/Icon';


const OrderOptionIcons = ({currentValue, required, value, setOptionValue, values}) => (
  <div>
    {required ? ( '' ) : (
      <div className={`${styles.icon} ${value.id === currentValue ? styles.iconActive : ''}`} onClick={() => setOptionValue('')}> 
        <Icon name="times-circle" />
          none
      </div>
    )}
  
    {values.map(value => (
      <div className={`${styles.icon} ${value.id === currentValue ? styles.iconActive : ''}`} onClick={() => setOptionValue(value.id)} key={value.id}>
        <Icon name={value.icon} />
        {value.name} 
        ({formatPrice(value.price)})
      </div>
    ))}
    
  </div>
);
OrderOptionIcons.propTypes = {
  value: PropTypes.node,
  values: PropTypes.array,
  required: PropTypes.bool,
  icon: PropTypes.node,
  currentValue: PropTypes.node,
  setOptionValue: PropTypes.func, 
};


export default OrderOptionIcons ;