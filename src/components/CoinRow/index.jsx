import React from "react";
import FavoriteIcon from "../FavoriteIcon";
import "./coinRow.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

//function to format number with commas
export const formatNumber = (number) => {
  if (number.toString().split(/\./).length === 1) {
    return new Intl.NumberFormat().format(number);
  } else {
    return number;
  }
};

function CoinRow({
  id,
  rank,
  image,
  price,
  name,
  symbol,
  marketCap,
  dayPercent,
}) {
  const color = dayPercent >= 0 ? "green" : "red";

  return (
    <>
      <div className="row">
        <FavoriteIcon />
        <span>{rank}</span>
        <Link to={`/currencies/${id}`}>
          <img width={30} height={30} src={image} alt={name} />
        </Link>
        <Link to={`/currencies/${id}`}>{name}</Link>
        <Link to={`/currencies/${id}`}>{symbol.toUpperCase()}</Link>
        <span onChange={() => "Hola, estoy cambiando de precio c:"}>
          ${formatNumber(price)}
        </span>
        <span>${formatNumber(marketCap)}</span>
        <span className="row__day" style={{ color }}>
          <span className="triangle">{color === "green" ? "▲" : "▼"}</span>
          {dayPercent?.toFixed(1)}%
        </span>
      </div>
    </>
  );
}

export default CoinRow;

CoinRow.propTypes = {
  rank: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  marketCap: PropTypes.number,
  dayPercent: PropTypes.number,
};
