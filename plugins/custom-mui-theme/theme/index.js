import { createMuiTheme } from '@material-ui/core/styles';
import themeData from "./theme.json";

const themeName = 'My custom theme name';
export default createMuiTheme({ ...themeData, themeName });