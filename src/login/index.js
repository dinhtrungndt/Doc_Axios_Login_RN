import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Alert,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useContext} from 'react';
import CheckBox from '@react-native-community/checkbox';
import {UserContext} from '../components/users/UserContext';

const LoginScreens = props => {
  const {navigation} = props;
  const [email, setEmail] = useState('haha.huhu@gmail.com');
  const [password, setPassword] = useState('1');
  const {onLogin} = useContext(UserContext);

  const [loading, setLoading] = useState(false);

  const onLoginPress = async () => {
    setLoading(true);
    const result = await onLogin(email, password);
    if (!result) {
      Alert.alert('Login failed');
    }
    setLoading(false);
  };

  const [isChecked, setIsChecked] = useState(true);

  return (
    <View style={styles.T}>
      {/* header  */}
      <View style={styles.header}>
        <Text style={styles.text_hello}>Hello</Text>
        <Text style={[styles.text_hello, {color: '#1877F2'}]}>Again!</Text>
        <Text style={styles.text_welcome}>Welcome back you’ve been missed</Text>
      </View>

      {/* body  */}
      <View style={styles.body}>
        {/* Email  */}
        <View style={styles.username}>
          <Text style={styles.username_text}>
            Email<Text style={{color: 'red'}}>*</Text>
          </Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            style={styles.user_Input}
            placeholder="Enter your username"
          />
        </View>

        {/*  password  */}
        <View style={styles.password}>
          <Text style={styles.password_text}>
            Password<Text style={{color: 'red'}}>*</Text>
          </Text>
          <View style={styles.inputPass_Body}>
            <TextInput
              value={password}
              onChangeText={setPassword}
              style={styles.user_Input}
              secureTextEntry={true}
              placeholder="Enter your password"
            />
            <Image
              style={styles.eyeIcon}
              source={require('../../media/eye.png')}
            />
          </View>
        </View>

        {/* remember me and forgot password  */}
        <View style={styles.remember_Forgot}>
          <View style={styles.checkBoxContainer}>
            <CheckBox
              value={isChecked}
              onValueChange={setIsChecked}
              tintColors={{true: '#5890FF', false: '#4E4B66'}}
            />
            <Text style={styles.checkBoxLabel}>Remember me</Text>
          </View>

          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Forgot the password ?</Text>
          </TouchableOpacity>
        </View>

        {/* button login  */}
        <TouchableOpacity
          style={styles.btnLogin}
          activeOpacity={0.5}
          onPress={onLoginPress}>
          <Text
            style={{
              fontSize: 16,
              color: '#fff',
              fontWeight: '600',
              lineHeight: 24,
              letterSpacing: 0.12,
            }}>
            {loading ? 'Loading...' : 'Login'}
          </Text>
        </TouchableOpacity>
      </View>
      {/* footer  */}
      <View style={styles.footer}>
        {/* or continue with  */}
        <Text
          style={{
            textAlign: 'center',
            fontSize: 14,
            lineHeight: 21,
            fontWeight: '400',
            color: '#4E4B66',
            paddingTop: 16,
          }}>
          or continue with
        </Text>

        {/* icon fb and google  */}
        <View
          style={{
            with: 344,
            height: 50,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity style={styles.footer_icon_fb}>
            <Image
              style={{width: 24, height: 24}}
              source={require('../../media/icon_fb.png')}
            />
            <Text
              style={{
                paddingLeft: 5,
                fontWeight: '600',
                color: '#667080',
                fontSize: 16,
              }}>
              Facebook
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footer_icon_google}>
            <Image
              style={{width: 24, height: 24}}
              source={require('../../media/icon_google.png')}
            />
            <Text
              style={{
                paddingLeft: 5,
                fontWeight: '600',
                color: '#667080',
                fontSize: 16,
              }}>
              Google
            </Text>
          </TouchableOpacity>
        </View>

        {/* don't have an account  */}
        <Text
          style={{
            textAlign: 'center',
            fontSize: 14,
            lineHeight: 21,
            fontWeight: '400',
            color: '#4E4B66',
            paddingTop: 30,
          }}>
          don’t have an account ?
          <TouchableOpacity>
            <Text
              style={{
                color: '#1877F2',
                fontWeight: '600',
                fontSize: 14,
                lineHeight: 21,
                paddingHorizontal: 5,
                paddingTop: 5,
              }}
              onPress={() => navigation.navigate('SignUpScreens')}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
};

export default LoginScreens;

const styles = StyleSheet.create({
  footer_icon_google: {
    width: 160,
    height: 48,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    gap: 10,
    borderRadius: 6,
    padding: 10,
    backgroundColor: '#E5E7E9',
  },
  footer_icon_fb: {
    width: 160,
    height: 48,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    gap: 10,
    borderRadius: 6,
    padding: 10,
    backgroundColor: '#E5E7E9',
  },
  btnLogin: {
    width: 344,
    height: 50,
    backgroundColor: '#1877F2',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
  },

  checkBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkBoxLabel: {
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0.12,
    paddingLeft: 5,
    color: '#4E4B66',
  },
  forgotPassword: {
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0.12,
    color: '#5890FF',
  },
  remember_Forgot: {
    width: 344,
    height: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    gap: 16,
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    top: 15,
  },
  inputPass_Body: {
    position: 'relative',
  },
  user_Input: {
    width: '100%',
    height: 48,
    marginTop: 4,
    borderWidth: 1,
    borderColor: '#4E4B66',
    borderRadius: 6,
    backgroundColor: '#fff',
    padding: 10,
  },
  password_text: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
    marginTop: 16,
    letterSpacing: 0.12,
    color: '#4E4B66',
  },
  username_text: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
    marginTop: 48,
    letterSpacing: 0.12,
    color: '#4E4B66',
  },
  text_welcome: {
    width: 222,
    height: 60,
    fontSize: 20,
    fontWeight: '400',
    lineHeight: 30,
    letterSpacing: 0.12,
    color: '#4E4B66',
  },
  text_hello: {
    fontSize: 48,
    fontWeight: '700',
    lineHeight: 72,
    letterSpacing: 0.12,
    color: '#050505',
  },
  T: {
    width: '100%',
    height: '100%',
    padding: 24,
  },
});
