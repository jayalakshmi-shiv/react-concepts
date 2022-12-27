// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import React from 'react';
import {render} from '@testing-library/react';
import Enzyme, {mount, shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import {provider} from 'styled-components';
import {ThemeProvider} from 'styled-components';
import '@testing-library/jest-dom';
import 'jest-styled-components'
import themesCollection from './themes'

Enzyme.configure({adapter: new EnzymeAdapter()});
global.mount = mount;
global.shallow = shallow;

const mockStore = configureMockStore();
const store = mockStore({});

global.mountWithStore = child => mount(<provider store={store}>{child}</provider>)
global.mountWithTheme = child => mount(<ThemeProvider theme={themesCollection.light}>{child}</ThemeProvider>)
global.mountWithStoreNTheme = child => mount(<provider store={store}><ThemeProvider theme={themesCollection.light}>{child}</ThemeProvider></provider>)

global.shallowWithStore = child => shallow(<provider store={store}>{child}</provider>)
global.shallowWithTheme = child => shallow(<ThemeProvider theme={themesCollection.light}>{child}</ThemeProvider>)
global.shallowWithStoreNTheme = child => shallow(<provider store={store}><ThemeProvider theme={themesCollection.light}>{child}</ThemeProvider></provider>)

global.mountWithStoreRTL = child => render(<provider store={store}>{child}</provider>)
global.mountWithThemeRTL = child => render(<ThemeProvider theme={themesCollection.light}>{child}</ThemeProvider>)
global.mountWithStoreNThemeRTL = child => render(<provider store={store}><ThemeProvider theme={themesCollection.light}>{child}</ThemeProvider></provider>)
