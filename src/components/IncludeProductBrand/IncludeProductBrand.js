import classNames from 'classnames';
import React, {Component} from 'react';

export default class IncludeProductBrand extends Component {
  render() {
    const styles = require('./includeProductBrand.scss');

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
        <div className={ styles['search-by-alphabet'] }>
            <ul>
                <li>
                    <a href="">0-9</a>
                </li>
                <li>
                    <a href="">A</a>
                </li>
                <li>
                    <a href="">B</a>
                </li>
                <li>
                    <a href="">C</a>
                </li>
                <li>
                    <a href="">D</a>
                </li>
                <li>
                    <a href="">E</a>
                </li>
                <li>
                    <a href="">F</a>
                </li>
                <li>
                    <a href="">G</a>
                </li>
                <li>
                    <a href="">H</a>
                </li>
                <li>
                    <a href="">I</a>
                </li>
                <li>
                    <a href="">J</a>
                </li>
                <li>
                    <a href="">K</a>
                </li>
                <li>
                    <a href="">L</a>
                </li>
                <li>
                    <a href="">M</a>
                </li>
                <li>
                    <a href="">N</a>
                </li>
                <li>
                    <a href="">O</a>
                </li>
                <li>
                    <a href="">P</a>
                </li>
                <li>
                    <a href="">Q</a>
                </li>
                <li>
                    <a href="">R</a>
                </li>
                <li>
                    <a href="">S</a>
                </li>
                <li>
                    <a href="">T</a>
                </li>
                <li>
                    <a href="">U</a>
                </li>
                <li>
                    <a href="">V</a>
                </li>
                <li>
                    <a href="">W</a>
                </li>
                <li>
                    <a href="">X</a>
                </li>
                <li>
                    <a href="">Y</a>
                </li>
                <li>
                    <a href="">Z</a>
                </li>
                <li>
                    <a href="">#</a>
                </li>
            </ul>
        </div>
        <div className={ styles['product-brand'] }>
            <div className={ styles['product-brand-inner']}>
                <ul>
                    <li>ABSOLUT</li>
                    <li>ALIZ PAULIN</li>
                    <li>APPLE</li>
                    <li>AIGNER</li>
                    <li>ALLOCACOC</li>
                    <li>ARAMIS</li>
                    <li>AIMM’S NATURAL</li>
                    <li>ALLSAINTS</li>
                    <li>ARAYA</li>
                    <li>AIMM’S SNACK</li>
                    <li>ALMAVIVA</li>
                    <li>AMBER</li>
                    <li>AIR MOTION</li>
                    <li>AMPHAN</li>
                    <li>ARMAND DE BRIGNAC</li>
                    <li>AIYA</li>
                    <li>ANESSA</li>
                    <li>ATTOON</li>
                    <li>AKALIKO</li>
                    <li>ANITA</li>
                    <li>AUDIO-TECHNICA</li>
                    <li>AKSRA</li>
                    <li>ANNA SUI</li>
                    <li>AUNTIE G</li>
                    <li>ALAÏA PARIS</li>
                    <li>AUPRES</li>
                    <li>AUTOBOT</li>
                    <li>ALBEDO</li>
                    <li>ANTHON BERG</li>
                    <li>AUTOMATIC BEAUTY</li>
                    <li>ALFRED DUNHILL</li>
                    <li>ANUROJ</li>
                    <li>AVANCÉ</li>
                    <li>ALG</li>
                </ul>
            </div>
        </div>
        <button className={ classNames(styles['btn-blue'], 'btn', 'btn-default') }>Add Product</button>
    </div>
    );
  }
}
