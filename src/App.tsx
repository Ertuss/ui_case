import './App.css'
import { CssVarsProvider } from '@mui/joy'
import CustomAutocomplete from './CustomAutocomplete';
import theme from './theme';

function App() {

  return (
    <CssVarsProvider theme={theme}>
      <CustomAutocomplete />
    </CssVarsProvider>
  )
}

export default App;