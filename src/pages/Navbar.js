import React from 'react';
import { Link } from 'react-router-dom';

function Navbar ()
{
    return(
        <div>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-5">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light border navbar-expand">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-link">
                                <Link className="nav-link active" aria-current="page"
                                   to="create"><b>Create Transaction</b></Link>
                            </li>
                            <li className="nav-link">
                                <Link className="nav-link active" aria-current="page"
                                      to="view"><b>View Transactions</b></Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Navbar;
