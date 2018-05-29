import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadProducts } from './../redux/actions/actions';

const mapStateToProps = state => ({
  products: state.products,
  loading: state.products.loading,
  error: state.products.error
});


class ProductList extends Component {
  componentWillReceiveProps(nextProps) {
  console.log(this.props);
  }
  componentDidMount() {
    this.props.dispatch(loadProducts());
  }
  componentWillMount() {
    //this.props.loadProducts();
  }

  render() {
  const { error, loading, products=[] } = this.props;
  if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }
  console.log(this.props);
    return <div>{products.map(article => (
      <div className="post-panel">
        <div className="post-metadata">
          <img
            alt=""
            className="avatar-image"
            src={article.external_images[0]}
            height="40"
            width="40"
          />
          <div className="post-info">
            <div classname="PopoverLink">
              <span className="popover-link" data-reactroot="">
                <a href={article.external_url}>
                  {article.name}
                </a>
              </span>
            </div>
            <small>{article.description}</small>
          </div>
      </div>
    </div>)
  )}</div>;
  }
}
export default connect(mapStateToProps)(ProductList);
