import { StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    centerView:{
        alignItems:'center'
    },
    screenCenterView:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    row:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    timerRow:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around'
    },
    historyRow:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    historyDataRow:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        // alignItems:'flex-start'
    },
    input: {
        height: 40,
        margin: 12,
        padding: 10,
        borderBottomWidth:1,
      },
      buttonContainer:{
        backgroundColor:'dodgerblue',
        width:100,
        marginTop: 15,
        height:30,
        borderRadius:10
        // padding:20
      },
      historyContainer:{
        backgroundColor:'dodgerblue',
        width:160,
        marginTop: 15,
        marginBottom:20,
        height:30,
        borderRadius:10
        // padding:20
      },
      pauseContainer:{
        backgroundColor:'yellow',
        width:100,
        marginTop: 15,
        height:30,
        borderRadius:10
        // padding:20
      },
      startButtonContainer:{
        backgroundColor:'green',
        width:100,
        marginTop: 15,
        height:30,
        borderRadius:10
      },
      stopButtonContainer:{
        backgroundColor:'red',
        width:80,
        marginTop: 15,
        height:30,
        borderRadius:10
      },
      saveButtonContainer:{
        backgroundColor:'dodgerblue',
        width:100,
        marginTop: 20,
        height:30,
        borderRadius:10,
        // padding:20
      },
      historyButtonContainer:{
        backgroundColor:'orange',
        width:120,
        margin: 16,
        height:30,
        borderRadius:10,
        // padding:20
      },
      historyButtonGreyContainer:{
        backgroundColor:'grey',
        width:120,
        margin: 16,
        height:30,
        borderRadius:10,
        // padding:20
      },
      btnText:{
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
      },
      pauseText:{
        color: 'black',
        textAlign: 'center',
        fontSize: 20,
      },
      stopText:{
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
      },
      tagsText:{
        color: 'black',
        textAlign: 'center',
        fontSize: 20,
        marginTop: 12,
      },
      historyRowHeadingText:{
        color: 'black',
        textAlign: 'center',
        fontSize: 18,
        marginTop: 12,
      },
      historyDataText:{
        color: 'black',
        fontSize: 14,
        margin: 12,
        textAlign:'right'
      },
      item: {
        marginVertical: 8,
        marginHorizontal: 16,
      },
      itemContainer:{
        backgroundColor: '#f9c2ff',
        padding: 20,
      },
      title: {
        fontSize: 32,
      },
      imgBg: {
        height: 360,
        width: '100%',
        overflow: 'visible',
        justifyContent:'center'
      },
      timerText:{
        textAlign:'center',
        fontSize: 32,
      }

});