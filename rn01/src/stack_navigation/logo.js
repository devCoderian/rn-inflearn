import React from 'react'
import { Image } from 'react-native'

//flatiocon
import Logo from '../assets/pics/home.png'

const logo = () => {
    return(
    <Image
      style = {{width: 40, height: 40}}
      source={Logo}
    />
      )
}

export default logo
