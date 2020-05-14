import { StackActions } from '@react-navigation/native';
import { CommonActions } from '@react-navigation/native';

export const pushScreen = (routeName, params) => {
    return StackActions.push(routeName, params);
};

export const popScreen = (count = 1) => {
    return StackActions.pop(count);
};

export const resetPage = (routeName) => {
    return CommonActions.reset({
        index: 0,
        routes: [
            {
                name: routeName
            }
        ]
    })
};

export const goBack = () => {
    return CommonActions.goBack();
};

export const navigateToPage = (routeName, params) => {
    return CommonActions.navigate({name: routeName, params});
};
