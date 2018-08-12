const {render, shallow, mount } = require('enzyme');
const Enzyme  = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-16');
const React = require('react');

// Make Enzyme functions available in all test files without importing
global.shallow = shallow;
global.render = render;
global.mount = mount;
global.react= React;

// Setup enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });