import { ThemeProvider, createTheme } from '@mui/material/styles';
import { theme } from '@golden-gamble/utils';

import Drawer from './components/Drawer';

const muiTheme = createTheme(theme);

const App = () => {
  return (
    <ThemeProvider theme={muiTheme}>
      <Drawer />
    </ThemeProvider>
  )
}

export default App