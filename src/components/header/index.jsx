import Logo from "../../assets/logo.svg";
import TruckImage from "../../assets/truck.png";
import IconGreenLeaf from "../../assets/green-leaf.svg";
import IconWhiteLeaf from "../../assets/white-leaf.svg";

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
                <div className="mega-menu">
                  <div className="container">
                    <div className="row">
                      <div className="col-9">
                        <div className="row row-cols-4 mega-menu-items">
                          <div className="col">
                            <h4>Kurumsal</h4>
                            <ul>
                              <li>
                                <a href="#" className="">
                                  Hakkımızda
                                </a>
                              </li>
                              <li>
                                <a href="#">Tarihçemiz</a>
                              </li>
                              <li>
                                <a href="#">Sponsorluklar</a>
                              </li>
                              <li>
                                <a href="#">İş Ortaklığı</a>
                              </li>
                            </ul>
                          </div>
                          <div className="col">
                            <h4>İnsan Kaynakları</h4>
                            <ul>
                              <li>
                                <a href="#" className="">
                                  İnsan Kaynakları Politikamız
                                </a>
                              </li>
                              <li>
                                <a href="#">Kariyer</a>
                              </li>
                            </ul>
                          </div>
                          <div className="col">
                            <h4>Yönetim Sistemleri</h4>
                            <ul>
                              <li>
                                <a href="#" className="">
                                  Sertifikalarımız
                                </a>
                              </li>
                              <li>
                                <a href="#">Politikalar</a>
                              </li>
                              <li>
                                <a href="#">
                                  Veri Gizliliği ve Güvenlik (KVKK)
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="col">
                            <h4>Lojistik Rehberi</h4>
                            <ul>
                              <li>
                                <a href="#" className="">
                                  Lojistik Terimler Sözlüğü
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="col">
                            <h4 className="green-variant">Sürdürülebilirlik</h4>
                            <ul>
                              <li>
                                <a href="#" className="">
                                  <span>Yeşil Lojistik</span>
                                  <img
                                    src={IconGreenLeaf}
                                    className="ms-3"
                                    alt="Green Leaf Icon"
                                  />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-3">
                        <a href="#" className="image-link">
                          <span className="title">
                            <span>Yeşil Lojistik</span>
                            <img
                              src={IconWhiteLeaf}
                              className="ms-3"
                              alt="White Leaf Icon"
                            />
                          </span>
                          <img
                            src={TruckImage}
                            className="w-100"
                            alt="A truck on road."
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
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
