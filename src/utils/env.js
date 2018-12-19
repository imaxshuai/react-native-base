import { Platform } from 'react-native';


export const Env = {
    mode: 'Test',
    authorization: {},
    baseURL: 'http://demo-api.shoptima.top/',
    // baseURL: 'https://api-stg.shoptima.com/',
    // baseURL: 'https://api.shoptima.top/',
    // baseURL: 'http://api.core.test/',
    apiKey: 'Ptb6aWJjdeLrWE3Q',
    // apiKey: 'AA8I1s37P0kMHomn',
    color: {
        green: '#176500',
        red: '#FF0032',
        pink: '#ff739d',
        orange: '#ff8a3f',
        yellow: '#FFB400',
        blue: '#2e82ff',
        white: '#FFFFFF',
        black: '#000000',
    },
    header: {
        height: 0
    },
    footer: {
        height: 0
    },
    font: {
        font_01: Platform.OS === 'ios' ? "AkzidenzGroteskCE" : "AkzidenzGroteskCE Cnd",
        font_02: "BreeSerif-Regular",
        font_03: "FredokaOne-Regular",
        font_04: "Roboto",
    },
    key: {
        android: {
            Test: '3Oh5CiKIJHLQzw-bZWOlwaI_lvrhf0d46ab9-5ec1-4ff4-bc5e-5af9ca88c9e1',
            Staging: 'D4a05tBdZU1JbeNrLe9bEtKpd33Ef0d46ab9-5ec1-4ff4-bc5e-5af9ca88c9e1',
            Production: 'zBSxZmVEu2LFCuiQD76_o8h7AK9Ef0d46ab9-5ec1-4ff4-bc5e-5af9ca88c9e1',
        },
        ios: {
            Test: 'QtRN4KtcJ4Runy6DlOzWmXYAUcUgf0d46ab9-5ec1-4ff4-bc5e-5af9ca88c9e1',
            Staging: 'gXjH-W5fX0sNP8NrOWv9FCsUuTyef0d46ab9-5ec1-4ff4-bc5e-5af9ca88c9e1',
            Production: 'z50Dk270B1vL-KLBX1ZjN4elJLzXf0d46ab9-5ec1-4ff4-bc5e-5af9ca88c9e1',
        },
    }
};