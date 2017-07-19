import React, {Component} from 'react';
import classNames from 'classnames';

export default class FilterPageSpecific extends Component {

  render() {
    const styles = require('./filterPageSpecific.scss');
    return (
      <div className={ classNames(styles['filter-page']) }>
		<div className={ styles['filter-records']}>
			<div className="btn-group">
			 	<button type="button" className={ classNames(styles['btn-record'], 'btn', 'btn-default')}>10 records</button>
			 	<button type="button" className={ classNames(styles['btn-record-select'], 'btn', 'btn-default', 'dropdown-toggle')} aria-expanded="false">
					<span className="caret"></span>
			 	</button>
			</div>
			<div className={styles['per-page']}><span>Per Page</span></div>
		</div>
		<div className={ styles['filter-pagination']}>
			<nav aria-label="Page navigation">
				<ul className={ classNames(styles['pagination-ul'], 'pagination')}>
					<li>
						<a href="#" aria-label="Previous">
				  			<span aria-hidden="true">&laquo;</span>
						</a>
			    	</li>
					<li><a href="#">1</a></li>
					<li><a href="#">2</a></li>
					<li><a href="#">3</a></li>
					<li><a href="#">4</a></li>
					<li><a href="#">5</a></li>
					<li>
				    	<a href="#" aria-label="Next">
				    		<span aria-hidden="true">&raquo;</span>
				    	</a>
					</li>
				</ul>
			</nav>
		</div>
	</div>
    );
  }
}

