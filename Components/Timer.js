import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
const Timer = () => {
    return (
        <View>
            <CountdownCircleTimer
            size={250}
            isPlaying={isPlaying}
            initialRemainingTime={40}
            duration={40}
            isLinearGradient={true}
            colors={[
              ["#004777", 0.4],
              ["#F7B801", 0.6],
            ]}
            onComplete={() => [true]}
          >
            {({ remainingTime, animatedColor }) => (
              <Animated.Text style={{ color: animatedColor, fontSize: 40 }}>
                {remainingTime}
              </Animated.Text>
            )}
          </CountdownCircleTimer>
        </View>
    )
}

export default Timer

const styles = StyleSheet.create({})
