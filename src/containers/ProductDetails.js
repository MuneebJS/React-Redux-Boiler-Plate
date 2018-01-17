import React, { Component } from 'react';
import { connect } from 'react-redux'


const styles = {
    border: '1px solid #eee',
    margin: 10,
    padding: 10
}
export default class ProductDetails extends React.Component {
    render() {
        return (
            <div className="container" style={{ marginTop: 50 }}>
                <div className="row">
                    <div className="col-md-7">
                        <img src="https://picsum.photos/600" alt="Product" className="col-md img-responsive" />

                    </div>
                    <div className="col-md-5">
                        <h1 class="productName text-uppercase" style={{ display: 'block', fontSize: 26, textTransform: "uppercase" }}>Lace-Up Laptop
                        </h1>
                        <div class="productPrice" id="product_price">
                            <span class="regluarPrice">
                                SAR 369
						</span>
                        </div>
                        <div class="productsku">
                            <span class="sku-txt">SKU: FS18-0000033A</span>
                        </div>
                        <p className="par" style={{marginTop: 20, lineHeight: '1.5em'}}>
                           <strong>Description:</strong> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}





