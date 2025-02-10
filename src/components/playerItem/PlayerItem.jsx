// import proptypes from "proptypes";
import "./styles.css"
function PlayerItem({ playerName, playerRate, playerImage }) {

  return (
    <div>
      <div id="playersatem">
        <img src={playerImage} alt="" />
      </div>
      <h1>
        {playerName}-{playerRate}
      </h1>
    </div>
  );
}
// PlayerItem.propTypes = {
//  playerName: proptypes.string,
//  playerImage: proptypes.string,
//   playerRate: proptypes.func,
// };
export default PlayerItem;
