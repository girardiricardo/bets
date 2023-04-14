import { publishEvent, REMOVE_BET } from '@golden-gamble/utils';

import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import DeleteIcon from '@mui/icons-material/Delete';

export type Team = {
  name: string
  logo: string
  odd: string
}

export type Odd = {
  winner: Team
  teamA: Team
  teamB: Team
}

type Props = {
  bet: Odd
}

const Bet = ({ bet }: Props) => {
  const handleRemoveBet = () => {
    publishEvent(REMOVE_BET, bet.winner);
  }

  return (
    <>
      <li style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <img src={bet.winner.logo} style={{ width: 40, height: 40 }}/>
        <div style={{ display: 'flex', flexDirection: 'column', width: '65%' }}>
          <Typography variant="caption" color="white">{bet.teamA.name} x {bet.teamB.name}</Typography>
          <Typography variant="body2" color="primary"><b>{bet.winner.name} - x{bet.winner.odd}</b></Typography>
        </div>
        <IconButton>
          <DeleteIcon onClick={handleRemoveBet} />
        </IconButton>
      </li>
      <Divider sx={{ marginBottom: 2, marginTop: 2 }} />
    </>
  )
}

export default Bet;