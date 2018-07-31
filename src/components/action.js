class Action extends component {

  handleAction = function() {
      this.props.onClick()

      // document.getElementbyID('action').classList.add('')
  }.bind(this);

  render() {
      return (
          <a
              id='action'
              onClick={() => this.handleAction()}
              className={`${this.props.className} action`}>
          </a>
      )
  }
}