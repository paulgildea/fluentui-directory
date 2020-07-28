import React, { useState } from 'react';
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
  const [listing, setListing] = useState(Directory.listing);
  const filterResults = (ev, newValue) => {
    const retValue = Directory.listing.filter((item) => {
      const lowerCaseValue = newValue.toLowerCase();
      return item.name.toLowerCase().includes(lowerCaseValue); 
    });
    setListing(retValue);
  };

  const headers = Directory.schema.map((header, i) => 
    <th>{header}</th> );
  
  const directoryListing = listing.map((library, i) => 
    <tr>
      <td>{library.name}</td>
      <td>{library.type}</td>
      <td><Link href={library.website}>{library.website}</Link></td>
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
          <SearchBox iconProps={{iconName: 'Filter'}} styles={searchStyles} placeholder="Filter" onChange={filterResults} onClear={(ev) => {
            setListing(Directory.listing);
          }} />
          <table>
            <thead>
              {headers}
            </thead>
            <tbody>
              {directoryListing}
            </tbody>
          </table>
        </Stack>
      </Fabric>
    </div>
  );
}

export default App;
