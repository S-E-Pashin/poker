import './card.css';
// import suit from "../playing-cards/playing-cards";
import {Component} from "react";
import shuffle from "../../support/arr-random";
import arrDeck from "../../support/deck";

let deck = arrDeck;

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
    //масть
      suit: '',
    //номинал
      nominal: '',
    //обложка
      cover: '',
    //открыта или скрыта
      open: false
    }
  }

  // giveNewCard = (deck) => {
  //
  // }

  givePlayerCard = (arr) => {
    let playerCard = [];
    // let playerCard;
    shuffle(arr);
    playerCard.push(arr.pop());
    console.log(playerCard);
    return playerCard;
  }

  openCard = () => {
    let cardArr = this.givePlayerCard(deck);
    let card = cardArr[0];
    console.log(deck);
    console.log(card.nominal);
    console.log(card.suit);
    // console.log(card.);

    this.setState((state) => ({
      open: true,
      //масть
      suit: card.suit,
      //номинал
      nominal: card.nominal,
        // {nominal, suit}: {...card} ,
      })
    )
  }


  render() {
    const {open} = this.state;
    if (open) {
      const {nominal, suit} = this.state;
      const classForNominal = `${nominal } ${suit} `;


      return (
        <div className="card">
          <div className="nominal nominal-top">
            <div className={classForNominal}>
              {nominal}
            </div>

          </div>
          <div className="suit-image">
            <div className={suit}>
              {/*{suit}*/}
            </div>
          </div>
          <div className="nominal nominal-bottom">
            <div className={classForNominal}>
              {nominal}
            </div>

          </div>
        </div>

      )
    } else {

      return (
        <div className="card" onClick={this.openCard}>

        </div>

      )
    }





  }

}


export default Card;
