import {defaultStyles} from '@/styles';
import { View, Text, ScrollView } from 'react-native';
import {TracksList} from '@/components/TracksList';
import { screenPadding } from '@/constants/tokens';
import { useNavigation } from 'expo-router';
import { useNavigationSearch } from '@/hooks/useNavigationSearch';
import  library from "@/assets/data/library.json";
import { trackTitleFilter } from '@/helpers/filter';
import { useMemo } from 'react';

//props for trackslist

const SongScreen = () => {
    const search = useNavigationSearch({
        searchBarOptions: {
            placeholder: 'Search songs',
        },
    })

    const filteredSongs = useMemo(() => {
        if (!search) return library

        return library.filter(trackTitleFilter(search))
    },[search])


    return <View style= {defaultStyles.container}>
        {/* <Text style = {defaultStyles.text}> Songs screen</Text> */}

        <ScrollView 
            contentInsetAdjustmentBehavior='automatic'
            style={{paddingHorizontal: screenPadding.horizontal}}
        >
            <TracksList tracks={filteredSongs} scrollEnabled={false} 
            />
        </ScrollView>
    </View>
}

export default SongScreen