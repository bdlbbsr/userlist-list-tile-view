import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
        <div className="container">
          <nav className="navbar navbar-expand-lg bg-dark p-0" data-bs-theme="dark">
            
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent">
                <ul className="navbar-nav  mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link
                      className="nav-link"
                      aria-current="page"
                      to="/">
                      Box
                    </Link>
                  </li>
                  
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/withoutbox">
                      Without Box
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      to="/"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false">
                      Products
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/">
                          Electronics
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/">
                          Lifestyle
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/">
                          Fashion
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
             
          </nav>
        </div>
      </header>
  )
}

export default Header