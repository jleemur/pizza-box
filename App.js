import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const RULES = [
  'Give a drink',
  'Give 2 drinks',
  'Sociables',
  'Fuzzy duck',
  'Story time',
  'Rule',
  'Question master',
  'Thumb master',
  'Rule',
  'Never have I ever',
  'Waterfall',
  'Girls drink',
  'Guys drink'
];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rule: ""
    };

    this.nextRule = this.nextRule.bind(this);
  }

  nextRule() {
    const num = Math.round(Math.random() * 12); // 0-12
    this.setState({rule: RULES[num]});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.rule}</Text>
        <Button title='Next' onPress={this.nextRule}>Next</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
