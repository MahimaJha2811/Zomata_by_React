export default function MainContent() {
  return (
    <>
      <section id="main-body">
        <div id="services">
          <div id="option">
            <div id="image">
              <a href="https://www.zomato.com/ahmedabad/delivery?delivery_subzone=1999">
                <img
                  src="../src/components/image/orderOnline.png"
                  alt="order-online-food"
                />
              </a>
            </div>
            <div id="info">
              <h2>Order Online</h2>
              <p>Stay home and order to your doorstep</p>
            </div>
          </div>

          <div id="option">
            <div id="image">
              <a href="https://www.zomato.com/ahmedabad/restaurants">
                <img
                  src="../src/components/image/dining.png"
                  alt="Dining Table"
                />
              </a>
            </div>
            <div id="info">
              <h2>Dining</h2>
              <p>View the city's favourite dining venues</p>
            </div>
          </div>

          <div id="option">
            <div id="image">
              <a href="https://www.zomato.com/live/city/ahmedabad/events">
                <img
                  src="../src/components/image/live-events.png"
                  alt="Live Events"
                />
              </a>
            </div>
            <div id="info">
              <h2>Live Events</h2>
              <p>Discover India's best events & concerts</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
