// Import a library to help  create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// Create a componet
const App = () => {
	return (
		<View style={{ flex: 1 }}>
			<Header headerText={'Albums!!'}></Header>
			<AlbumList></AlbumList>
		</View>
	);
};

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
