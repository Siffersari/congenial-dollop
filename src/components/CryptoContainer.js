import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";
import FetchCoinData from "./../Actions/FetchCoinData";

export class CryptoContainer extends Component {
  componentDidMount() {
    this.props.FetchCoinData();
  }

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

const mapDispatchToProps = { FetchCoinData };

export default connect(mapStateToProps, mapDispatchToProps)(CryptoContainer);
