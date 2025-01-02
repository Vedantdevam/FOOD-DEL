import React from 'react';
import './SodaCan.css';

const SodaCan = () => {
    return (
        <div>
            
            <div className="banner">
                <div className="product">
                    <div className="soda" style={{ '--url': 'url(images/bg.png)' }}>
                    </div>
                    <div className="soda" style={{ '--url': 'url(images/bg2.png)' }}>
                    </div>
                </div>
                <div className="rock">
                    <img src="images/rock1.png" alt="" />
                    <img src="images/rock2.png" alt="" />
                    <img src="images/rock3.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default SodaCan;
