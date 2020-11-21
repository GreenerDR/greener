import React, { Component } from 'react';
import { View, Dimensions, Image, StyleSheet } from 'react-native';
import Carousel from 'react-native-looped-carousel';

const { width, height } = Dimensions.get('window');

export default class CarouselMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: { width, height },
    };
  }
  _onLayoutDidChange = (e) => {
    const layout = e.nativeEvent.layout;
    this.setState({ size: { width: layout.width, height: layout.height } });
  };

  render() {
    return (
      <View style={{ flex: 1 }} onLayout={this._onLayoutDidChange}>
        <Carousel
          delay={4500}
          style={this.state.size}
          autoplay
          bullets
          onAnimateNextPage={(p) => console.log(p)}
        >
          <View style={[this.state.size]}>
            <Image
              source={require('../../assets/SembrarC.png')}
              style={styles.image}
            />
          </View>
          <View style={[this.state.size]}>
            <Image
              source={require('../../assets/CompostarC.png')}
              style={styles.image}
            />
          </View>
          <View style={[this.state.size]}>
            <Image
              source={require('../../assets/ReciclarC.png')}
              style={styles.image}
            />
          </View>
          <View style={[this.state.size]}>
            <Image
              source={require('../../assets/ClasificarC.png')}
              style={styles.image}
            />
          </View>
        </Carousel>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: width / 1,
    height: height / 4.9,
  },
});
