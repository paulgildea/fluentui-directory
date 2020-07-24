import React from 'react';
import './App.css';
import Directory  from './directory';
import { SearchBox, initializeIcons, Text, Stack } from '@fluentui/react';

const appTokens = {
  padding: 10
}

function App() {

  initializeIcons();

  const listing = Directory.map((pkg, i) => 
    <div>{pkg.package}</div>
  );

  return (
    <div className="App">
      <Stack tokens={{appTokens}}>
        <Text variant={'large'}>Fluent UI Directory</Text>
        <SearchBox placeholder="Search" onSearch={newValue => console.log('value is ' + newValue)} />
        <div>
          {listing}
        </div>

      </Stack>
    </div>
  );
}

export default App;
