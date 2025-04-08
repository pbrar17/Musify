import {defaultStyles} from '@/styles';
import { View, Text, ScrollView } from 'react-native';
import {TracksList} from '@/components/TracksList';
import { screenPadding } from '@/constants/tokens';

//props for trackslist

const SongScreen = () => {
    return <View style= {defaultStyles.container}>
        {/* <Text style = {defaultStyles.text}> Songs screen</Text> */}

        <ScrollView 
            contentInsetAdjustmentBehavior='automatic'
            style={{paddingHorizontal: screenPadding.horizontal}}
        >
            <TracksList scrollEnabled={false} 
            />
        </ScrollView>
    </View>
}

export default SongScreen