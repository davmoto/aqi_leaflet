
import { makeStyles } from '@material-ui/core/styles'
import AqiApi from './AqiApi'
import Link from '@material-ui/core/Link'
import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import Typography from '@material-ui/core/Typography'
import UCLALogo from './UCLA_logo_wht.svg'

const useStyles = makeStyles(() => ({
  container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto 0 auto',
    maxWidth: '1400px',
    paddingBottom: 48,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 48,
    width: '90%'
  },
  copy: {
    color: '#fff',
    textAlign: 'center'
  },
  link: {
    color: '#ffe800',
    fontSize: '.8rem',
    fontWeight: 700,
    textTransform: 'uppercase'
  },
  linksContainer: {
    color: '#ffe800',
    marginBottom: 16,
    zIndex: 4
  },
  logo: {
    display: 'flex',
    height: 32,
    marginBottom: 16
  }
}))

export default function GetAqiDataOpen ({ campusId }) {
  const classes = useStyles()

  useEffect(() => {
    AqiApi.getOpenMapAqiData(campusId)
      .then(data => {
        alert()
        /*
        const aqis = data.map(obj => obj.characteristics.aqi)
        const average = (array) => array.reduce((a, b) => a + b) / array.length
        alert(Math.round(average(aqis)))
        */
      })
      .catch(error => {
        alert(error)
      })
  }, [campusId])

  return (
    <div className={classes.container} >
      <img
        className={classes.logo}
        alt="UCLA"
        src={UCLALogo}
      />
      <div className={classes.linksContainer}>
        <Link
          className={classes.link}
          href="https://ucla.edu"
        >
          UCLA.EDU
        </Link>
        &nbsp;|&nbsp;
        <Link
          className={classes.link}
          href="https://www.ucla.edu/terms-of-use/"
        >
          Terms of Use
        </Link>
      </div>
      <Typography
        classes={{ root: classes.copy }}
        component="p"
        variant="body2"
      >
        &copy;2020 Regents of the University of California • All Rights Reserved
      </Typography>
    </div>
  )
}

GetAqiDataOpen.propTypes = {
  campusId: PropTypes.string
}
