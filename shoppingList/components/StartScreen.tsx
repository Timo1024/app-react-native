import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={'#151515'} />
      {/* Top Row */}
      <View style={styles.topRow}>
        {/* Settings Icon */}
        <TouchableOpacity onPress={() => console.log("Settings pressed")}>
            <Svg width="20" height="20" fill="none" viewBox="0 0 19 19">
                <Path fill="#7CEFD3" d="M9.5 5.646a3.854 3.854 0 1 0 0 7.708 3.854 3.854 0 0 0 0-7.708ZM6.833 9.5a2.667 2.667 0 1 1 5.334 0 2.667 2.667 0 0 1-5.334 0Z"/>
                <Path fill="#7CEFD3" d="M11.633 1.595c-.627-2.127-3.64-2.127-4.266 0l-.112.378c-.186.634-.91.933-1.49.618l-.346-.189c-1.947-1.06-4.078 1.07-3.017 3.017l.189.346c.315.58.016 1.304-.618 1.49l-.378.112c-2.127.627-2.127 3.64 0 4.266l.378.112c.634.187.933.91.618 1.49l-.189.346c-1.06 1.947 1.07 4.078 3.017 3.017l.346-.189a1.037 1.037 0 0 1 1.49.618l.112.378c.627 2.127 3.64 2.127 4.266 0l.112-.378c.187-.634.91-.934 1.49-.618l.346.189c1.947 1.06 4.078-1.07 3.017-3.017l-.189-.346a1.036 1.036 0 0 1 .618-1.49l.378-.112c2.127-.627 2.127-3.64 0-4.266l-.378-.112a1.037 1.037 0 0 1-.618-1.49l.189-.346c1.06-1.947-1.07-4.078-3.017-3.017l-.346.189a1.036 1.036 0 0 1-1.49-.618l-.112-.378Zm-3.127.336c.292-.991 1.696-.991 1.988 0l.112.378a2.224 2.224 0 0 0 3.197 1.324l.346-.188c.908-.494 1.9.498 1.406 1.406l-.188.346a2.224 2.224 0 0 0 1.324 3.197l.378.112c.991.292.991 1.696 0 1.988l-.378.112a2.224 2.224 0 0 0-1.324 3.197l.188.346c.494.908-.498 1.9-1.406 1.406l-.346-.188a2.224 2.224 0 0 0-3.197 1.324l-.112.378c-.292.991-1.696.991-1.988 0l-.112-.378a2.224 2.224 0 0 0-3.197-1.324l-.346.188c-.908.494-1.9-.498-1.406-1.406l.188-.346a2.224 2.224 0 0 0-1.324-3.197l-.378-.112c-.991-.292-.991-1.696 0-1.988l.378-.112a2.224 2.224 0 0 0 1.324-3.197l-.188-.346c-.494-.908.498-1.9 1.406-1.406l.346.188A2.224 2.224 0 0 0 8.394 2.31l.112-.378Z"/>
            </Svg>
        </TouchableOpacity>
        {/* Title */}
        <Text style={styles.title}>TO DO's</Text>
        <View style={styles.spacer} />
      </View>

      {/* Tags Row */}
      <View style={styles.tagsRow}>
        <TouchableOpacity style={styles.tag}>
          <Text>Other</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tag}>
          <Text>University</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tag}>
          <Text>Shopping Lists</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tag}>
          <Text>Important</Text>
        </TouchableOpacity>
      </View>

      {/* TODO Lists */}
      <View style={styles.todoLists}>
        {/* TODO List items will be rendered here */}
      </View>

      {/* Add List Button */}
      <TouchableOpacity style={styles.addButton} onPress={() => console.log("Add List pressed")}>
        <Text style={styles.addButtonText}>Add List</Text>
      </TouchableOpacity>
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
  settingsIcon: {
    fontSize: 24,
  },
  title: {
    textAlign: 'center',
    flex: 1,
    fontSize: 24,
    // fontWeight: 'bold',
    color: '#7cefd3',
    fontFamily: 'Nunito-Regular',
    // fontFamily: 'Roboto-Regular',
  },
  spacer: {
    width: 24,
  },
  tagsRow: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  tag: {
    backgroundColor: '#eaeaea',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
  },
  todoLists: {
    flex: 1,
    // Add styling for TODO lists container if needed
  },
  addButton: {
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 10,
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;