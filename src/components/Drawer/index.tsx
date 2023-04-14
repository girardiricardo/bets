import { useEffect, useState } from 'react';

import { MY_BETS_DRAWER, ADD_BET, REMOVE_BET, subscribeEvent } from '@golden-gamble/utils';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';

import Bet, { Odd } from '../Bet';

const BetsDrawer = () => {
  const [open, setOpen] = useState(false);
  const [bets, setBets] = useState<Odd[]>([]);

  useEffect(() => {
    subscribeEvent(MY_BETS_DRAWER, () => setOpen(!open));
    subscribeEvent(ADD_BET, (e: CustomEvent) => setBets((previousBets) => ([...previousBets, e.detail])));
    subscribeEvent(REMOVE_BET, (e: CustomEvent) => setBets((previousBets) => previousBets.filter((b) => b.winner.name !== e.detail.name)));
  }, []);

  return (
    <>
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
      >
        <Box sx={{ width: 300, height: '100%', backgroundColor: '#1A212A', display: 'flex', flexDirection: 'column', padding: 2, alignItems: 'center' }}>
          <Typography variant="h6" color="primary" sx={{ width: '100%' }}>My bets</Typography>
          <span style={{ width: 300, height: 1, backgroundColor: 'rgb(16, 20, 25)', marginTop: 12, marginBottom: 14 }} />
          <ul style={{ width: '100%', overflow: 'auto', display: 'flex', flexDirection: 'column', margin: 0, padding: 0, listStyle: 'none' }}>
            {bets.map((b, k) => <Bet key={k} bet={b} />)}
          </ul>
        </Box>
      </Drawer>
    </>
  );
}

export default BetsDrawer;