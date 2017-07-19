import classNames from 'classnames';
import React, {Component} from 'react';
import { FilterId,
        FilterPageSpecific,
        ProductTable
} from 'components';

export default class IncludeProductEachItem extends Component {
  render() {
    const styles = require('./includeProductEachItem.scss');

    return (
      <div className={ styles['include-box'] }>
        <div className={ styles.title }>
            <strong>Select from the Brands that require to included with this Gruop</strong>
        </div>
        <div className={ styles.require }>
                <input type="text" className="form-control"/>
                <label>(0 item)</label>
        </div>
        <FilterId title={ "Product ID" } selectOption={ ['Product ID', 'SKU No.', 'Product Name', 'Brandname', 'Batch No.'] }/>
        <div className={ styles['add-product'] }>
            <button className={ classNames(styles['btn-blue'], 'btn', 'btn-default') }>Add Product</button>
        </div>
        <div className={ styles['filter-page'] }>
            <FilterPageSpecific/>
        </div>
        <div className={ styles['product-table'] }>
            <ProductTable/>
        </div>
        <div className={ styles['add-product'] }>
            <button className={ classNames(styles['btn-blue'], 'btn', 'btn-default') }>Add Product</button>
        </div>
        <div className={ styles['filter-page'] }>
            <FilterPageSpecific/>
        </div>
    </div>
    );
  }
}
