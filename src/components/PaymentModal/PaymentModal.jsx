import React from 'react'
import "./PaymentModal.css"
const PaymentModal = ({toggleModal}) => {
  return (
    <div>
    <div className="modal" id="exampleModalCenter" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header">
          {/* <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5> */}
          <button type="button" className="btn close" onClick={()=>{toggleModal()}}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
    
          <h5 className="card-title">hhfghfg</h5>
          <span className="date">fghfg</span>
          <p className="card-text">
           hfghgfh
          </p>
        </div>
        <div className="modal-footer">
            <button>dfdsf</button>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default PaymentModal
