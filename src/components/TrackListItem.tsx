import { unkwongTrackImageUri } from "@/constants/images"
import { colors, fontSize } from "@/constants/tokens"
import { defaultStyles } from "@/styles"
import { Text, StyleSheet,TouchableHighlight, View } from "react-native"
import FastImage from "react-native-fast-image"

export type TrackListItemProps = {
    track: {title: string, image?: string, artist?: string}
}

export const TrackListItem = ({track}: TrackListItemProps) => {
    const isActiveTrack = false

    return < TouchableHighlight>
    <View style={styles.trackItemContainer}>
    <View>
        <View>
            <FastImage source={{
                uri: track.image || unkwongTrackImageUri,
                priority: FastImage.priority.normal
            }}
            style={{
                ...styles.trackArtworkImage,
                opacity: isActiveTrack ? 0.6 : 1,
            }}
            />
        </View>

        <View style ={{width:'100%'}}>
            <Text numberOfLines={1}
            style={{
                ...styles.trackTitleText,
                color: isActiveTrack ? colors.primary : colors.text,
            }}>{track.title}</Text>
            {track.artist && <Text numberOfLines={1}
            style={styles.trackArtistText}>{track.artist}</Text>} 


        </View>
    </View>
    
    </View>
    
    </TouchableHighlight>
}

const styles = StyleSheet.create({
    trackItemContainer:{
        flexDirection:'row',
        alignItems:'center',
        columnGap: 14,
        paddingRight:20
    },
    trackArtworkImage:{
        borderRadius:8,
        width:50,
        height:50
    },
    trackTitleText:{
        fontSize:fontSize.sm,
        fontWeight:'600',
        maxWidth: '90%',
    },
    trackArtistText:{
        ...defaultStyles.text,
        color: colors.textMuted,
        fontSize:14,
        marginTop:4,

    },
})