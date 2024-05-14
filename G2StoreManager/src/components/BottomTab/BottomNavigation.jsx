import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useColorScheme } from 'nativewind'

const BottomNavigation = ({ state, descriptors, navigation }) => {
  const { colorScheme } = useColorScheme()
  return (
    <View style={{ flexDirection: 'row', backgroundColor: colorScheme == 'dark' ? 'black' : 'white', paddingVertical: 20 }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key]
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name

        const isFocused = state.index === index
        let iconName
        if (route.name === 'Trang chủ') {
          iconName = 'home'
        } else if (route.name === 'Thông báo') {
          iconName = 'bell-outline'
        } else if (route.name === 'Tài khoản') {
          iconName = 'account-cog-outline'
        }

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true
          })

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name)
          }
        }

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key
          })
        }

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            key={index}
          >
            {colorScheme == 'dark' ?
              <Icon name={iconName} style={{ color: isFocused ? 'white' : '#AAAAAA' }} size={25}/>
              :
              <Icon name={iconName} style={{ color: isFocused ? '#31A063' : '#696969' }} size={25}/>
            }
            {colorScheme == 'dark' ?
              <Text style={{ color: isFocused ? 'white' : '#AAAAAA' }}>
                {label}
              </Text>
              :
              <Text style={{ color: isFocused ? '#31A063' : '#696969' }}>
                {label}
              </Text>
            }

          </TouchableOpacity>
        )
      })}
    </View>
  )
}

export default BottomNavigation
