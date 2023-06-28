import { useState } from "react";

//We need a button when the user clicks a button it will update hte name: 'Zac' to name: 'Patrick'

const Exercise1 = () => {
    const [game, setGame] = useState({
        id:1,
        player: {
            name: "Zac",
        },
    });

    const ChangeName = () => {
        // game.player.name = 'Patrick';
        setGame({...game, player:{...game.player, name: 'Patrick'}})
       
    }
  return (
    <div>
      {game.player.name}
      <button onClick={ChangeName}>Change Name</button>
    </div>
  )
}

export default Exercise1
