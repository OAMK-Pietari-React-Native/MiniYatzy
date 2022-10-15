/*   Author: Pietari Tanner 2022     */

import React from "react"
import { Text, View, ImageBackground } from 'react-native'
import styles from '../style/style';
import Rules from "./Rules";

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>
                MINI YATZY
            </Text>
            <Rules />
        </View>
    )
}