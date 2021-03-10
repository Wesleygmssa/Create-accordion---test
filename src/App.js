import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import {Conatiner} from './styles';
import { AccordionDetails, AccordionSummary, makeStyles, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  teste:{
    color: '#c53030'
  }
}));

function App() {
  const classes = useStyles();
  return (
  <Conatiner>
    <Accordion>
    <AccordionSummary 
          expandIcon={<ExpandMoreIcon className={classes.teste}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
    <Typography className={classes.teste}>Busca Avançada</Typography>

        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            <h3>Registro</h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
    </Accordion>
  </Conatiner>
  );
}

export default App;
