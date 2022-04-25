import React from 'react';

const SetAlerts = () => {

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
                <div class="box">
                    <div class="email-notifications">
                        <h3>Set Alerts Via Email</h3>
                        <form id="email-alerts">
                            <input type="email" id="email" placeholder="Enter Email" />
                            <br></br>
                            <input type="number" id="percent" placeholder="    Percent Change" />
                        </form>
                        <button type="submit" form="email-alerts" value="Submit">Submit</button>
                    </div>

                    <div class="text-notifications">
                        <h3>Set Alerts Via Text</h3>
                        <form id="text-alerts">
                            <input type="tel" id="email" placeholder="Enter Phone Number" />

                            <br></br>
                            <input type="number" id="percent" placeholder="    Percent Change" />
                        </form>
                        <button type="submit" form="text-alerts" value="Submit">Submit</button>
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
export default SetAlerts;