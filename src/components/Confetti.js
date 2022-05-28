import {View} from 'react-native';
import React from 'react';
import ConfettiCannon from 'react-native-confetti-cannon';

class Confetti extends React.PureComponent {
  explosion;

  handleSomeKindOfEvent = () => {
    this.explosion && this.explosion.start();
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <ConfettiCannon
          count={300}
          origin={{x: 10, y: 0}}
          autoStart={true}
          ref={ref => (this.explosion = ref)}
        />
      </View>
    );
  }
}
export default Confetti;
