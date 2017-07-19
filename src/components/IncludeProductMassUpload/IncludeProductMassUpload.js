import React, {Component} from 'react';

export default class IncludeProductMassUpload extends Component {
  render() {
    const styles = require('./includeProductMassUpload.scss');

    return (
      <div className={ styles['include-box'] }>
        <div className={ styles.title }>
            <strong>Upload of Specific item or group from SKU/Bin number</strong>
        </div>
        <span>Support file format…”Lorem ipsum dolar”</span>
        <div className="input-group">
            <input type="text" className="form-control" placeholder="Choose file" aria-describedby="basic-addon2"/>
            <span className="input-group-addon" id="basic-addon2">Browse</span>
        </div>
        <div className={ styles['click-to-download'] }>
            <a href="#"><i className="fa fa-download"></i> Click here to download  format of mass upload</a>
        </div>
    </div>
    );
  }
}
