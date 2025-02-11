import {Button, StyleSheet, View} from 'react-native';
import axios from "axios";

export default function App() {

    const handleSendFormData = async (testValue?: string) => {
        const fd = new FormData();
        if (testValue) {
            fd.append("testValue", testValue);
        }
        console.log('here')

        axios.post("https://google.com", fd)
            .then((data) => console.log('.then',data))
            .catch((error) => console.log('error', error));
    }

    return (
        <View style={styles.container}>
            <Button title={'with value'} onPress={() => handleSendFormData("this is a string")} />
            <Button title={'without value'} onPress={() => handleSendFormData()} />
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
