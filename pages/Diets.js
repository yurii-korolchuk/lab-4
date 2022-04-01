import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';

export const Diets = ({ handlePressBack }) => {
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
						The Mediterranean diet
					</Text>
				</View>
				<Text style={{ fontSize: 18, width: '100%', textAlign: 'left', marginBottom: 5 }}>
					The gold standard for nutrition
				</Text>
				<Text
					style={{ fontSize: 14, width: '100%', color: 'blue', textAlign: 'left', marginBottom: 5 }}
				>
					Click to see more
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
						The DASH diet
					</Text>
				</View>
				<Text style={{ fontSize: 18, width: '100%', textAlign: 'left', marginBottom: 5 }}>
					Prevent high blood pressure
				</Text>
				<Text
					style={{ fontSize: 14, width: '100%', color: 'blue', textAlign: 'left', marginBottom: 5 }}
				>
					Click to see more
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
						Plant-based diet
					</Text>
				</View>
				<Text style={{ fontSize: 18, width: '100%', textAlign: 'left', marginBottom: 5 }}>
					Restrict animal products for health
				</Text>
				<Text
					style={{ fontSize: 14, width: '100%', color: 'blue', textAlign: 'left', marginBottom: 5 }}
				>
					Click to see more
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
						The MIND diet
					</Text>
				</View>
				<Text style={{ fontSize: 18, width: '100%', textAlign: 'left', marginBottom: 5 }}>
					Focuses on brain health
				</Text>
				<Text
					style={{ fontSize: 14, width: '100%', color: 'blue', textAlign: 'left', marginBottom: 5 }}
				>
					Click to see more
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
						Weight Watchers
					</Text>
				</View>
				<Text style={{ fontSize: 18, width: '100%', textAlign: 'left', marginBottom: 5 }}>
					A points-based system
				</Text>
				<Text
					style={{ fontSize: 14, width: '100%', color: 'blue', textAlign: 'left', marginBottom: 5 }}
				>
					Click to see more
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
