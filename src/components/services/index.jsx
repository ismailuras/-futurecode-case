import { serviceData } from "../../mocks/serviceData";
import Card from "./Card";

function Services() {
  return (
    <section className="services">
      <div className="container">
        <div className="section-title">Hizmetlerimiz</div>
        <div className="mb-4">
          <p>Kaliteli, Güvenilir, Tam Zamanında, Çözüm Odaklı Hizmetler</p>
        </div>
        <div className="row row-cols-1 row-cols-md-2  row-cols-xl-3 row-cols-xxl-4 gy-5">
          {serviceData.map((serviceItem) => (
            <div className="col" key={serviceItem.id}>
              <Card data={serviceItem} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
