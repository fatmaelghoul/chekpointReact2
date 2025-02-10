

import { players } from "../playerItem/Players";
import PlayerItem from "../playerItem/PlayerItem";
import "./players.css"
function Players() {
  return (
    <div id="players">
      {players.map((elt, i) => (
        <PlayerItem key={i} {...elt} />
      ))}
    </div>
  );
}

export default Players;