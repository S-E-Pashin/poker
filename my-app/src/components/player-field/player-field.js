import {Component} from "react";
import './player-field.css'
import Card from "../card/card";

//*у каждой карты слушатель
// нет, нужно при генерации карт сразу 1м
// делом из колоды вытаскивать карты на игроков
// и открывать карты только при нажатии
// на них меняя видимость карты на открыто
// а по умолчанию она должна быть скрыта
//
// */

class PlayerField extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="player-field">
        {/*<Card {Deck.giveCP.{...giveCP[0]}}/>*/}
        {/*<Card {...cardsPlayer[1]}/>*/}
        <Card/>
        <Card/>
      </div>
    )
  }

}

export default PlayerField;
