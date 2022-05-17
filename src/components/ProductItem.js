import React from "react";
import { FaStarHalfAlt, FaStar, FaRegStar } from "react-icons/fa";

export class ProductItem extends React.Component {
    getFullStars(num) {
        if (Number.isInteger(num)) {
            return num;
        }
        return Number(num.toString().split('.')[0]);
    }

    getHalfStars(num) {
        if (Number.isInteger(num)) {
            return 0;
        }
        return 1;
    }

    getEmptyStars(num) {
        if (Number.isInteger(num)) {
            if (num < 5) {
                return (5 - num);
            } else {
                return 0;
            }
        }
        
        if (Math.ceil(num) < 5) {
            return (5 - Math.ceil(num));
        }
        return 0;
    }

    render() {
        const { thumbnail, price, rating, title, id } = this.props.product;
        return (
            <>
                <div className="col mb-5">
                    <div className="card h-100">
                        <img className="card-img-top" src={thumbnail} alt="..." />
                        <div className="card-body p-4">
                            <div className="text-center">
                                <h5 className="fw-bolder">{title}</h5>
                                <div className="d-flex justify-content-center small text-warning mb-2">
                                    {[...Array(this.getFullStars(rating))].map((v, i) => <FaStar key={'fullStar_' + id + i}/> )}
                                    {[...Array(this.getHalfStars(rating))].map((v, i) => <FaStarHalfAlt key={'halfStar_' + id + i}/> )}
                                    {[...Array(this.getEmptyStars(rating))].map((v, i) => <FaRegStar key={'emptyStar_' + id + i}/> )}
                                </div>
                                ${price}
                            </div>
                        </div>
                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <div className="text-center"><a className="btn btn-outline-dark mt-auto">View item</a></div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default ProductItem;