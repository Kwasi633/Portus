import { View, Text, useWindowDimensions, Image, ActivityIndicator } from 'react-native'
import React from 'react'
import Boxes from '../../../assets/images/welcomeImage.png'
import WelcomeStyles from './welcomeStyles'
import AppButton from '@/components/AppButton/AppButton'
import { Link, useRouter } from 'expo-router'


const Welcome = () => {
  const dimensions = useWindowDimensions();
  const styles = WelcomeStyles(dimensions);
  const router = useRouter();
  
  return (
    <View style={{flex: 1}}>
      <Image source={Boxes} style={styles.logo }/>

      <View style={styles.subContainer}>
      <Text style={styles.title}>Create your Portus account</Text>
      </View>

      <View style={styles.descriptionContainer}>
      <Text style={styles.desc}>
      Effortless international shipping connect with agents, book pickups, get quotes, track shipments, and manage everything in one platform.
      </Text>
      </View>

    <Link href={'/(screens)/login/login'} style={{marginTop: 30}}>
    <AppButton
        backgroundColor={'#00AEEF'}
        color={'#fff'}
        width={dimensions.width * 0.9}
        height={dimensions.height * 0.065}
        alignSelf='center'
        fontSize={14}
        onPress={() => router.push('/(screens)/login/login')}
      >
      Log In
      </AppButton>

    </Link>

      <Link href={'/(screens)/signup/signup'} style={{ marginTop: 20 }}>
      <AppButton
        backgroundColor={'#FFF'}
        color={'#00AEEF'}
        width={dimensions.width * 0.9}
        height={dimensions.height * 0.065}
        alignSelf='center'
        borderColor='#00AEEF'
        borderWidth={1}
        marginTop={30}
        fontSize={14}
        onPress={() => router.push('/(screens)/signup/signup')}
      >
      Sign Up
      </AppButton>
      </Link>
      
      
    </View>
  )
}

export default Welcome