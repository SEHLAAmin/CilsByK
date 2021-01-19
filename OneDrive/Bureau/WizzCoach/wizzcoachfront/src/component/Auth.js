import React from 'react'
import MenuAppBarr from './MenuAppBar'
import Grid from '@material-ui/core/Grid'
import { TextField } from '@material-ui/core'

export default function Auth() {
    return (
        <div>
        <Grid container  styles= {{minHeight : '100vh' }} >
        <Grid item xs={12} sm={6} alignItems="center" direction="column">
            <img src="https://wallpapercart.com/wp-content/uploads/2019/09/fitness-quote-wallpaper-scaled.jpg" alt="" style=
            {{ width: '150%' , height:'150%' , objectFit:'cover'  }} alt="brand"/>
        </Grid>
        <Grid  container item xs={12} sm={6}  style={{ padding: 10}} alignItems="center" direction="column" >
          <div />
          <div>

              <Grid container justify="center" >
              
              <img src="https://logo-marque.com/wp-content/uploads/2020/04/Puma-Logo.png" width="170" alt="logo"/>
              </Grid>
               <TextField label="UserName" margin="normal" />
               <TextField label="Password" margin="normal" />

          </div>

        </Grid>
        </Grid>
        </div>
    )
}
