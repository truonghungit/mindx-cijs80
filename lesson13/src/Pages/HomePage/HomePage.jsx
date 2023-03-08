export default function HomePage() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="#">
            Suppers
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
            </ul>

            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Contact Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Cart
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header>
        <div class="container">
          <div class="row">
            <div class="col-12 mb-0 mb-lg-4">
              <div>
                <div className="position-absolute">
                  <div>Let’s Bring Beauty to Your Home</div>
                  <div>Fast Delivery & Fair Prices</div>
                  <button type="button" class="btn btn-primary">
                    Shop now
                  </button>
                </div>
                <img className="img-fluid" alt="" src="/bg-img.png" />
              </div>
            </div>
            <div class="col-12 col-lg-4  mt-4 mt-lg-0">
              <div>
                <img className="img-fluid" alt="" src="/wc-12-1.png" />
              </div>
            </div>
            <div class="col-12 col-lg-4  mt-4 mt-lg-0">
              <div>
                <img className="img-fluid" alt="" src="/wc-12-1.png" />
              </div>
            </div>
            <div class="col-12 col-lg-4  mt-4 mt-lg-0">
              <div>
                <img alt="" className="img-fluid" src="/wc-12-1.png" />
              </div>
            </div>
          </div>
        </div>
      </header>
      <button type="button" className="btn btn-primary">
        OK
      </button>
    </>
  );
}
