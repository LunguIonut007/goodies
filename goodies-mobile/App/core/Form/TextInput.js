import React from 'react'
import { View } from 'react-native'
import { FormLabel, FormInput } from 'react-native-elements'

export default class MyTextInput extends React.Component {
  render () {
    const { input, label, ...inputProps } = this.props
    return (
      <View style={{paddingVertical: 10}}>
        <FormLabel labelStyle={{color: '#000'}}>{label}</FormLabel>
        <FormInput
          underlineColorAndroid='orange'
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
