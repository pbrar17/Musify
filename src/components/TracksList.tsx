import { FlatList, FlatListProps, View } from "react-native"
import library from "@/assets/data/library.json"
import { TrackListItem } from "./TrackListItem"
import { utilsStyles } from "@/styles"

export type TracksListProps = Partial<FlatListProps<unknown>> & {
    tracks: any[]
}

const ItemDivider= () => (
    <View style = {{...utilsStyles.itemSeparator, marginVertical:9, marginLeft:60}} />
)

export const TracksList = ({tracks, ...flatlistProps}: TracksListProps) => {
    // return <FlatList data={[]} renderItem={()=>null} />
    return <FlatList data={tracks} 
    ItemSeparatorComponent={ItemDivider}
    ListFooterComponent={ItemDivider}
    contentContainerStyle={{paddingTop: 10, paddingBottom: 128}}
    renderItem={({item: track})=> <TrackListItem 
        track = {{
           ...track,
           image: track.artwork

        }}
        
         />}
    {...flatlistProps}
    />
}