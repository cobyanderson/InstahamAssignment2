import React from 'react';
import { FlatList, TouchableHighlight } from 'react-native';

import Footer from './Footer';
import Item from './Item';
import Fire from '../Fire';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
  }
  onPress(item) {
     // your code on item press
     Fire.shared.changeLiked({
       id: item.key,
     });
     console.log(item.key);
  };
  renderItem = ({ item }) => (
    <TouchableHighlight onPress={() => this.onPress(item)}>
      <Item {...item} />
    </TouchableHighlight>
  )
  keyExtractor = item => item.key;
  render() {
    const { onPressFooter, ...props } = this.props;
    return (
      <FlatList
        keyExtractor={this.keyExtractor}
        ListFooterComponent={footerProps => (
          <Footer {...footerProps} onPress={onPressFooter} />
        )}
        renderItem={this.renderItem}
        {...props}
      />
    );
  }
}
export default List;
