export default function Footer() {
  return (
    <>
      <footer className="footer">
        <section className="footerSection1">
          <img className="footerimg" src="footerLogo.png" alt="zomato logo" />
          <section className="inFootSection1">
            <select className="dropBox" name="country" id="country">
              <option value="India">India</option>
              <option value="UAE">UAE</option>
            </select>
          </section>
          {/* <!-- <select className="dropBox" name="lang" id="lang">
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
                <option value="Italian">Italian</option>
                <option value="Portugues">Portugues</option>
                <option value="Korean">Korean</option>
            </select> --> */}
        </section>

        <section className="footerList">
          <div className="footDiv1">
            <h4> About Zomato </h4>
            <ul>
              <a href="https://www.zomato.com/who-we-are">
                <li> Who We Are</li>
              </a>

              <a href="https://blog.zomato.com/">
                <li>Blog</li>
              </a>

              <a href="https://www.zomato.com/careers">
                <li>Work With Us</li>
              </a>

              <a href="https://www.zomato.com/investor-relations">
                <li>Investor Relations</li>
              </a>

              <a href="https://www.zomato.com/report-fraud">
                <li>Report Fraud</li>
              </a>

              <a href="https://blog.zomato.com/press-kit">
                <li>Press Kit</li>
              </a>

              <a href="https://www.zomato.com/contact">
                <li>Contact Us</li>
              </a>
            </ul>
          </div>

          <div className="footDiv2">
            <h4>Zomaverse</h4>
            <ul>
              <a href="https://www.zomato.com/">
                <li>Zomato</li>
              </a>

              <a href="https://blinkit.com/">
                <li>Blinkit</li>
              </a>

              <a href="https://www.district.in/">
                <li>District</li>
              </a>

              <a href="https://www.feedingindia.org/">
                <li>Feeding India</li>
              </a>

              <a href="https://www.hyperpure.com/">
                <li>Hyperpure</li>
              </a>

              <a href="https://www.zomato.com/live">
                <li>Zomato Live</li>
              </a>

              <a href="https://www.zomato.com/zomaland">
                <li>Zomaland</li>
              </a>

              <a href="https://www.weatherunion.com/">
                <li>Weather Union</li>
              </a>
            </ul>
          </div>

          <div className="footDiv3">
            <h4>For Restaurants</h4>
            <ul>
              <a href="https://www.zomato.com/partner-with-us/new/">
                <li>Partner With Us</li>
              </a>

              <a href="https://play.google.com/store/apps/details?id=com.application.services.partner&hl=en_IN&gl=US&pli=1">
                <li>Apps For You</li>
              </a>
            </ul>
          </div>

          <div className="footDiv4">
            <h4> Learn More</h4>
            <ul>
              <a href="https://www.zomato.com/policies/privacy/">
                <li>Privacy</li>
              </a>

              <a href="https://www.zomato.com/policies/security/">
                <li>Security</li>
              </a>

              <a href="https://www.zomato.com/policies/terms-of-service/">
                <li>Terms</li>
              </a>
            </ul>
          </div>
        </section>

        <hr></hr>
        <p className="footerText">
          By continuing past this page, you agree to our Terms of Service,
          Cookie Policy, Privacy Policy and Content Policies. All trademarks are
          properties of their respective owners. 2008-2024 © Zomato™ Ltd. All
          rights reserved.
        </p>
      </footer>
    </>
  );
}
