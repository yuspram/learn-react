import React from "react";
import { useState } from "react";
import './product.css'

function Produk(props){

    const [count, setCount] = useState(0);

    return (
        <div className="container shadow produk">
            <div className="mb-3">
                <div className="row g-0">
                    <div className="col-md-4 mt-5">
                        <img src="https://via.placeholder.com/150" className="img-fluid rounded-start"/>
                    </div>
                    <div className="col-md-8 desk-product">
                        <div className="card-body mt-4">
                            <h5 className="text-start title-card">SEPATU COMPAS</h5>
                            <div className="counter">
                                <span className="count-items" onClick={() => setCount(count - 1)}> <h6> - </h6> </span>
                                <h6 className="count-result">{count}</h6>
                                <span className="count-items" onClick={() => setCount(count + 1)}> <h6> + </h6> </span>
                            </div>
                            <p className="text-start desk">COLOR: BLUE</p>
                            <p className="text-start desk">SIZE: 42</p>
                            <p className="text-start mt-5 option-card text-muted">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                </svg>
                                <p className="opt">REMOVE ITEM</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                                </svg>
                                <p className="opt">MOVE TO WISHLIST</p>
                                <span className="price">Rp.450.000</span>
                            </p>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="row g-0">
                    <div className="col-md-4 mt-5">
                        <img src="https://via.placeholder.com/150" className="img-fluid rounded-start"/>
                    </div>
                    <div className="col-md-8 desk-produk">
                        <div className="card-body mt-4">
                            <h5 className="text-start title-card">SEPATU COMPAS</h5>
                            <div className="counter">
                                <span className="count-items" onClick={() => setCount(count - 1)}> <h6> - </h6> </span>
                                <h6 className="count-result">{count}</h6>
                                <span className="count-items" onClick={() => setCount(count + 1)}> <h6> + </h6> </span>
                            </div>
                            <p className="text-start desk">COLOR: BLUE</p>
                            <p className="text-start desk">SIZE: 42</p>
                            <p className="text-start mt-5 option-card text-muted">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                </svg>
                                <p className="opt">REMOVE ITEM</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                                </svg>
                                <p className="opt">MOVE TO WISHLIST</p>
                                <span className="price">Rp.450.000</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Produk;