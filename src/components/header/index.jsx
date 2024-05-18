import Logo from "../../assets/logo.svg";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar navbar-expand-lg justify-content-between position-static p-0">
          <a className="navbar-brand" href="#">
            <img src={Logo} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse flex-grow-0"
            id="navbarNavAltMarkup"
          >
            <ul className="navbar-nav align-items-center">
              <li className="nav-item mx-3">
                <a className="nav-link big-button" aria-current="page" href="#">
                  Teklif Al
                </a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link px-0 fw-semibold" href="#">
                  Kurumsal
                </a>
                <div className="mega-menu"></div>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link px-0" href="#">
                  Lojitik Hizmetlerimiz
                </a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link px-0" href="#">
                  İletişim
                </a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link px-0" href="#">
                  Blog
                </a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link px-0" href="#">
                  TR
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
