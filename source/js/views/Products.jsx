import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPeople,getProducts } from 'actions/people';
import Pagination from "react-js-pagination";
import v from 'voca';

class Products extends Component {

    static propTypes = {
        error: PropTypes.string,
        loading: PropTypes.bool,
        people: PropTypes.object,
        // from react-redux connect
        dispatch: PropTypes.func,
    }

    constructor(props){
      super(props);
      this.state = {
        activePage: 1,
        curCategory:1
      };
    }

    handlePageChange = (pageNumber) => {
      const { dispatch } = this.props;
      this.setState({activePage: pageNumber});
      dispatch(getProducts({'category':this.state.curCategory,'pageNo':pageNumber}));
    }

    componentWillMount() {
        const {
            dispatch,
        } = this.props;
        dispatch(getProducts({'category':this.state.curCategory,'pageNo':'1'}));
    }

    changeCategory = (obj) => {
      const {
        dispatch,
      } = this.props;
      this.setState({curCategory:obj.id});

      this.props.history.push('/products/'+ v.slugify(obj.name))

      dispatch(getProducts({'category':obj.id,'pageNo':'1'}));
    }

    renderProducts = () => {
      const {
          products,
      } = this.props;

      return products.map(prod => {
          return (
            <div className="col-sm-4" key={Math.random()}>
              <div className="panel panel-primary">
                <div className="panel-heading">{prod.name}</div>
                <div className="panel-body">
                  <img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive" style={{'width':'100%'}} alt="Image"/>
                </div>
                <div className="panel-footer">{prod.price}</div>
              </div>
            </div>
          );
      });
    }

    render() {
        const {
            loading,
            error,
            count,
            products,
            category
        } = this.props;

        return (
            <div className='People'>
              <div id="mySidenav" className="sidenav">
                {
                  (category !== null) ? category.map((obj) => (<a key={Math.random()} onClick={this.changeCategory.bind(this,obj)} >{obj.name}</a>)):''
                }
              </div>
                <div className="container">
                  <div className="row">
                    { products && this.renderProducts() }
                  </div>
                </div>

                <br/>

                <Pagination
                  activePage={this.state.activePage}
                  itemsCountPerPage={2}
                  totalItemsCount={count}
                  pageRangeDisplayed={5}
                  onChange={this.handlePageChange}
                />

            </div>
        );
    }
}

export default connect((state)=> {
	return ({
    error: state.people.get('error'),
        loading: state.people.get('loading'),
        people: state.people.get('people'),
        products: state.people.get('products'),
        count:state.people.get('count'),
        category:state.people.get('category')
	});
})(Products);

