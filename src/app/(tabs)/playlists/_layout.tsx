import { Stack } from "expo-router";
import { View } from "react-native";
import { defaultStyles } from "@/styles";
import { StackScreenWithSearchBar } from "@/constants/layout";
const PlaylistsScreenLayout = () => {
    return <View style={defaultStyles.container}>
        <Stack>
            <Stack.Screen name = "index" options={{ 
                ...StackScreenWithSearchBar,
                headerTitle: "Songs",
            }} />
        </Stack>
        </View>
}

export default PlaylistsScreenLayout