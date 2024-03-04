import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const tags : string[] = ['Other', 'University', 'Shopping Lists', 'Important'];
const todoLists = ["List 1", "List 2", "List 3", "List 4", "List 5"];

const fontFamily = 'Nunito-Regular';
const fontFamilyBold = 'Nunito-Medium';
// const fontFamily = 'Roboto-Regular';

const HomeScreen: React.FC = () => {

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const [activeTags, setActiveTags] = useState<string[]>([]);

  const toggleTag = (tag : string) => {
    if (activeTags.includes(tag)) {
      setActiveTags(activeTags.filter((t) => t !== tag));
    } else {
      setActiveTags([...activeTags, tag]);
    }
  };

  return (
    <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={'#151515'} />
      {/* Top Row */}
      <View style={styles.topRow}>
        {/* Settings Icon */}
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
            <Svg width="35" height="35" fill="none" viewBox="0 0 21 21" transform="translate(0, 1)">
                <Path fill="#7CEFD3" d="M9.5 5.646a3.854 3.854 0 1 0 0 7.708 3.854 3.854 0 0 0 0-7.708ZM6.833 9.5a2.667 2.667 0 1 1 5.334 0 2.667 2.667 0 0 1-5.334 0Z"/>
                <Path fill="#7CEFD3" d="M11.633 1.595c-.627-2.127-3.64-2.127-4.266 0l-.112.378c-.186.634-.91.933-1.49.618l-.346-.189c-1.947-1.06-4.078 1.07-3.017 3.017l.189.346c.315.58.016 1.304-.618 1.49l-.378.112c-2.127.627-2.127 3.64 0 4.266l.378.112c.634.187.933.91.618 1.49l-.189.346c-1.06 1.947 1.07 4.078 3.017 3.017l.346-.189a1.037 1.037 0 0 1 1.49.618l.112.378c.627 2.127 3.64 2.127 4.266 0l.112-.378c.187-.634.91-.934 1.49-.618l.346.189c1.947 1.06 4.078-1.07 3.017-3.017l-.189-.346a1.036 1.036 0 0 1 .618-1.49l.378-.112c2.127-.627 2.127-3.64 0-4.266l-.378-.112a1.037 1.037 0 0 1-.618-1.49l.189-.346c1.06-1.947-1.07-4.078-3.017-3.017l-.346.189a1.036 1.036 0 0 1-1.49-.618l-.112-.378Zm-3.127.336c.292-.991 1.696-.991 1.988 0l.112.378a2.224 2.224 0 0 0 3.197 1.324l.346-.188c.908-.494 1.9.498 1.406 1.406l-.188.346a2.224 2.224 0 0 0 1.324 3.197l.378.112c.991.292.991 1.696 0 1.988l-.378.112a2.224 2.224 0 0 0-1.324 3.197l.188.346c.494.908-.498 1.9-1.406 1.406l-.346-.188a2.224 2.224 0 0 0-3.197 1.324l-.112.378c-.292.991-1.696.991-1.988 0l-.112-.378a2.224 2.224 0 0 0-3.197-1.324l-.346.188c-.908.494-1.9-.498-1.406-1.406l.188-.346a2.224 2.224 0 0 0-1.324-3.197l-.378-.112c-.991-.292-.991-1.696 0-1.988l.378-.112a2.224 2.224 0 0 0 1.324-3.197l-.188-.346c-.494-.908.498-1.9 1.406-1.406l.346.188A2.224 2.224 0 0 0 8.394 2.31l.112-.378Z"/>
            </Svg>
        </TouchableOpacity>
        <Text style={styles.title}>TO DO's</Text>
        <View style={styles.spacer} />
      </View>

      {/* Tags Row */}
      <View style={styles.tagsRow}>
        {tags.map((tag, index) => (
          <TouchableOpacity 
            key={index} 
            style={[
              styles.tag,
              activeTags.includes(tag) && styles.selectedTag,
            ]}
            onPress={() => toggleTag(tag)}
          >
            <Text style={[styles.tagText, activeTags.includes(tag) && styles.selectedTagText]}>{tag}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* TODO Lists */}
      <View style={styles.todoLists}>
        {todoLists.map((list, index) => (
          <TouchableOpacity key={index} style={styles.list}>
            {/* <View style={styles.list}> */}
              <Svg width="25" height="25" fill="none" viewBox="0 0 16 16" transform="translate(0, 1)">
                <Path fill="#ADADAD" fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5Zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5Zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5Zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clip-rule="evenodd"/>
              </Svg>
              <Text style={styles.listText}>{list}</Text>
            {/* </View> */}
          </TouchableOpacity>
        ))}
      </View>

      {/* Add List Button */}
      <View style={styles.bottomRow}>
        <View style={styles.spacerBottomRow} />
        <TouchableOpacity style={styles.addButton} onPress={() => console.log("Add List pressed")}>
          <Svg width="40" height="40" viewBox="0 0 50 40">
          <Path fill="#000" fill-rule="evenodd" d="M10 23a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H11a1 1 0 0 1-1-1Zm0-8a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H11a1 1 0 0 1-1-1Zm0-8a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H11a1 1 0 0 1-1-1ZM4 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" clip-rule="evenodd"/>
            <Svg width="50" height="40" viewBox="0 0 40 40" transform="translate(30, 26)">
              <Path fill="#020202" d="M6.5.214c.434 0 .786.352.786.786v4.714H12a.786.786 0 0 1 0 1.572H7.286V12a.786.786 0 0 1-1.572 0V7.286H1a.786.786 0 1 1 0-1.572h4.714V1c0-.434.352-.786.786-.786Z"/>
            </Svg>
          </Svg>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151515',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 20,
  },
  title: {
    textAlign: 'center',
    flex: 1,
    fontSize: 24,
    // fontWeight: 'bold',
    color: '#7cefd3',
    fontFamily: fontFamily,
  },
  spacer: {
    width: 35,
  },
  tagsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  tag: {
    backgroundColor: undefined,
    borderWidth: 1,
    borderColor: '#ADADAD',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 10,
  },
  selectedTag: {
    backgroundColor: '#7CEFD3',
    borderColor: '#7CEFD3',
  },
  tagText: {
    color: '#ADADAD',
    fontSize: 14,
    fontFamily: fontFamily,
  },
  selectedTagText: {
    color: '#151515',
  },
  todoLists: {
    flex: 1,
    // Add styling for TODO lists container if needed
  },
  list: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  listText: {
    color: '#ADADAD',
    fontSize: 24,
    marginLeft: 20,
    fontFamily: fontFamily,
  },
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  spacerBottomRow: {
    // flex: 1,
    flexGrow: 1,
    // borderColor: 'red',
    // borderWidth: 1,
  },
  addButton: {
    backgroundColor: '#7CEFD3',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 21,
    borderRadius: 100,
    // position: 'absolute',
    bottom: 20,
    // left: 20,
    // right: 20,
  },
});

export default HomeScreen;