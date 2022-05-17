import React from 'react';
import ReactPaginate from 'react-paginate';
import ProductItem from './ProductItem';
import ProductService from '../services/ProductService';

export class PaginatedProducts extends React.Component {
    state = {
        currentProducts: null,
        pageCount: 0,
        itemOffset: 0,
        itemsPerPage: 8,
        totalItems: 0,
        search: null
    };

    async componentDidMount() {
        this.getProducts();
    }

    async getProducts() {
        const products = await ProductService.getProducts(this.state.itemOffset);
        let pages = Math.ceil(products.total / this.state.itemsPerPage);
        this.setState({ currentProducts: products.products, totalItems: products.total, pageCount: pages, search: null });
    }

    async searchProducts() {
        const products = await ProductService.searchProducts(this.state.itemOffset, this.state.search);
        console.log(products);
        let pages = Math.ceil(products.total / this.state.itemsPerPage);
        this.setState({ currentProducts: products.products, totalItems: products.total, pageCount: pages });
    }

    handlePageClick = (e) => {
        const newOffset = e.selected * this.state.itemsPerPage;
        this.setState({itemOffset: newOffset}, () => {
            if (this.state.search) {
                this.searchProducts();
            } else {
                this.getProducts();
            }
        });
    };

    handleChange = (e) => {
        this.setState({ search: e.target.value });
    }

    handleClick = (e) => {
        e.preventDefault();
        if (this.state.search) {
            this.setState({itemOffset: 0}, () => {
                this.searchProducts();
            });
        }
    }

    handleClear = (e) => {
        e.preventDefault();
        document.getElementById('productSearch').value = '';
        this.setState({itemOffset: 0, search: null}, () => {
            this.getProducts();
        });
    }

    render() {
        return (
            <>
                <div className="row">
                <div className="col-md-6 offset-md-3">
                    <form className="center" onSubmit={this.handleSubmit}>
                      <input type="text" name="search" id="productSearch" onChange={this.handleChange} />  
                      <button onClick={this.handleClick}>Search</button>
                      <button onClick={this.handleClear}>Clear</button>
                    </form>
                    <br />
                  </div>
                </div>
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    {this.state.currentProducts && this.state.currentProducts.map((product, i) => (
                        <ProductItem key={'product_' + i} product={product} />
                    ))}
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <ReactPaginate
                            breakLabel='...'
                            nextLabel='Next'
                            onPageChange={this.handlePageClick}
                            pageRangeDisplayed={5}
                            pageCount={this.state.pageCount}
                            previousLabel='Previous'
                            renderOnZeroPageCount={null}
                            pageClassName='page-item'
                            pageLinkClassName='page-link'
                            activeClassName='active'
                            disabledClassName='disabled'
                            containerClassName='pagination justify-content-center'
                            previousClassName='page-item'
                            nextClassName='page-item'
                            previousLinkClassName='page-link'
                            nextLinkClassName='page-link'
                        />
                    </div>
                </div>
            </>
        );
    }   
}
export default PaginatedProducts;