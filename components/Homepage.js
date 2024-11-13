import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import Header from './Header';
import { getFlowers } from '../api';

//Make the background that blue color
//This is the pink for the cards #d06996

const HomePage = () => {
    const [flowers, setFlowers] = useState([]); // Initialize the state with an empty array

    useEffect(() => {
        const fetchFlowers = async() => {
            try {
                const data = await getFlowers();
                setFlowers(data);
            }catch (error){
                console.error('Error fetching flowers:', error);
            }
        };

        fetchFlowers();


    }, []);





    return (
        <SafeAreaView>
            <Header />
            <View>
                <Text>Welcome to the Home Page!</Text>
                {flowers.map((flower) => (
                    <View key={flower.id}>
                        <Text>{flower.name}</Text>
                    </View>))}
            </View>
        </SafeAreaView>
        
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default HomePage;