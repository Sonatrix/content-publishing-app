import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadShows } from './../redux/actions/actions';

const mapStateToProps = state => ({
  shows: state,
});

const display = {
  display: 'block',
  position: 'relative',
};
const hide = {
  display: 'none',
  position: 'relative',
};

const ShowComponent = ({ name, timings }) => {
  return (
    <div key={name}>
      <h3>{name}</h3>
      {timings.map(({ time }) => <span> {time}</span>)}
    </div>
  );
};

class Booking extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.loadShows(this.props.match.params.id);
  }

  render() {
    const {
      shows: {
        booking: { shows },
      },
      error,
      loading,
    } =
      this.props || {};
    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <div className="container-fluid main-container">
          <div className="col-md-6 col-md-offset-1 dashboard-main-content">
            <div
              className="posts-wrapper animated fadeInUp"
              data-behavior="endless-scroll"
              data-animation="fadeInUp-fadeOutDown"
            >
              {shows.map(({ name, timings }) => (
                <ShowComponent key={name} name={name} timings={timings} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, { loadShows })(Booking);
