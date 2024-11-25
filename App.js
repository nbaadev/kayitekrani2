import { StatusBar } from 'expo-status-bar'; 
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import { useState } from 'react'; 
import "./global.css";

export default function App() { 
  const [isRegisterScreen, setIsRegisterScreen] = useState(false);

  if (isRegisterScreen) {
    return (
      <View className="flex-1 justify-center items-center bg-[#F7E8EF] p-4">
        <TextInput
          className="w-full h-12 border border-[#ccc] rounded-md mb-4 px-4 bg-white font-medium"
          placeholder="Adınız"
        />
        <TextInput
          className="w-full h-12 border border-[#ccc] rounded-md mb-4 px-4 bg-white font-medium"
          placeholder="Soyadınız"
        />
        <TextInput
          className="w-full h-12 border border-[#ccc] rounded-md mb-4 px-4 bg-white font-medium"
          placeholder="Email"
        />
        <TextInput
          className="w-full h-12 border border-[#ccc] rounded-md mb-4 px-4 bg-white font-medium"
          placeholder="Kullanıcı Adınız"
        />
        <TextInput
          className="w-full h-12 border border-[#ccc] rounded-md mb-4 px-4 bg-white font-medium"
          placeholder="Şifre Oluşturun"
          secureTextEntry={true}
        />
        <TextInput
          className="w-full h-12 border border-[#ccc] rounded-md mb-4 px-4 bg-white font-medium"
          placeholder="Şifreyi Tekrar Girin"
          secureTextEntry={true}
        />
        <View className="w-full my-2"> 
          <Button
            title="Kayıt Ol"
            onPress={() => setIsRegisterScreen(false)}
            color="#A9A9A9" 
          />
        </View>
      </View>
    );
  }

  return (
    <View className="flex-1 justify-center items-center bg-[#F7E8EF] p-4">
      <TextInput
        className="w-full h-12 border border-[#ccc] rounded-md mb-4 px-4 bg-white font-medium"
        placeholder="Email"
      />
      <TextInput
        className="w-full h-12 border border-[#ccc] rounded-md mb-4 px-4 bg-white font-medium"
        placeholder="Şifre"
        secureTextEntry={true}
      />
      <View className="w-full my-2"> 
        <Button
          title="Giriş Yap"
          onPress={() => {}} 
          color="#A9A9A9"
        />
      </View>
      <Text className="mt-5">Hesabınız yok mu?</Text>
      <View className="w-full my-2"> 
        <Button
          title="Kayıt Ol"
          onPress={() => setIsRegisterScreen(true)}
          color="#A9A9A9"
        />
      </View>
      <View className="flex-row items-center mt-5"> 
        <Image 
          source={require('./assets/indir.gif')} 
          className="w-6 h-6 mr-2" 
        />
        <Text className="text-xs text-[#333]">by nbadeturan</Text>
      </View>
    </View>
  );
}
