import { TextInput, Text, Pressable, StyleSheet } from 'react-native';

export const SignUp = ({ handleLogin }) => {
	return (
		<>
			<TextInput placeholder='Login' style={styles.container} onPressIn={handleLogin} />
			<TextInput
				secureTextEntry={true}
				placeholder='Password'
				style={{ ...styles.container, ...styles.bottom }}
			/>
			<TextInput placeholder='Weight (in kg)' style={{ ...styles.container, ...styles.bottom }} />
			<TextInput placeholder='Height (in cm)' style={{ ...styles.container, ...styles.bottom }} />

			<Pressable
				style={{ ...styles.container, ...styles.bottom, ...styles.google }}
				onPressIn={handleLogin}
			>
				<Text style={{ color: '#fff', fontSize: 30 }}>Sign up with Google</Text>
			</Pressable>
			<Pressable
				style={{ ...styles.container, ...styles.bottom, ...styles.facebook }}
				onPressIn={handleLogin}
			>
				<Text style={{ color: '#fff', fontSize: 27 }}>Sign up with Facebook</Text>
			</Pressable>

			<Pressable
				style={{
					...styles.container,
					...styles.bottom,
					...styles.button,
					...{ backgroundColor: 'grey', borderRadius: 20 },
				}}
				onPressIn={handleLogin}
			>
				<Text style={{ color: '#fff', fontSize: 30 }}>Sign Up</Text>
			</Pressable>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		borderColor: 'grey',
		borderWidth: 1,
		borderStyle: 'solid',
		textAlign: 'left',
		fontSize: 30,
		paddingHorizontal: 20,
		paddingVertical: 10,
		minWidth: 310,
		borderRadius: 20,
	},
	bottom: {
		marginTop: 20,
	},
	google: {
		backgroundColor: '#C32F26',
		borderColor: '#C32F26',
		color: '#ffffff',
	},
	facebook: {
		backgroundColor: '#3147A0',
		borderColor: '#3147A0',
		color: '#ffffff',
	},
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 12,
		paddingHorizontal: 32,
		borderRadius: 4,
		elevation: 3,
		backgroundColor: 'black',
	},
});
