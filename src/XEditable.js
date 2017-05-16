import React from 'react';
import PropTypes from 'prop-types';

export default class XEditable extends React.Component {
  static defaultProps = {
    isLoading: false
  };
  static propTypes = {
    isLoading: PropTypes.bool
  };

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <span className='editable-container editable-inline'>
        <div>
          {this.props.isLoading
            ? (
              <div className='editableform-loading'></div>
            )
            : (
              <form className='form-inline editableform' onSubmit={this.props.save}>
                <div className='control-group form-group'>
                  <div>
                    <div className='editable-input' style={{
                      position: 'relative'
                    }}>
                      {this.props.children}
                    </div>
                    <div className='editable-buttons'>
                      <button type='submit' className='btn btn-primary btn-sm editable-submit' onClick={this.props.save}>
                        <i className='glyphicon glyphicon-ok'></i>
                      </button>
                      <button type='button' className='btn btn-default btn-sm editable-cancel' onClick={this.props.cancel}>
                        <i className='glyphicon glyphicon-remove'></i>
                      </button>
                    </div>
                  </div>
                  <div className='editable-error-block help-block'></div>
                </div>
              </form>
            )}
        </div>
      </span>
    );
  }
}
