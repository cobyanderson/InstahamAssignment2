import React from 'react';
import { FlatList, TouchableHighlight } from 'react-native';

import Footer from './Footer';
import Item from './Item';
import Fire from '../Fire';

class List extends React.Component {
  constructor(props) {
    super(props);
  }
  // onPress(item) {
  //    // your code on item press
  //    // Fire.shared.changeLiked({
  //    //   id: item.key,
  //    // });
  //    this.props.navigation.navigate('NewComment', { id: item.key });
  //    // Fire.shared.addCommment({
  //    //   id: item.key,
  //    //   comment: "omg"
  //    // });
  // };
  // renderItem = ({ item }) => (
  //   <TouchableHighlight onPress={() => this.onPress(item)}>
  //     <Item {...item} />
  //   </TouchableHighlight>
  // )
  // keyExtractor = item => item.key;
  // render() {
  //   const { onPressFooter, ...props } = this.props;
  //   return (
  //     <FlatList
  //       keyExtractor={this.keyExtractor}
  //       ListFooterComponent={footerProps => (
  //         <Footer {...footerProps} onPress={onPressFooter} />
  //       )}
  //       renderItem={this.renderItem}
  //       {...props}
  //     />
  //   );
  // }
}
export default List;
