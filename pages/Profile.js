import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';

export const Profile = ({ handlePressBack }) => {
	return (
		<>
			<View style={{ marginBottom: 20 }}>
				<Text
					style={{ fontSize: 15, width: 300, textAlign: 'left', marginBottom: 5, paddingLeft: 15 }}
				>
					First Name
				</Text>
				<TextInput placeholder='Yurii' placeholderTextColor='black' style={styles.container} />
			</View>

			<View style={{ marginBottom: 20 }}>
				<Text
					style={{ fontSize: 15, width: 300, textAlign: 'left', marginBottom: 5, paddingLeft: 15 }}
				>
					Last Name
				</Text>
				<TextInput placeholder='Korolchuk' placeholderTextColor='black' style={styles.container} />
			</View>

			<View style={{ marginBottom: 20 }}>
				<Text
					style={{ fontSize: 15, width: 300, textAlign: 'left', marginBottom: 5, paddingLeft: 15 }}
				>
					Weight (in kg)
				</Text>
				<TextInput placeholder='70' placeholderTextColor='black' style={styles.container} />
			</View>

			<View style={{ marginBottom: 20 }}>
				<Text
					style={{ fontSize: 15, width: 300, textAlign: 'left', marginBottom: 5, paddingLeft: 15 }}
				>
					Height (in cm)
				</Text>
				<TextInput placeholder='175' placeholderTextColor='black' style={styles.container} />
			</View>

			<Pressable
				style={{ ...styles.container, ...styles.bottom, ...styles.google }}
				onPressIn={handlePressBack}
			>
				<Text style={{ color: '#fff', fontSize: 30, textAlign: 'center' }}>Go Back</Text>
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
		fontSize: 15,
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
});
