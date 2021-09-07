import React from 'react'
import "./Recent.css"
import one from "../../assets/images/recently/1.png"
import two from "../../assets/images/recently/2.png"
import three from "../../assets/images/recently/3.png"
import four from "../../assets/images/recently/4.png"
import StarIcon from '@material-ui/icons/Star';
const Recent = () => {
    return (
        <>
            <div style={{ marginLeft: '50px' }}>
                <h4 style={{ fontSize: '30px', lineHeight: '0px' }}>Recently Added on Rent</h4>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>

                <div className="containerOne" >
                    <img alt="1" src={one} />
                    <h5>Rent a great, complete tama
                        drum set</h5>
                    <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <p> <span className="aed"> AED150</span>/Day</p>
                        <button className="btn">Also available to buy</button>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', color: '#605F5F', marginTop: '-20px' }}>
                        <StarIcon style={{
                            color: '#FF9100', "width": "20.91px", "height": "20.46px"
                        }} />
                        <p>
                            5.0 (120 People used it)
                        </p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: "space-around" }}>
                        <button style={{ width: "100px" }} className="rentBtn">Rent it</button>
                        <button style={{ width: "100px" }} className="rentBtn">Try Now</button>
                    </div>
                </div>


                <div className="containerOne" >
                    <img alt="" src={two} />
                    <h5>Bluthner grand piano - Rent a grand piano</h5>
                    <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <p> <span className="aed">AED6500</span>/Day</p>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', color: '#605F5F', marginTop: '-20px' }}>
                        <StarIcon style={{
                            color: '#FF9100', "width": "20.91px", "height": "20.46px"
                        }} />
                        <p>
                            5.0 (120 People used it)
                        </p>
                    </div>
                    <div className="buttonContainer">
                        <button className="rentBtn">Rent it</button>
                        <button style={{ background: "#fff", color: "grey", border: "1px solid black", marginTop: '15px' }} className="rentBtn">Try Now</button>

                    </div>
                </div>

                <div className="containerOne" >
                    <img alt="" src={three} />
                    <h5>Rent this large arabic tent - Arabian tent</h5>
                    <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <p> <span className="aed">AED900</span>/Day</p>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', color: '#605F5F', marginTop: '-20px' }}>
                        <StarIcon style={{
                            color: '#FF9100', "width": "20.91px", "height": "20.46px"
                        }} />
                        <p>
                            5.0 (120 People used it)
                        </p>
                    </div>
                    <div className="buttonContainer">
                        <button className="rentBtn">Rent it</button>

                    </div>
                </div>
                <div className="containerOne" >
                    <img alt="" src={four} />
                    <h5>Rent a laney speaker for guitars, microphones, keyboards, or any aux input</h5>
                    <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <p> <span className="aed">AED900</span>/Day</p>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', color: '#605F5F', marginTop: '-20px' }}>
                        <StarIcon style={{
                            color: '#FF9100', "width": "20.91px", "height": "20.46px"
                        }} />
                        <p>
                            5.0 (120 People used it)
                        </p>

                    </div>
                    <div className="buttonContainer">
                        <button className="rentBtn">Rent it</button>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Recent
