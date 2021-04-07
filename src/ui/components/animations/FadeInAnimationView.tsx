import React, { useRef, useEffect } from "react";
import Animated, { Easing } from "react-native-reanimated";

interface FadeInAnimationViewProps {
  duration?: number;
  style?: {
    [x: string]: any;
  };
  children: React.ReactNode;
}

const FadeInAnimationView = ({
  duration = 1000,
  ...props
}: FadeInAnimationViewProps): JSX.Element => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration,
      easing: Easing.in(Easing.ease),
    }).start();
  }, [fadeAnim, duration]);

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim, // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
};

export default FadeInAnimationView;
