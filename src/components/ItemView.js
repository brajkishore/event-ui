import React, { Component } from 'react'
import { Card, CardContent, Typography, CardMedia } from '@material-ui/core'
import {createMuiTheme, MuiThemeProvider, withTheme } from '@material-ui/core/styles'
class ItemView extends Component {
    render() {
        console.log('data::' + this.props.datum);
        return (
            <MuiThemeProvider theme={theme}>
            <Card className={'card'}>
                <CardContent>
                    <CardMedia className={'cardMedia'}
                        title="Contemplative Reptile">
                        <img
                            src="http://www.portoalegre.travel/upload/b/23/239495_best-high-quality-wallpapers.jpg"                             
                            />
                    </CardMedia>                    
                    <Typography gutterBottom variant="headline" component="h2">
                        {this.props.datum.eventName}
                    </Typography>
                    <Typography component="p">
                        {this.props.datum.eventSD}
                    </Typography>
                </CardContent>
            </Card>
            </MuiThemeProvider>
        )
    }
}

const theme = createMuiTheme({
    overrides: {   
      MuiCardContent: {        
        root: {
          // Some CSS
          paddingLeft:0,
          paddingRight:0,
          paddingTop:0,
          ['@media (min-width: 600px)']: {
            paddingLeft:0,
            paddingRight:0,
          }
        },
      },
    },
  });

export default withTheme() (ItemView);