import * as Font from "expo-font";

let useFonts;

export default useFonts = async () =>
    await Font.loadAsync({
        'SplineSans-Regular': require('../assets/fonts/SplineSans-Regular.ttf'),
        'SplineSans-Bold': require('../assets/fonts/SplineSans-Bold.ttf')
    });