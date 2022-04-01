import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';

export const Sets = ({ handlePressBack }) => {
	return (
		<>
			<View style={{ ...styles.container, marginBottom: 20 }}>
				<View>
					<Text
						style={{
							fontSize: 25,
							width: 150,
							textAlign: 'left',
							marginBottom: 5,
							fontWeight: 'bold',
						}}
					>
						Set 1
					</Text>
				</View>
				<Text style={{ fontSize: 18, width: '100%', textAlign: 'left', marginBottom: 5 }}>
					Push ups: 15, Abs: 15, Stretch: 3
				</Text>
			</View>

			<View style={{ ...styles.container, marginBottom: 20 }}>
				<View>
					<Text
						style={{
							fontSize: 25,
							width: 150,
							textAlign: 'left',
							marginBottom: 5,
							fontWeight: 'bold',
						}}
					>
						Set 2
					</Text>
				</View>
				<Text style={{ fontSize: 18, width: '100%', textAlign: 'left', marginBottom: 5 }}>
					Push ups: 25, Abs: 25, Stretch: 5
				</Text>
			</View>

			<View style={{ ...styles.container, marginBottom: 20 }}>
				<View>
					<Text
						style={{
							fontSize: 25,
							width: 150,
							textAlign: 'left',
							marginBottom: 5,
							fontWeight: 'bold',
						}}
					>
						Set 3
					</Text>
				</View>
				<Text style={{ fontSize: 18, width: '100%', textAlign: 'left', marginBottom: 5 }}>
					Push ups: 30, Abs: 30, Stretch: 8
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
