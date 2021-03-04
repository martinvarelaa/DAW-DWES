import {makeStyles} from '@material-ui/core';
import { Widgets } from '@material-ui/icons';

export default makeStyles( (theme) =>({

    toolbar : theme.mixins.toolbar,
    content : {
        
        padding : theme.spacing(2)
        
    }
    

}));