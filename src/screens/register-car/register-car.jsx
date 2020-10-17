import React from 'react';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import BackgroundImage from '../../components/background-screen.component';
import ButtonText from '../../components/button-text.component';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



function RegisterCarScreen(props) {
  return (
    <View style={styles.container}>

      <BackgroundImage>

        <View style={{
          flexDirection: 'row',
          marginTop: 40,
          alignItems: 'center',
          paddingHorizontal: 10
        }}>
          <Icon name='menu' size={30} color='#a2a2db' style={{ width: 20 }} onPress={() => props.navigation.openDrawer()} />
        </View>

        <View style={styles.contain}>

          <View style={styles.header}>
            <Text style={styles.headerTitle}>Đăng kí xe</Text>
            <Text style={styles.securityText}>Thông tin cá nhân sẽ được bảo mật theo chính sách, quy định của nhà nước</Text>
          </View>

          <View style={styles.registerTextInfo}>
            <KeyboardAvoidingView behavior={Platform.OS == 'android' ? 'padding' : null} >
              <View style={styles.name}>
                <Text style={styles.titleInfo}>Họ và tên</Text>
                <TextInput style={styles.titleInput} placeholder='Lê Quang Huy' onPress={() => {
                  toggleAction();
                }} />
              </View>
              <View style={styles.phone}>
                <Text style={styles.titleInfo}>Số điện thoại</Text>
                <TextInput style={styles.titleInput} keyboardType='numeric' placeholder='0905222007' onPress={() => {
                  toggleAction();
                }} />
              </View>
              <View style={styles.licensePlate}>
                <Text style={styles.titleInfo}>Biển số xe</Text>
                <TextInput style={styles.titleInput} placeholder='' onPress={() => {
                  toggleAction();
                }} />
              </View>
              <ButtonText textContent='Tiếp tục' styleText={styles.text} onPress={() => { Keyboard.dismiss }}
                styleButton={styles.button} gotoScreen={() => props.navigation.navigate("RegisterCarImage")} />

            </KeyboardAvoidingView>
          </View>
        </View>


      </BackgroundImage>


    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",

  },
  contain: {
    flex: 1,
    flexDirection: "column",
  },
  header: {
    flex: 1,
  },
  headerTitle: {
    textAlign: "center",
    marginTop: 10,
    color: '#000',
    // fontWeight: 'bold',
    fontSize: 30
  },
  securityText: {
    marginHorizontal: 8,
    fontSize: 17,
    textAlign: 'center',
    color: 'gray'
  },
  registerTextInfo: {
    flex: 3,
    marginHorizontal: 10,
    marginTop:5
  },
  titleInfo: {
    marginTop: 5,
    fontSize: 18,
    color: '#000'
  },
  titleInput: {
    borderWidth: 0.1,
    marginTop: 10,
    fontSize: 18,
    height: 40,
    color: '#000',
    backgroundColor: '#D4EAF6'
  },
  button: {
    marginTop: 5,
    backgroundColor: "#FFAB2E",
    borderRadius: 15,
    width: 100,
    height: 35,
    alignSelf: 'center'
  },
  text: {
    textAlign: "center",
    marginVertical: 5,
    color: "#FFF",
    fontSize: 17,
    fontFamily: "Roboto_500Medium",
    justifyContent: 'center'
  }

})

export default RegisterCarScreen;