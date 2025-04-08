import { FlatList, FlatListProps, View } from "react-native"
import library from "@/assets/data/library.json"
import { TrackListItem } from "./TrackListItem"
import { utilsStyles } from "@/styles"

export type TracksListProps = Partial<FlatListProps<unknown>>

const ItemDivider= () => (
    <View style = {{...utilsStyles.itemSeperator, marginVertical:9, marginLeft:60}} />
)

export const TracksList = ({...flatlistProps}: TracksListProps) => {
    // return <FlatList data={[]} renderItem={()=>null} />
    return <FlatList data={library} 
    ItemSeparatorComponent={ItemDivider}
    renderItem={({item: track})=> <TrackListItem 
        track = {{
           ...track,
           image: track.artwork

        }}
        
         />}
    {...flatlistProps}
    />
}