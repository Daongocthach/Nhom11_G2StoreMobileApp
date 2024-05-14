import { Text, View, Dimensions, Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon1 from 'react-native-vector-icons/FontAwesome'
import { useColorScheme } from 'nativewind'
import { useNavigation } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux'
import getStyles from './styles'
import { SafeAreaView } from 'react-native-safe-area-context'

const { width, height } = Dimensions.get('window')

function Header() {
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const { colorScheme } = useColorScheme()
    const styles = getStyles(colorScheme)
    const user = useSelector(state => state.auth)

    return (
        <SafeAreaView style={{ backgroundColor: '#4F4F4F' }}>
            <View style={{ paddingLeft: 20, marginBottom: 20, display:'flex', flexDirection:'row', alignItems:'center', gap: 5 }}>
                <Image source={{
                    uri: 'https://th.bing.com/th/id/OIP.137B9oVhSBtvDiOmhYbDTAHaHa?rs=1&pid=ImgDetMain'
                }} style={{ height: 40, width: 40, borderRadius: 20 }} />
                <Text className='text-xl font-semibold text-white'>G2 Store Xin Chào, Admin</Text>
            </View>
        </SafeAreaView>
    )
}

export default Header