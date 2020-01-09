import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";

export class CryptoContainer extends Component {
  render() {
    return (
      <View>
        <Text>Container</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  crypto: state.crypto
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CryptoContainer);
