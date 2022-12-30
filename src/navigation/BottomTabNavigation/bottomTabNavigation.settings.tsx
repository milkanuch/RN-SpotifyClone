import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';

import Icon from 'components/Icon/Icon';

import { COLORS } from 'constants/colors';
import { OPEN_SANS_SEMI_BOLD } from 'constants/fonts';
import { iconImages } from 'constants/icons';

export const HOME_STACK_OPTIONS: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <Icon source={focused ? iconImages.FilledHome : iconImages.StrokedHome} />
  ),
};

export const SEARCH_STACK_OPTIONS: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarLabel: 'Search',
  tabBarIcon: ({ focused }) => (
    <Icon
      source={focused ? iconImages.FilledSearch : iconImages.StrokedSearch}
    />
  ),
};

export const LIBRARY_STACK_OPTIONS: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarLabel: 'Your Library',
  tabBarIcon: ({ focused }) => (
    <Icon
      source={focused ? iconImages.FilledLibrary : iconImages.StrokedLibrary}
    />
  ),
};

export const BOTTOM_TAB_NAVIGATOR_OPTIONS: BottomTabNavigationOptions = {
  tabBarStyle: {
    backgroundColor: COLORS.darkGray,
    borderTopColor: COLORS.black,
    paddingBottom: 5,
  },
  tabBarLabelStyle: {
    fontFamily: OPEN_SANS_SEMI_BOLD,
    fontSize: 12,
  },
  tabBarActiveTintColor: COLORS.white,
};
