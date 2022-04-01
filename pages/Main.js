import { Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import { Profile } from './Profile';
import { Sets } from './Sets';
import { Diets } from './Diets';
import { GPS } from './GPS';

export const Main = ({ handleLogOut }) => {
	const [isProfileActive, setIsProfileActive] = React.useState(false);
	const [isSetsActive, setIsSetsActive] = React.useState(false);
	const [isDietsActive, setIsDietsActive] = React.useState(false);
	const [isGpsActive, setIsGpsActive] = React.useState(false);

	const handlePressBack = () => {
		setIsProfileActive(false);
		setIsSetsActive(false);
		setIsDietsActive(false);
		setIsGpsActive(false);
	};

	return (
		<>
			{isProfileActive ? (
				<Profile handlePressBack={handlePressBack} />
			) : isSetsActive ? (
				<Sets handlePressBack={handlePressBack} />
			) : isDietsActive ? (
				<Diets handlePressBack={handlePressBack} />
			) : isGpsActive ? (
				<GPS handlePressBack={handlePressBack} />
			) : (
				<>
					<Pressable
						style={{ ...styles.container, ...styles.bottom, backgroundColor: 'grey' }}
						onPressIn={() => {
							setIsProfileActive(true);
						}}
					>
						<Text style={{ color: '#fff', fontSize: 30, textAlign: 'center' }}>Profile</Text>
					</Pressable>
					<Pressable
						style={{ ...styles.container, ...styles.bottom, backgroundColor: 'grey' }}
						onPressIn={() => {
							setIsSetsActive(true);
						}}
					>
						<Text style={{ color: '#fff', fontSize: 30, textAlign: 'center' }}>Sets</Text>
					</Pressable>
					<Pressable
						style={{ ...styles.container, ...styles.bottom, backgroundColor: 'grey' }}
						onPressIn={() => {
							setIsDietsActive(true);
						}}
					>
						<Text style={{ color: '#fff', fontSize: 30, textAlign: 'center' }}>Diets</Text>
					</Pressable>
					<Pressable
						style={{ ...styles.container, ...styles.bottom, backgroundColor: 'grey' }}
						onPressIn={() => {
							setIsGpsActive(true);
						}}
					>
						<Text style={{ color: '#fff', fontSize: 30, textAlign: 'center' }}>GPS Tracker</Text>
					</Pressable>

					<Pressable
						style={{ ...styles.container, ...styles.bottom, ...styles.google }}
						onPressIn={handleLogOut}
					>
						<Text style={{ color: '#fff', fontSize: 30, textAlign: 'center' }}>Log Out</Text>
					</Pressable>
				</>
			)}
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
