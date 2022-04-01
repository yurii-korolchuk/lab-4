import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';
import { Main } from './pages/Main';

export default function App() {
	const [isLoggedIn, setIsLoggedIn] = React.useState(false);
	const [isSigningUp, setIsSigningUp] = React.useState(false);

	const handleLogin = () => {
		setIsLoggedIn(true);
		setIsSigningUp(false);
	};

	const handleSignUp = () => setIsSigningUp((state) => !state);
	const handleLogOut = () => setIsLoggedIn(false);

	return (
		<View style={styles.container}>
			{isSigningUp ? (
				<SignUp handleLogin={handleLogin} />
			) : isLoggedIn ? (
				<Main handleLogOut={handleLogOut} />
			) : (
				<Login handleLogin={handleLogin} handleSignUp={handleSignUp} />
			)}
			<StatusBar style='auto' />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
