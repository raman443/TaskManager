import {styles} from '../styles/TaskStyles';
import {Text, View,TouchableOpacity } from 'react-native';
const Item = ({ title,onPress }) => (
    <View style={styles.item}>
        <TouchableOpacity 
                style={styles.itemContainer}
                onPress={onPress}
        >
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    </View>
  );
  export default Item;