import { shape, number, string } from "prop-types";

function Card({ data }) {
  return (
    <div className="service-card">
      <a href={data.url}>
        <div className="image">
          <img src={data.img} alt={data.title} />
        </div>
        <div className="title">{data.title}</div>
        <div className="desc">{data.desc}</div>
      </a>
    </div>
  );
}

Card.propTypes = {
  data: shape({
    id: number.isRequired,
    title: string.isRequired,
    desc: string.isRequired,
    img: string.isRequired,
    url: string.isRequired,
  }),
};

export default Card;
