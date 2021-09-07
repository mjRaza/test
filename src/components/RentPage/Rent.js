import React from 'react'
import Rectangle68 from "../../assets/images/Rectangle 68.png"
import Rectangle72 from "../../assets/images/Rectangle 72.png"
import Group27 from "../../assets/images/Group27.png"
import "./Rent.css"
const Rent = () => {
    return (
        <div>
            <div style={{ marginLeft: '50px' }}>
                <h4 style={{ fontSize: '30px', lineHeight: '0px' }}>Rent</h4>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <div>
                    <img alt="" className="img" src={Rectangle72} />
                    <h4>Outdoor & Recreational</h4>
                </div>
                <div>
                    <img alt="" className="img" src={Group27} />
                    <h4>Events & Parties</h4>
                </div>
                <div>
                    <img alt="" className="img" src={Rectangle68} />
                    <h4>Spaces</h4>
                </div>
            </div>

        </div>
    )
}

export default Rent
