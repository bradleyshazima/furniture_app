import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import * as React from 'react'
import styles from './welcome.style'
import { COLORS, SIZES } from '../../constants'
import { Feather, Ionicons } from '@expo/vector-icons'

const Welcome = () => {
  return (
    <View>
        <View style={styles.container}>
            <Text style={styles.welcomeTxt(COLORS.black, SIZES.xSmall)}>Find the most</Text>
            <Text style={styles.welcomeTxt(COLORS.primary, 0)}>Luxurious furniture</Text>
        </View>

        <View style={styles.searchContainer}>
            <TouchableOpacity style={{alignItems: "center", justifyContent: "center"}}>
                <Feather name='search' size={24} style={styles.searchIcon} />
            </TouchableOpacity>

            <View style={styles.searchWrapper}>
                <TextInput
                 style={styles.searchInput}
                 onPress={() => {}}
                 placeholder="What are you looking for?"
                />
            </View>

            <View>
                <TouchableOpacity style={styles.searchBtn}>
                    <Ionicons name='camera-outline' size={SIZES.xLarge} color={COLORS.offwhite} />
                </TouchableOpacity>
            </View>

        </View>


    </View>
  )
}

export default Welcome