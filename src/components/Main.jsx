import React, { useState } from 'react';
import zcoinImage from '../assets/zcoin.png';

export const Main = () => {
    const [balance, setBalance] = useState(0);
    const energyLimit = 5000;
    const [energy, setEnergy] = useState(energyLimit);
    const coinsForTap = 10;

    const upBalanceHandler = (evt) => {
        const { clientX: x, clientY: y } = evt;
        console.log(x, y, energy);
        setBalance((prev) => prev + coinsForTap);
        setEnergy((prev) => prev - coinsForTap);
    };

    const league = 'Бандит';
    return (
        <div className="main">
            <div className="main__header">
                <div className="balance">{balance.toLocaleString('fr-FR')}</div>
                <div className="league">{league}</div>
            </div>
            <div className="main__body">
                <div className="coin" onClick={upBalanceHandler}>
                    <img className="zcoin-image" src={zcoinImage} alt="" />
                </div>
            </div>
            <div className="main__footer">
                <div className="energy">
                    <div className="energy__point">
                        {energy}/{energyLimit}
                    </div>
                    <div className="energy__line">
                        <div
                            className="energy__state"
                            style={{ width: (energy / energyLimit) * 100 + '%' }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};
