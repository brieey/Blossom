import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';



const Settings = () => {
    return (
        <SafeAreaView>
            <View>
                <Text>Welcome to Settings!</Text>
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

export default Settings;