import React from 'react'
import { View } from 'react-native'
import { FormLabel, FormInput } from 'react-native-elements'

export default class MyTextInput extends React.Component {
  render () {
    const { input, label, ...inputProps } = this.props
    return (
      <View>
        <FormLabel>{label}</FormLabel>
        <FormInput
          {...inputProps}
          onChangeText={value => input.onChange(value)}
          onBlur={input.onBlur}
          onFocus={input.onFocus}
          value={input.value}
        />
      </View>
    )
  }
}
