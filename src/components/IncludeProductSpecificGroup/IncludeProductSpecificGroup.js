import classNames from 'classnames';
import React, {Component} from 'react';

export default class IncludeProductSpecificGroup extends Component {
  render() {
    const styles = require('./includeProductSpecificGroup.scss');

    return (
      <div className={ styles['include-box'] }>
        <div className={ styles.title }>
            <strong>Select from the Brands that require to included with this Gruop</strong>
        </div>
        <div className={ styles.require }>
                <input type="text" className="form-control"/>
                <label>(0 item)</label>
        </div>
        <div className={ styles.search }>
            <input type="text" className="form-control" placeholder="Search"/>
        </div>
        <button className={ classNames(styles['btn-blue'], 'btn', 'btn-default') }>Add Product</button>
        <div className={ styles['product-brand'] }>
            <div className={ styles['product-brand-inner']}>
                <ul>
                    <li><input type="checkbox"/> ABSOLUT</li>
                    <li><input type="checkbox"/> ALIZ PAULIN</li>
                    <li><input type="checkbox"/> APPLE</li>
                    <li><input type="checkbox"/> AIGNER</li>
                    <li><input type="checkbox"/> ALLOCACOC</li>
                    <li><input type="checkbox"/> ARAMIS</li>
                    <li><input type="checkbox"/> AIMM’S NATURAL</li>
                    <li><input type="checkbox"/> ALLSAINTS</li>
                    <li><input type="checkbox"/> ARAYA</li>
                    <li><input type="checkbox"/> AIMM’S SNACK</li>
                    <li><input type="checkbox"/> ALMAVIVA</li>
                    <li><input type="checkbox"/> AMBER</li>
                    <li><input type="checkbox"/> AIR MOTION</li>
                    <li><input type="checkbox"/> AMPHAN</li>
                    <li><input type="checkbox"/> ARMAND DE BRIGNAC</li>
                    <li><input type="checkbox"/> AIYA</li>
                    <li><input type="checkbox"/> ANESSA</li>
                    <li><input type="checkbox"/> ATTOON</li>
                    <li><input type="checkbox"/> AKALIKO</li>
                    <li><input type="checkbox"/> ANITA</li>
                    <li><input type="checkbox"/> AUDIO-TECHNICA</li>
                    <li><input type="checkbox"/> AKSRA</li>
                    <li><input type="checkbox"/> ANNA SUI</li>
                    <li><input type="checkbox"/> AUNTIE G</li>
                    <li><input type="checkbox"/> ALAÏA PARIS</li>
                    <li><input type="checkbox"/> AUPRES</li>
                    <li><input type="checkbox"/> AUTOBOT</li>
                    <li><input type="checkbox"/> ALBEDO</li>
                    <li><input type="checkbox"/> ANTHON BERG</li>
                    <li><input type="checkbox"/> AUTOMATIC BEAUTY</li>
                    <li><input type="checkbox"/> ALFRED DUNHILL</li>
                    <li><input type="checkbox"/> ANUROJ</li>
                    <li><input type="checkbox"/> AVANCÉ</li>
                    <li><input type="checkbox"/> ALG</li>
                </ul>
            </div>
        </div>
        <button className={ classNames(styles['btn-blue'], 'btn', 'btn-default') }>Add Product</button>
    </div>
    );
  }
}
