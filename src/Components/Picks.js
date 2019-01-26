import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './headout-picks.css';

class TopPicks extends Component {
  render() {
    return (
      <div>
        <div className="headout-picks-wrapper">
          <div className="headout-picks-nav">
            <div>
              <h1>Headout Picks</h1>
            </div>
            <div className="view-all">
              <h3>View All</h3>
              <i className="fas fa-arrow-right" />
            </div>
          </div>
          <hr
            style={{
              backgroundColor: '#ffbb58',
              width: '75px',
              height: '2px',
              border: 'none',
              marginTop: '0px',
              marginLeft: '0px',
              marginBottom: '20px'
            }}
          />
          <div className="top-picked-carousel-wrap">
            <PickedSlider />
          </div>
        </div>
      </div>
    );
  }
}

class PickedSlider extends React.Component {
  render() {
    var settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      nextArrow: <Right />,
      prevArrow: <Left />
    };
    return (
      <Slider {...settings}>
        {pickedData &&
          pickedData.map(
            ({
              id,
              city,
              url,
              description,
              currency,
              currentPrice,
              ratings,
              stars,
              discount,
              cashback,
              lastPrice
            }) => (
              <ExperienceCard
                key={id}
                city={city}
                url={url}
                description={description}
                currency={currency}
                price={currentPrice}
                ratings={ratings}
                stars={stars}
                discount={discount}
                cashback={cashback}
                lastPrice={lastPrice}
              />
            )
          )}
      </Slider>
    );
  }
}

