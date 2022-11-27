import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignContent: 'center',
        marginBottom: 8,
        
    },
    containerName: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#4d4d4d',
        borderRadius: 5,
        padding: 10,
    },
    participantText: {
        color: '#FFF',
        fontSize: 16,
    },
    buttonRemove: {
        width: 56,
        height: 56,
        borderRadius: 5,
        marginLeft: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ff3d3d',
    },
    buttonText: {
        fontSize: 26,
        color: '#FFF',
    },
});