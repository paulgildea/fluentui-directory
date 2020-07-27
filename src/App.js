import React from 'react';
import './App.css';
import Directory  from './directory';
import { SearchBox, initializeIcons, Text, Stack, Link, Fabric, createTheme, Customizations} from '@fluentui/react';

const appTokens = {
  padding: 10
}

const darkTheme = createTheme({
  palette: {
    themePrimary: '#0d83de',
    themeLighterAlt: '#010509',
    themeLighter: '#021523',
    themeLight: '#042743',
    themeTertiary: '#084f85',
    themeSecondary: '#0c74c3',
    themeDarkAlt: '#238fe1',
    themeDark: '#429fe6',
    themeDarker: '#70b7ec',
    neutralLighterAlt: '#1a1919',
    neutralLighter: '#232222',
    neutralLight: '#323030',
    neutralQuaternaryAlt: '#3b3939',
    neutralQuaternary: '#434141',
    neutralTertiaryAlt: '#636060',
    neutralTertiary: '#c8c8c8',
    neutralSecondary: '#d0d0d0',
    neutralPrimaryAlt: '#dadada',
    neutralPrimary: '#ffffff',
    neutralDark: '#f4f4f4',
    black: '#f8f8f8',
    white: '#0f0f0f',
  }});

  const lightTheme = createTheme({
    palette: {
      themePrimary: '#0078d4',
      themeLighterAlt: '#eff6fc',
      themeLighter: '#deecf9',
      themeLight: '#c7e0f4',
      themeTertiary: '#71afe5',
      themeSecondary: '#2b88d8',
      themeDarkAlt: '#106ebe',
      themeDark: '#005a9e',
      themeDarker: '#004578',
      neutralLighterAlt: '#faf9f8',
      neutralLighter: '#f3f2f1',
      neutralLight: '#edebe9',
      neutralQuaternaryAlt: '#e1dfdd',
      neutralQuaternary: '#d0d0d0',
      neutralTertiaryAlt: '#c8c6c4',
      neutralTertiary: '#a19f9d',
      neutralSecondary: '#605e5c',
      neutralPrimaryAlt: '#3b3a39',
      neutralPrimary: '#323130',
      neutralDark: '#201f1e',
      black: '#000000',
      white: '#ffffff',
    }});

const searchStyles = {
  root: {
    width: '320px',
    maxWidth: '320px',
    margin: 'auto'
  }
}

function App() {

  initializeIcons();
  Customizations.applySettings({theme: darkTheme});

  const headers = Directory.schema.map((header, i) => 
    <th>{header}</th> );
  
  const listing = Directory.listing.map((library, i) => 
    <tr>
      <td>{library.name}</td>
      <td>{library.type}</td>
      <td><Link href={library.repo_url}>{library.repo_url}</Link></td>
      <td><Link href={library.package_url}>{library.package_url}</Link></td>
      <td>{ library.design_kit_url.map((kit, i) => <Stack><Link href={kit}>{kit}</Link></Stack>)}</td>
    </tr>
);

  return (
    <div className="App">
      <Fabric applyThemeToBody>
        <Stack tokens={appTokens}>
          <Stack horizontal>
            <Text variant={'large'}>Fluent UI Directory</Text>
          </Stack>
          <SearchBox styles={searchStyles} placeholder="Search" onSearch={newValue => console.log('value is ' + newValue)} />
          <table>
            <thead>
              {headers}
            </thead>
            <tbody>
              {listing}
            </tbody>
          </table>
        </Stack>
      </Fabric>
    </div>
  );
}

export default App;
