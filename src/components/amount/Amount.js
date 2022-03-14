import React from "react";
import './amount.css'
function Amount() {
    return (
        <div className="container shadow">
            <div className="amount">
                <div className="card-body">
                    <h5 className="card-title mt-3 mb-3">THE TOTAL AMOUNT OF</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Temporary amount</h6>
                    <h6 className="card-subtitle mb-2 mt-1 text-muted">shipping</h6>
                    <hr/>
                    <p className="card-text vpn">The total amount of</p>
                    <p className="card-text vpn-2">(including VAT)</p>
                    <button className="co-btn">GO TO CHCEKOUT</button>
                </div>
                <div className="left-amount">
                    <h6 className="card-subtitle text mb-2">Rp.450.000</h6>
                    <h6 className="card-subtitle mt-3 text mb-5">Free</h6>
                    <h6 className="card-subtitle text mb-2 text-muted">Rp.950.000</h6>
                </div>
            </div>
        </div>
    )
}

export default Amount;