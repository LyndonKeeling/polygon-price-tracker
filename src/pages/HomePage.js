import React from 'react';
import Home from './HomePage';
import Learn from './Learn';
import SetAlerts from './SetAlerts';

const HomePage = () => {

    return (
        <>
            <nav id="navbar" class="nav">
                <ul class="nav-list">
                    <li>
                        <a href={Home}>Polygon Price Tracker</a>
                    </li>
                    <li>
                        <a href={SetAlerts}>Set Alerts</a>
                    </li>
                    <li>
                        <a href={Learn}>Twitter Bot</a>
                    </li>
                    <li>
                        <a href="/Learn">Learn</a>
                    </li>
                </ul>
            </nav>

            <section id="introduction" class="introduction">
                <div class="box">
                    <div class="description">
                        <p>Polygon Price Tracker is a web-app used to actively track the price of the cryptocurrency 'Polygon' as well as learn a bit about it. It allows the user to set alerts, as well as access the Twitter bot which notifies price swings.</p>
                    </div>
                    <div class="tracker">Polygon Current Price Listed Here Below **In progress**</div>
                </div>
            </section>


            <footer>
                <p>
                    Polygon Price Tracker project done by Lyndon Keeling
                </p>
                <p>Light/Dark Mode</p>
                <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                </label>
            </footer>


        </>

    )
}
export default HomePage;