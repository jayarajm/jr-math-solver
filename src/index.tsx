import React from 'react';
import { View, Text } from 'react-native';
import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-jr-math-solver' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const JrMathSolver = NativeModules.JrMathSolver
  ? NativeModules.JrMathSolver
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function multiply(a: number, b: number): Promise<number> {
  return JrMathSolver.multiply(a, b);
}

const SolverWebView = (
  
) => {
  return <View>
      <Text>Hello workd wer</Text>
  </View>
}

export default SolverWebView;
