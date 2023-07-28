import { useContext, useEffect } from "react";
import _ from "lodash";
import { themeContext } from "../../App";
import { Wrapper } from "../styles/Output.styled";
import { checkThemeSwitch, getCurrentCmdArry, isArgInvalid } from "../../utils/funcs";
import { termContext } from "../Terminal";
import theme from "../styles/themes";
import Usage from "../Usage";
