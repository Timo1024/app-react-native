import React, {useState, useEffect} from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Switch, Modal, ActivityIndicator } from 'react-native';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Svg, { Path, Circle } from 'react-native-svg';
import { ColorPicker, toHsv } from 'react-native-color-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const fontFamily = 'Nunito-Regular';
const fontFamilyBold = 'Nunito-Medium';

const Settings: React.FC = () => {

  const [loading, setLoading] = useState<boolean>(true); // State for loading status

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  // State to track user authentication status
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  // State for settings
  const [accentColor, setAccentColor] = useState<string>('#7CEFD3');
  const [newDesign, setNewDesign] = useState<boolean>(false);
  const [developerOptions, setDeveloperOptions] = useState<boolean>(false);

  // State to manage color picker modal visibility
  const [colorPickerVisible, setColorPickerVisible] = useState<boolean>(false);

  const saveSetting = async (settingName: string, settingValue: boolean) => {
    try {
      await AsyncStorage.setItem(settingName, settingValue.toString());
    } catch (error) {
      console.error('Error saving setting:', error);
    }
  };

  const loadSettings = async () => {
    try {
      const developerOptionsValue = await AsyncStorage.getItem('developerOptions');
      if (developerOptionsValue !== null) {
        setDeveloperOptions(developerOptionsValue === 'true');
      }
      const newDesignValue = await AsyncStorage.getItem('newDesign');
      if (newDesignValue !== null) {
        setNewDesign(newDesignValue === 'true');
      }
      // Load other settings similarly
    } catch (error) {
      console.error('Error loading settings:', error);
    }
  };

  useEffect(() => {
    loadSettings();
  }, []);

  const handleNewDesignChange = async (value: boolean) => {
    setNewDesign(value);
    await saveSetting('newDesign', value);
    // Add similar functions for other settings
  };
  const handleDeveloperChange = async (value: boolean) => {
    setDeveloperOptions(value);
    await saveSetting('developerOptions', value);
    // Add similar functions for other settings
  };
  
  // Mock user data (replace with actual user data if available)
  const userData = {
    name: 'John Doe',
    profilePic: require('../assets/images/link_05.png') // Replace with actual profile picture
  };

  // Function to handle sign in with Google
  const handleSignInWithGoogle = () => {
    // Logic for signing in with Google
    // After successful authentication, setLoggedIn(true);
  };

  // Function to handle logout
  const handleLogout = () => {
    // Logic for logging out
    // After logout, setLoggedIn(false);
  };

  // useEffect(() => {
  //   // Simulate loading delay (replace with actual loading logic)
  //   const timer = setTimeout(() => {
  //     setLoading(false); // Set loading to false after a delay
  //   }, 100); // Adjust the delay as needed

  //   return () => clearTimeout(timer); // Clear timeout on component unmount
  // }, []);

  // if (loading) {
  //   // Render loading screen while content is being loaded
  //   return (
  //     <View style={styles.container}>
  //     {/* Top Row: Back Button and Settings Title */}
  //     <View style={styles.topRow}>
  //       <TouchableOpacity onPress={() => navigation.goBack()}>
  //         <Svg width="35" height="35" fill="none" viewBox="0 0 21 21">
  //           <Path fill="#7CEFD3" fill-rule="evenodd" d="M19.688 10.5a.656.656 0 0 0-.657-.656H3.553l4.13-4.13a.656.656 0 0 0-.928-.928l-5.25 5.25a.656.656 0 0 0 0 .928l5.25 5.25a.656.656 0 1 0 .928-.928l-4.13-4.13h15.478a.656.656 0 0 0 .657-.656Z" clip-rule="evenodd"/>
  //         </Svg>
  //       </TouchableOpacity>
  //       <Text style={styles.title}>Settings</Text>
  //       <View style={styles.spacer} />
  //     </View>
  //   </View>
  //   );
  // }

  return (
    <View style={styles.container}>
      {/* Top Row: Back Button and Settings Title */}
      <View style={styles.topRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Svg width="35" height="35" fill="none" viewBox="0 0 21 21">
            <Path fill="#7CEFD3" fill-rule="evenodd" d="M19.688 10.5a.656.656 0 0 0-.657-.656H3.553l4.13-4.13a.656.656 0 0 0-.928-.928l-5.25 5.25a.656.656 0 0 0 0 .928l5.25 5.25a.656.656 0 1 0 .928-.928l-4.13-4.13h15.478a.656.656 0 0 0 .657-.656Z" clip-rule="evenodd"/>
          </Svg>
        </TouchableOpacity>
        <Text style={styles.title}>Settings</Text>
        <View style={styles.spacer} />
      </View>

      {/* Second Row: Sign In with Google or User Profile */}
      <View style={styles.secondRow}>
        {loggedIn ? (
          <View style={styles.userInfoContainer}>
            <Image source={userData.profilePic} style={styles.profilePic} />
            <Text>{userData.name}</Text>
            <TouchableOpacity onPress={handleLogout}>
              <Text>Logout</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity style={styles.signInButton} onPress={handleSignInWithGoogle}>
            <Text style={styles.signInText}>Sign In with Google</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Accent Color Setting */}
      <View style={styles.settingRow}>
        <Text>Accent Color:</Text>
        <TouchableOpacity onPress={() => setAccentColor('#FF6347')}>
          <View style={[styles.colorPreview, { backgroundColor: '#FF6347' }]} />
        </TouchableOpacity>
        {/* You can add more color options */}
      </View>

      {/* New Design Toggle */}
      <View style={styles.settingRow}>
        <Text>New Design:</Text>
        <Switch value={newDesign} onValueChange={handleNewDesignChange} />
      </View>

      {/* Developer Options Toggle */}
      <View style={styles.settingRow}>
        <Text>Developer Options:</Text>
        <Switch 
          value={developerOptions} 
          onValueChange={handleDeveloperChange}
        />
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
    marginBottom: 16,
  },
  title: {
    textAlign: 'center',
    flex: 1,
    fontSize: 24,
    color: '#7cefd3',
    fontFamily: fontFamily,
  },
  spacer: {
    width: 35,
  },
  secondRow: {
    marginBottom: 16,
  },
  userInfoContainer: {
    alignItems: 'center',
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 8,
  },
  signInButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 100,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 8,
  },
  signInText: {
    fontFamily: fontFamily,
    fontSize: 22,
    color: '#ADADAD'
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  colorPreview: {
    width: 30,
    height: 30,
    borderRadius: 5,
  },
  loadingContainer: {

  }
});

export default Settings;