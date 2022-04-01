import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';

export const GPS = ({ handlePressBack }) => {
	return (
		<>
			<View style={{ ...styles.container, marginBottom: 20, width: 375 }}>
				<View>
					<Text
						style={{
							fontSize: 20,
							width: '100%',
							textAlign: 'left',
							marginBottom: 5,
							fontWeight: 'bold',
						}}
					>
						Steps Today
					</Text>
				</View>
				<Text style={{ fontSize: 18, width: '100%', textAlign: 'left', marginBottom: 5 }}>
					6213 steps today. Keep on going !
				</Text>
			</View>

			<View style={{ ...styles.container, marginBottom: 20, width: 375 }}>
				<View>
					<Text
						style={{
							fontSize: 20,
							width: '100%',
							textAlign: 'left',
							marginBottom: 5,
							fontWeight: 'bold',
						}}
					>
						Distance Today
					</Text>
				</View>
				<Text style={{ fontSize: 18, width: '100%', textAlign: 'left', marginBottom: 5 }}>
					3.12 miles walked today. Keep on going !
				</Text>
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
});
