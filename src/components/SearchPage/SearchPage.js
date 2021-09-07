import React from 'react'
import bg from "../../assets/images/a.jpg"
import "./SearchPage.css"
const SearchPage = () => {
    return (
        <div style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundImage: `url("${bg}")`,
            width: "100%",
            height: "77vh",
            backgroundSize: "contain",
        }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <span >Rent</span>
                <span style={{ color: "#605F5F", marginLeft: '20px' }}>Try before you buy</span>
            </div>
            <div className="inputSearch" >
                <p>Product</p>
                <input placeholder="Search your product" />
            </div>
        </div >
    )
}

export default SearchPage
