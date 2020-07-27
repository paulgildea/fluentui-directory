import React from 'react';
import './App.css';
import Directory  from './directory';
import { SearchBox, initializeIcons, Text, Stack, Link } from '@fluentui/react';

const appTokens = {
  padding: 10
}

function App() {

  initializeIcons();

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
      <Stack tokens={{appTokens}}>
        <Text variant={'large'}>Fluent UI Directory</Text>
        <SearchBox placeholder="Search" onSearch={newValue => console.log('value is ' + newValue)} />
        <table>
          <thead>
            {headers}
          </thead>
          <tbody>
            {listing}
          </tbody>
        </table>
      </Stack>
    </div>
  );
}

export default App;
