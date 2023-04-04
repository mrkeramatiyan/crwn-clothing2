import { Outlet, Link } from "react-router-dom";

import { ReactComponent as CrwnLogo } from "../../assets/crown-logo.svg";

import './navigation.styles.scss';

const Navigation = () => (
    <>
        <nav className="navigation">
            <Link className="logo-container" to='/' >
                <CrwnLogo />
            </Link>

            <div className="nav-links-container">
                <Link className="nav-link" to='/shop'>
                    Shop
                </Link>
                <Link className="nav-link" to='/auth'>
                    Sing In
                </Link>
            </div>
        </nav>
        <Outlet />
    </>
);

export default Navigation;