class ExperienceCard extends Component {
  render() {
    const url = `url(${this.props.url})`;
    const {
      discount,
      cashback,
      currency,
      lastPrice,
      ratings,
      stars
    } = this.props;

    return (
      <div className="exp-card">
        <div
          className="exp-card-img"
          style={{
            backgroundImage: url
          }}
        >
          {cashback ? (
            <div className="cashback">
              <p>{`${this.props.cashback}% cashback`}</p>
            </div>
          ) : null}
        </div>
        <div className="exp-content-wrap">
          <div className="exp-info-wrap">
            <p id="exp-city">{this.props.city}</p>
            <p id="exp-description">{this.props.description}</p>
          </div>
          <div>
            <div className="price-section">
              <div className="div">
                {discount ? (
                  <div className="discount">
                    <p>
                      <span>
                        <i className="fas fa-gift" />
                      </span>
                      {`upto ${this.props.discount}% off`}
                    </p>
                  </div>
                ) : (
                  <div className="discount" />
                )}
                <div className="ratings-section">
                  {stars ? (
                    <div className="stars">
                      <p id="stars-p">
                        {this.props.stars}
                        <span id="star"> &#9733;</span>
                      </p>
                    </div>
                  ) : (
                    <div
                      style={{
                        width: '25px',
                        height: '20px',
                        borderRadius: '50%',
                        background: 'linear-gradient(340deg, #ffbb58, #f5c684)',
                        paddingTop: '3px'
                      }}
                    >
                      <p id="stars-p">
                        <span> &#9733;</span>
                      </p>
                    </div>
                  )}
                  {ratings ? (
                    <p id="ratings">{`(${this.props.ratings} Ratings)`}</p>
                  ) : (
                    <p id="ratings">Newly Arrived</p>
                  )}
                </div>
              </div>
              <div className="price">
                <p>from</p>
                {lastPrice && this.props.city === 'DUBAI' ? (
                  <p id="last-price">{`${this.props.currency} ${
                    this.props.lastPrice
                  }`}</p>
                ) : null}
                {lastPrice && this.props.city !== 'DUBAI' ? (
                  <p id="last-price">{`${this.props.currency}${
                    this.props.lastPrice
                  }`}</p>
                ) : null}
                {currency === 'AED' ? (
                  <p id="price">{`${this.props.currency} ${
                    this.props.price
                  }`}</p>
                ) : (
                  <p id="price">{`${this.props.currency}${
                    this.props.price
                  }`}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function Left(props) {
  const { style, onClick } = props;
  return (
    <div
      id="slick-arrow-left"
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    >
      <i className="fas fa-arrow-left left-arrow" />
    </div>
  );
}

function Right(props) {
  const { style, onClick } = props;
  return (
    <div
      id="slick-arrow-right"
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    >
      <i className="fas fa-arrow-right right-arrow" />
    </div>
  );
}

// Currently using this Data to Populate Headout Pics Card

const pickedData = [
  {
    id: 1,
    currentPrice: 29,
    currency: '$',
    stars: 4.6,
    ratings: 681,
    city: 'NEW YORK',
    description: 'The Phantom of the Opera',
    url:
      'https://cdn-imgix.headout.com/tour/652/TOUR-IMAGE/cd0fa708-27c2-4145-9fcf-14e84d910456-517-new-york-phantom-of-the-opera-00.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
  },
  {
    id: 2,
    currentPrice: 57.5,
    currency: '$',
    stars: 4.6,
    ratings: 564,
    cashback: 10,
    city: 'NEW YORK',
    description: 'Aladdin',
    url:
      'https://cdn-imgix.headout.com/tour/638/TOUR-IMAGE/d8da7ef3-6be5-4ab9-a88e-66a1cf8b5126-2.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
  },
  {
    id: 3,
    currentPrice: 40.5,
    lastPrice: 79,
    currency: '$',
    discount: 49,
    city: 'NEW YORK',
    description: 'King Kong - Broadway Week Discount',
    url:
      'https://cdn-imgix.headout.com/tour/18201/TOUR-IMAGE/a24bde23-2e32-49d4-bf14-b933fe60fe52-c817b2f3-194d-4fde-9ad8-fccbaf50ed31-9339-new-york-king-kong-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
  },
  {
    id: 4,
    currentPrice: 141,
    lastPrice: 146,
    currency: 'AED',
    discount: 16,
    stars: 4.6,
    ratings: 2588,
    cashback: 5,
    city: 'DUBAI',
    description: 'Burj Khalifa: At the Top (Level 124 & 125)',
    url:
      'https://cdn-imgix.headout.com/tour/2636/TOUR-IMAGE/84609881-4697-4b73-bb46-9998b2fd7aa2-1866-dubai-burj-khalifa-at-the-top-01-4-.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
  },
  {
    id: 5,
    currentPrice: 196,
    lastPrice: 206,
    currency: 'AED',
    discount: 8,
    stars: 4.6,
    ratings: 1240,
    cashback: 5,
    city: 'DUBAI',
    description: 'Dubai Acquarium & Underwater Zoo + Burj Khalifa Combo',
    url:
      'https://cdn-imgix.headout.com/tour/3832/TOUR-IMAGE/4306765f-f03f-47a0-a5c5-241ae6cd49f6-2545-dubai-aquarium-underwater-zoo-burj-khalifa-combo-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
  },
  {
    id: 6,
    currentPrice: 20,
    currency: '€',
    stars: 4.6,
    ratings: 437,
    city: 'PARIS',
    description:
      'Palace of Versailles All Access Passport Entry with Audioguide',
    url:
      'https://cdn-imgix.headout.com/tour/13905/TOUR-IMAGE/b23dc05c-1b19-4eb4-a205-fb9f0f2e29ab-7654-paris-Palace-of-Versailles-All-Access-Passport-Entry-with-Audioguide-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
  },
  {
    id: 7,
    currentPrice: 31,
    lastPrice: 45,
    currency: '€',
    discount: 31,
    stars: 4.6,
    ratings: 474,
    cashback: 10,
    city: 'PARIS',
    description: 'Skip The Line: Eiffel Tower Tickets with Host',
    url:
      'https://cdn-imgix.headout.com/tour/8092/TOUR-IMAGE/d9ee5fc2-5c9e-4981-8f4a-d16dc69769fd-P1.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
  }
];

export default TopPicks;
