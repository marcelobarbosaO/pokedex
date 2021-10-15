import { Dimensions, Alert, Platform } from 'react-native';

type AlertProps = {
  title: string;
  msg: string;
};

export const isIOS = (): boolean => Platform.OS === 'ios';

export const isAndroid = (): boolean => Platform.OS === 'android';

export const { width: widthScreen, height: heightScreen } = Dimensions.get('window');

export const showAlert = ({ title, msg }: AlertProps) => Alert.alert(title, msg);
