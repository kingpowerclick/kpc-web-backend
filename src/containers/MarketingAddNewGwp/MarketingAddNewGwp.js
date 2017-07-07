import React, { Component } from 'react';
import classNames from 'classnames';
import { Breadcrumb} from 'components';

export default class MarketingAddNewGwp extends Component {
  render() {
    const styles = require('./marketingAddNewGwp.scss');

    return (
      <div className="container-fulid">
        <div className="row">
        	<div className={ classNames(styles['marketing-add-new-gwp-view']) }>
    	    	<header className={ styles['page-header']}>
    	    		<div className={ styles['page-title']}>
    	        		<h1 className={ styles.header }><strong>Add New GWP Global</strong></h1>
                         <Breadcrumb breadcrumb={ "Marketing > Add New GWP Global" }/>
    	    		</div>
              <div className={ styles['sub-menu']}>
                  <ul>
                    <li><a href="#"><i className="fa fa-chevron-left"></i> Back </a></li>
                    <li><a href="#"><i className="fa fa-eye"></i> Preview </a></li>
                    <li><a href="#"><i className="fa fa-floppy-o"></i> Save and Exit </a></li>
                  </ul>
              </div>
    	    	</header>
                <div className={styles['panel-left']}>
                    <div className={styles['panel-content']}>
                        <p className={styles['list-menu']}>Set GWP Global Info</p>
                        <p className={styles['list-menu']}>GWP Global (0)</p>
                        <ul className={styles['gwp-globle-menu']}>
                            <li className={styles['gwp-globle-menu-list']}><label><input type="radio" >Buy amount XXX baht GET GWP (0)</input></label></li>
                            <li className={styles['gwp-globle-menu-list']}><label><input type="radio">Buy A + any item GET GWP (0)</input></label></li>
                            <li className={styles['gwp-globle-menu-list']}><label><input type="radio">Buy item X GET GWP (0)</input></label></li>
                        </ul>
                    </div>
                </div>
                <div className={styles['panel-right']}>
                    <div className={styles['panel-content']}>
                        <p className={styles['list-menu']}>Buy A + any item GET GWP</p>
                        <div className={styles['form-group']}>
                              <label className={styles['control-label']}>Turn On/Off</label>
                              <div className={styles['control-on-off']}>
                                    <label className="radio-inline">
                                      <input type="radio">Off</input>
                                    </label>
                                    <label className="radio-inline">
                                      <input type="radio">On</input>
                                    </label>
                              </div>
                                  <hr></hr>
                        </div>
                        <div className={styles['control-group']}>
                            <div className={styles['control-label']}>
                                 <label className={styles['control-label']}>Set Condition</label>
                            </div>
                            <div className={ classNames(styles['control-optional'], styles['top-border'])}>
                                <div className={styles['content-option']}>
                                    <label>Buy Item A  +</label>
                                    <label className="radio-inline">
                                      <input type="radio">Any item</input>
                                    </label>
                                     <label>OR</label>
                                    <label className="radio-inline">
                                      <input type="radio">Buy Item Y</input>
                                    </label>
                                     <label>Get GWP</label>
                             </div>
                            </div>
                            </div>
                        <div className={styles['control-group']}>
                            <div className={styles['control-label']}>
                                 <label className={styles['control-label']}>Select products to include</label>
                            </div>
                            <div className={styles['control-optional']}>
                                <div className={styles['content-option']}>
                                    <label>Item A is</label>
                                    <label>
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-default">None</button>
                                            <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span className="caret"></span>
                                            <span className="sr-only">Toggle Dropdown</span>
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li><a href="#">Action</a></li>
                                                <li><a href="#">Another action</a></li>
                                            </ul>
                                        </div>
                                    </label>
                             </div>
                            </div>
                            </div>
                        <div className={styles['control-group']}>
                            <div className={styles['control-label']}>
                                 <label className={styles['control-label']}>Result of included </label>
                            </div>
                            <div className={styles['control-optional']}>
                                <div className={styles['content-option']}>
                                    <div>
                                        <ul>
                                            <li>by Category :  --</li>
                                            <li>by Brand :  --</li>
                                            <li>by SKU :  --</li>
                                            <li>by Specific Group :  --</li>
                                            <li>by Mass Upload :  --</li>
                                        </ul>
                                    </div>
                             </div>
                            </div>
                            </div>
                            <div className={styles['control-group']}>
                                <div className={styles['control-label']}>
                                     <label className={styles['control-label']}>Select products to include</label>
                                </div>
                                <div className={styles['control-optional']}>
                                    <div className={styles['content-option']}>
                                        <div className={styles.qty}>
                                            <label>QTY of item A is </label>
                                            <input type="text" className={ classNames(styles['input-form'], 'form-control') }></input>
                                        </div>
                                         <div className={styles['divied-blue']}></div>
                                 </div>
                                </div>
                                </div>
                        <div className={styles['control-group']}>
                            <div className={styles['control-label']}>
                                 <label className={styles['control-label']}>Select products to exclude</label>
                            </div>
                            <div className={styles['control-optional']}>
                                <div className={styles['content-option']}>
                                    <label>Item A is</label>
                                    <label>
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-default">None</button>
                                            <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span className="caret"></span>
                                            <span className="sr-only">Toggle Dropdown</span>
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li><a href="#">Action</a></li>
                                                <li><a href="#">Another action</a></li>
                                            </ul>
                                        </div>
                                    </label>
                             </div>
                            </div>
                            </div>
                        <div className={styles['control-group']}>
                            <div className={styles['control-label']}>
                                 <label className={styles['control-label']}>Result of exclude </label>
                            </div>
                            <div className={styles['control-optional']}>
                                <div className={styles['content-option']}>
                                    <div>
                                        <ul>
                                            <li>by Category :  --</li>
                                            <li>by Brand :  --</li>
                                            <li>by SKU :  --</li>
                                            <li>by Specific Group :  --</li>
                                            <li>by Mass Upload :  --</li>
                                        </ul>
                                    </div>
                             </div>
                            </div>
                            </div>
                            <div className={styles['control-group']}>
                                <div className={styles['control-label']}>
                                     <label className={styles['control-label']}>Select products to include</label>
                                </div>
                                <div className={styles['control-optional']}>
                                    <div className={styles['content-option']}>
                                        <div className={styles.qty}>
                                            <label>QTY of item A is </label>
                                            <input type="text" className={ classNames(styles['input-form'], 'form-control') }></input>
                                        </div>
                                         <div className={styles['divied-blue']}></div>
                                 </div>
                                </div>
                                </div>

                        <div className={styles['control-group']}>
                            <div className={styles['control-label']}>
                                 <label className={styles['control-label']}>Select products to include</label>
                            </div>
                            <div className={styles['control-optional']}>
                                <div className={styles['content-option']}>
                                    <label>Item Y is</label>
                                    <label>
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-default">None</button>
                                            <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span className="caret"></span>
                                            <span className="sr-only">Toggle Dropdown</span>
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li><a href="#">Action</a></li>
                                                <li><a href="#">Another action</a></li>
                                            </ul>
                                        </div>
                                    </label>
                             </div>
                            </div>
                            </div>
                        <div className={styles['control-group']}>
                            <div className={styles['control-label']}>
                                 <label className={styles['control-label']}>Result of included </label>
                            </div>
                            <div className={styles['control-optional']}>
                                <div className={styles['content-option']}>
                                    <div>
                                        <ul>
                                            <li>by Category :  --</li>
                                            <li>by Brand :  --</li>
                                            <li>by SKU :  --</li>
                                            <li>by Specific Group :  --</li>
                                            <li>by Mass Upload :  --</li>
                                        </ul>
                                    </div>
                             </div>
                            </div>
                            </div>
                            <div className={styles['control-group']}>
                                <div className={styles['control-label']}>
                                     <label className={styles['control-label']}>Select products to include</label>
                                </div>
                                <div className={styles['control-optional']}>
                                    <div className={styles['content-option']}>
                                        <div className={styles.qty}>
                                            <label>QTY of item A is </label>
                                            <input type="text" className={ classNames(styles['input-form'], 'form-control') }></input>
                                        </div>
                                         <div className={styles['divied-blue']}></div>
                                 </div>
                                </div>
                                </div>
                        <div className={styles['control-group']}>
                            <div className={styles['control-label']}>
                                 <label className={styles['control-label']}>Select products to exclude</label>
                            </div>
                            <div className={styles['control-optional']}>
                                <div className={styles['content-option']}>
                                    <label>Item Y is</label>
                                    <label>
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-default">None</button>
                                            <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span className="caret"></span>
                                            <span className="sr-only">Toggle Dropdown</span>
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li><a href="#">Action</a></li>
                                                <li><a href="#">Another action</a></li>
                                            </ul>
                                        </div>
                                    </label>
                             </div>
                            </div>
                            </div>
                        <div className={styles['control-group']}>
                            <div className={styles['control-label']}>
                                 <label className={styles['control-label']}>Result of exclude </label>
                            </div>
                            <div className={styles['control-optional']}>
                                <div className={styles['content-option']}>
                                    <div>
                                        <ul>
                                            <li>by Category :  --</li>
                                            <li>by Brand :  --</li>
                                            <li>by SKU :  --</li>
                                            <li>by Specific Group :  --</li>
                                            <li>by Mass Upload :  --</li>
                                        </ul>
                                    </div>
                             </div>
                            </div>
                            </div>
                            <div className={styles['control-group']}>
                                <div className={styles['control-label']}>
                                     <label className={styles['control-label']}>Quantity</label>
                                </div>
                                <div className={styles['control-optional']}>
                                    <div className={styles['content-option']}>
                                        <div className={styles.qty}>
                                            <label>QTY of item A is </label>
                                            <input type="text" className={ classNames(styles['input-form'], 'form-control') }></input>
                                        </div>
                                         <div className={styles['divied-blue']}></div>
                                 </div>
                                </div>
                                </div>
                                <div className={styles['control-group']}>
                                    <div className={styles['control-label']}>
                                         <label className={styles['control-label']}>Select products to include</label>
                                    </div>
                                    <div className={styles['control-optional']}>
                                        <div className={styles['content-option']}>
                                            <label>GWP is</label>
                                            <label>
                                                <div className="btn-group">
                                                    <button type="button" className="btn btn-default">None</button>
                                                    <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <span className="caret"></span>
                                                    <span className="sr-only">Toggle Dropdown</span>
                                                    </button>
                                                    <ul className="dropdown-menu">
                                                        <li><a href="#">Action</a></li>
                                                        <li><a href="#">Another action</a></li>
                                                    </ul>
                                                </div>
                                            </label>
                                     </div>
                                    </div>
                                    </div>
                                    <div className={styles['control-group']}>
                                        <div className={styles['control-label']}>
                                             <label className={styles['control-label']}>GWP is</label>
                                        </div>
                                        <div className={styles['control-optional']}>
                                            <div className={styles['content-option']}>
                                                <div>
                                                    <ul>
                                                        <li>by SKU :  --</li>
                                                    </ul>
                                                </div>
                                         </div>
                                        </div>
                                        </div>
                                        <div className={styles['control-group']}>
                                            <div className={styles['control-label']}>
                                                 <label className={styles['control-label']}>Quantity</label>
                                            </div>
                                            <div className={styles['control-optional']}>
                                                <div className={styles['content-option']}>
                                                    <div className={styles.qty}>
                                                        <label>QTY of item A is </label>
                                                        <input type="text" className={ classNames(styles['input-form'], 'form-control') }></input>
                                                    </div>
                                             </div>
                                            </div>
                                            </div>
                                        <div className={styles['control-group']}>
                                            <div className={styles['control-label']}>
                                                 <label className={styles['control-label']}></label>
                                            </div>
                                            <div className={styles['control-optional']}>
                                                <div className={styles['border-bottom']}>
                                             </div>
                                            </div>
                                            </div>
                                            <div className={styles['divied-blue']}></div>
                                            <div className={styles['add-new-box']}>
                                                <a href="#"><i className="fa fa-plus-square"></i>Add New another Condition</a>
                                            </div>
                    </div>
                </div>
                <button className={ classNames(styles['btn-blue'], 'btn', 'btn-default') }> Save</button>
            </div>
          </div>
      	</div>
		);
  }
}
