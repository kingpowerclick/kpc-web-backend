import React, {Component} from 'react';
// import classNames from 'classnames';

export default class ProductTable extends Component {
  render() {
    const styles = require('./productTable.scss');

    return (
      <div className={ styles['table-detail'] }>
        <div className={ styles['tab-content'] }>
            <table className="table table-striped">
                <thead>
                    <tr className={ styles['title-table']}>
                        <th className={ styles['product-checkbox'] }><input type="checkbox"/></th>
                        <th className={ styles['product-id'] }>ID</th>
                        <th className={ styles['product-thumbnail'] }>Thumbnail</th>
                        <th className={ styles['product-sku'] }>SKU</th>
                        <th className={ styles['product-name'] }>Name</th>
                        <th className={ styles['product-type'] }>Type</th>
                        <th className={ styles['product-price'] }>Price</th>
                        <th className={ styles['product-qty'] }>Qty</th>
                        <th className={ styles['produt-brand'] }>Brand</th>
                        <th className={ styles['product-merchiandise'] }>Batch No.</th>
                        <th className={ styles['product-visibility'] }>Visibility</th>
                        <th className={ styles['product-status'] }>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><input type="checkbox"/></td>
                        <td>503576</td>
                        <td><img src="http://via.placeholder.com/50x50"/></td>
                        <td>8169513</td>
                        <td>EMPORIO ARMANI CLASSIC WATCH</td>
                        <td>-</td>
                        <td>11,800.00 THB</td>
                        <td>172</td>
                        <td>EMPORIO ARMANI</td>
                        <td>xxxxxx</td>
                        <td>Yes</td>
                        <td>Enable</td>
                    </tr>
                    <tr>
                        <td><input type="checkbox"/></td>
                        <td>503576</td>
                        <td><img src="http://via.placeholder.com/50x50"/></td>
                        <td>8169513</td>
                        <td>EMPORIO ARMANI CLASSIC WATCH</td>
                        <td>Child Product </td>
                        <td>11,800.00 THB</td>
                        <td>172</td>
                        <td>EMPORIO ARMANI</td>
                        <td>xxxxxx</td>
                        <td>Yes</td>
                        <td>Enable</td>
                    </tr>
                    <tr>
                        <td><input type="checkbox"/></td>
                        <td>503576</td>
                        <td><img src="http://via.placeholder.com/50x50"/></td>
                        <td>8169513</td>
                        <td>EMPORIO ARMANI CLASSIC WATCH</td>
                        <td>-</td>
                        <td>11,800.00 THB</td>
                        <td>172</td>
                        <td>EMPORIO ARMANI</td>
                        <td>xxxxxx</td>
                        <td>Yes</td>
                        <td>Enable</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    );
  }
}
