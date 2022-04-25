import React from 'react';

const Learn = () => {

    return (
        <>
            <nav id="navbar" class="nav">
                <ul class="nav-list">
                    <li>
                        <a href="/">Polygon Price Tracker</a>
                    </li>
                    <li>
                        <a href="/SetAlerts">Set Alerts</a>
                    </li>
                    <li>
                    <a href="/">Twitter Bot</a>
                    </li>
                    <li>
                        <a href="/Learn">Learn</a>
                    </li>
                </ul>
            </nav>

            <section id="introduction" class="introduction">
                <div class="my-desc">
                    <h3>This is where I'll put my general synopsis.</h3>

                </div>
                <div class="box">
                    <div class="links">
                        <h3>Polygon's Official Website</h3>
                        <p>The most trusted crytocurries, in my opinion, is one that has a thorough website with lots of sources for the user. Below is the link there.</p>
                    </div>
                    <div class="links">
                        <h3>Reddit</h3>
                        <p>Reddit is a user-curated, news aggregation website. Below is the link to the official Polygon sub Reddit. It includes discussion, news, and generalized questions.</p>
                    </div>
                    <div class="links">
                        <h3>Where to Buy</h3>
                        <p>There are many CEX's out there to use to buy crypto. Some of the most trusted also offer APY's to earn interest on what you buy.</p>
                    </div>
                    <div class="links">
                        <h3>Other Cryptos</h3>
                        <p>Polygon isn't the only crypto to be bullish on. There's many more out there. CoinMarketCap is a good aggregate source of knowledge of crypto.</p>
                    </div>
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
export default Learn;