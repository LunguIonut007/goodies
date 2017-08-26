import React from 'react'
import { TextInput, View } from 'react-native'

export default class MyTextInput extends React.Component {
  render () {
    const { input, ...inputProps } = this.props
    console.log(input)
    return (
      <View>
        <TextInput
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
