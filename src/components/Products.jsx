import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadProducts } from './../redux/actions/actions';

const mapStateToProps = state => ({
  products: state,
});

class ProductList extends Component {
  componentWillReceiveProps(nextProps) {}
  componentDidMount() {
    this.props.dispatch(loadProducts());
  }
  componentWillMount() {
    //this.props.loadProducts();
  }

  render() {
    const {
      products: {
        product: { products, error, loading },
      },
    } = this.props;
    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        {products.map(
          product =>
            product && (
              <div className="post-panel">
                <div className="post-metadata">
                  <img
                    alt=""
                    className="avatar-image"
                    src={product.external_images[0]}
                    height="200"
                    width="400"
                  />
                  <div className="post-info">
                    <div classname="PopoverLink">
                      <span className="popover-link" data-reactroot="">
                        <a href={product.external_url}>{product.name}</a>
                      </span>
                    </div>
                    <small>{product.description}</small>
                  </div>
                </div>
              </div>
            )
        )}
      </div>
    );
  }
}
export default connect(mapStateToProps)(ProductList);
