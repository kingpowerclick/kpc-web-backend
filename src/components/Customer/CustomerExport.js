import React, {Component} from 'react';
import classNames from 'classnames';
import { Modal } from 'react-bootstrap';

export default class CustomerExport extends Component {
    state = {
      displayCompleteModal: false
    }

    handleOpenExport = () => {
      this.setState({
        displayCompleteModal: true
      });
    }

    handleCloseModal = () => {
      this.setState({
        displayCompleteModal: false
      });
    }
    modalExport = (styles) => {
      const { displayCompleteModal } = this.state;
      	return (
    		<Modal show={ displayCompleteModal } dialogClassName={ classNames(styles.modal, styles['modal-export']) } >
    			<Modal.Header>
    	    		<Modal.Title className={ styles['modal-title'] }><strong>Export to Excel</strong>
    	    			<button
    	    				className={ classNames(styles['btn-ghost'], styles['close-modal'])}
    	    				onClick={ this.handleCloseModal }>
    	    				<i className="fa fa-times"></i>
    	    			</button>
    	    		</Modal.Title>
    	    	</Modal.Header>
    			<Modal.Body className={ styles['modal-body-export'] }>
					<span>Do you want to Export to Excel now?</span>
    			</Modal.Body>
                <Modal.Footer className={ styles['modal-footer-export'] }>
                    <button className={ classNames('btn', 'btn-default', styles['btn-footer-modal'], styles['btn-export']) }>Export</button>
                    <button className={ classNames('btn', 'btn-default', styles['btn-footer-modal'], styles['btn-cancel']) } >Cancel</button>
                </Modal.Footer>
    		</Modal>
    	);
    }
  render() {
    const styles = require('./customerFilters.scss');
    return (
        <li className={ classNames( styles.filter, styles['filter-mda'])} >
            { this.modalExport(styles) }
            <a href="#" onClick={ this.handleOpenExport }><i className="fa fa-share-square-o"></i>Export to CSV</a>
        </li>
    );
  }
}
