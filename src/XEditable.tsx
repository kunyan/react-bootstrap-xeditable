import React from 'react';

interface IProps {
  isLoading?: boolean;
  onSave: () => void;
  onCancel: () => void;
}

export default class XEditable extends React.PureComponent<IProps> {
  static defaultProps: Partial<IProps> = {
    isLoading: false
  };

  onClickSaveButton = () => {
    this.props.onSave();
  };

  onClickCancelButton = () => {
    this.props.onCancel();
  };

  renderBody() {
    if (this.props.isLoading) {
      return <div className="editableform-loading" />;
    } else {
      return (
        <div className="form-inline editableform">
          <div className="control-group form-group">
            <div>
              <div
                className="editable-input"
                style={{
                  position: 'relative'
                }}>
                {this.props.children}
              </div>
              <div className="editable-buttons">
                <button
                  type="submit"
                  className="btn btn-primary btn-sm editable-submit"
                  onClick={this.onClickSaveButton}>
                  <i className="glyphicon glyphicon-ok" />
                </button>
                <button
                  type="button"
                  className="btn btn-default btn-sm editable-cancel"
                  onClick={this.onClickCancelButton}>
                  <i className="glyphicon glyphicon-remove" />
                </button>
              </div>
            </div>
            <div className="editable-error-block help-block" />
          </div>
        </div>
      );
    }
  }

  render() {
    return <span className="editable-container editable-inline">{this.renderBody()}</span>;
  }
}
