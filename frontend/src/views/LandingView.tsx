import React from 'react';
import search from 'assets/img/search-icon.svg';
import star from 'assets/img/star-icon.svg';
import msg from 'assets/img/msg-icon.svg';
import share from 'assets/img/share-icon.svg';
import SignedIcon from 'components/common/SignedIcon';
import api from 'dal';

import 'assets/css/LandingView.css';

const LandingView: React.FC = () => {
    const [test, setTest] = React.useState(0);
    React.useEffect(() => {
        api.get('/professor?page=0&size=20');
    }, [test]);

    return (
        <div className="landing-view">
            <div className="middle-content">
                <div className="search-container">
                    <p>Znajdź swojego profesora lub uczelnie</p>
                    <input
                        type="text"
                        className="professor"
                        placeholder="Twój profesor"
                    />
                    <input
                        type="text"
                        className="school"
                        placeholder="Nazwa uczelni"
                    />
                    <button
                        type="submit"
                        onClick={() => setTest(prev => prev + 1)}
                    >
                        WYSZUKAJ
                    </button>
                </div>
            </div>
            <div className="bottom-menu-container">
                <SignedIcon svg={search} text="Znajdź swojego profesora" />
                <SignedIcon svg={star} text="Oceń swojego profesora" />
                <SignedIcon svg={msg} text="Zobacz opinie innych" />
                <SignedIcon
                    svg={share}
                    text="Podziel się ważnymi informacjami"
                />
            </div>
        </div>
    );
};

export default LandingView;
