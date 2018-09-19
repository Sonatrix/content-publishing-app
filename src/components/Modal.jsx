import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadCities } from './../redux/actions/actions';

const mapStateToProps = state => ({
  cities: state,
});

const display = {
  display: 'block',
  position: 'relative',
};
const hide = {
  display: 'none',
  position: 'relative',
};

class Modal extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      toggle: true,
    };
  }
  componentWillMount() {
    this.props.loadCities();
  }

  toggle(event) {
    this.setState(prevState => ({
      toggle: !prevState.toggle,
    }));
  }
  render() {
    const {
      cities: {
        booking: { cities },
      },
      error,
      loading,
    } = this.props;
    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }
    var modal = [];
    modal.push(
      <div className="modal" style={this.state.toggle ? display : hide}>
        <div
          className="modal-content"
          style={{ marginTop: '60px', height: '400px', width: '300px' }}
        >
          <h4>Select Cities</h4>
          {cities.map(({ name, id }) => (
            <span>
              <a key={id} href={`booking/city/${id}`}>
                {name}
              </a>
            </span>
          ))}
        </div>
        <div className="modal-footer">
          <a className="btn-flat" onClick={this.toggle}>
            Agree
          </a>
        </div>
      </div>
    );
    return (
      <div>
        <div className="container-fluid main-container">
          <div className="col-md-6 col-md-offset-1 dashboard-main-content">
            <div
              className="posts-wrapper animated fadeInUp"
              data-behavior="endless-scroll"
              data-animation="fadeInUp-fadeOutDown"
            />
          </div>
          <div>{modal}</div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, { loadCities })(Modal);
