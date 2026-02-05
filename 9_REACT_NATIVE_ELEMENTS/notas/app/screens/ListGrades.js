import {View, Text, StyleSheet,FlatList, TouchableHighlight} from 'react-native'
import {getGrades,saveGrade} from '../services/GradeServices'
import {FAB, ListItem,Avatar} from '@rneui/base'
let gra=getGrades();
export const ListGrades=({navigation})=>{
    const ItemGrade=({nota})=>{
        return  <TouchableHighlight onPress={()=>{
            navigation.navigate("GradeFormNav",{notita:nota});
        }}>
        <ListItem bottomDivider>  
                 <Avatar
                 title={nota.subject.substring(0, 1)}
                 containerStyle={{ backgroundColor: '#6733b9' }}
                 rounded
                />
                    <ListItem.Content> 
                    <ListItem.Title>
                     {nota.subject}
                    </ListItem.Title>
                    
                    </ListItem.Content>

                    <ListItem.Content> 
                    <ListItem.Title>
                     {nota.grade}
                    </ListItem.Title>
                    
                    </ListItem.Content>
                    <ListItem.Chevron/>
                    </ListItem >
                    </TouchableHighlight>
    }
    return <View style={styles.container}>
        <FlatList
            data={gra}
                renderItem={({item})=>{
                    return <ItemGrade nota={item} />
                }}
            keyExtractor={(item)=>{return item.subject;}}
        />

        <FAB 
            title="+"
            placement='right'
            onPress={()=>{navigation.navigate("GradeFormNav")}}
        />
        </View>
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'center',
    },
})