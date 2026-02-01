import {View,Text,StyleSheet,Button} from 'react-native'
export const Home=({navigation})=>{
    return <View style={styles.container}>
        <Text>HOME</Text>
        <View style={styles.botones}>
        <Button
        style={styles.Bot}
                    title="Contactos"
                    onPress={(()=>{
                        navigation.navigate('ContactsNav');
                    })}
                />
        <Button
         style={styles.Bot}
                    title="Productos"
                    onPress={(()=>{
                        navigation.navigate('ProdNav');
                    })}
                />
        </View>
    </View>
}

const styles=StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    botones:{
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'baseline',
        padding:10,
        marginHorizontal:20,
        gap:60,
    },
    Bot:{
         margin:20,
    }
});