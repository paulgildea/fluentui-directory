import React, { useState } from 'react';
import './App.css';
import Directory  from './directory';
import { SearchBox, initializeIcons, Text, Stack, Link, Fabric, createTheme, Customizations, FontSizes, Image, ImageFit, IStyleFunctionOrObject, ILinkStyleProps, ILinkStyles, } from '@fluentui/react';
import { Card, ICardSectionTokens, ICardSectionStyles, ICardStyles } from '@uifabric/react-cards';

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
  const filterResults = (ev?: React.ChangeEvent<HTMLInputElement>, newValue?: string) => {
    const retValue = Directory.listing.filter((item) => {
      const lowerCaseValue:string = newValue!.toLowerCase();
      return item.name.toLowerCase().includes(lowerCaseValue); 
    });
    setListing(retValue);
  };

  const cardStackTokens = { childrenGap: 20 };
  const cardTokens = { childrenMargin: 12 };
  const cardSectionStyles: ICardSectionStyles =  {
    root: {
      width: '320px',
    }
  };
  const cardLinkStyles: IStyleFunctionOrObject<ILinkStyleProps, ILinkStyles> = {
    root:{
      fontSize: FontSizes.small,
      textAlign: 'left'
    }
  };


  const cardStyles: ICardStyles = {
    root: {
      border: '1px solid #fff',
    }
  };

  const cardFooterStyles: ICardSectionStyles = {
    root: {
      alignSelf: 'stretch',
      borderLeft: '1px solid #fff;',
    }
  }
  const cardFooterTokens: ICardSectionTokens =  {
    padding: '0px, 12px, 0px 12px',
  }
  const cardListing = listing.map((library, i) => 
    <Card tokens={cardTokens} styles={cardStyles} horizontal>
      <Card.Item>
        <Link href={library.website}><Image src={library.icon} height={100} width={100} imageFit={ImageFit.centerContain}/></Link>
      </Card.Item>
      <Card.Section horizontalAlign="start" styles={cardSectionStyles}>
        <Text variant="small">{library.type}</Text>
        <Text variant="large">{library.name}</Text>
        <Link href={library.website} styles={cardLinkStyles}>{library.website}</Link>
      </Card.Section>
      <Card.Section styles={cardFooterStyles} tokens={cardFooterTokens}>
        <Stack horizontalAlign="start">
          <Link href={library.repo_url} styles={cardLinkStyles}>Repo</Link>
          <Link href={library.package_url} styles={cardLinkStyles}>Package</Link>
          <Link href={library.design_kit_url[0]} styles={cardLinkStyles}>Design Toolkit</Link>
        </Stack>
      </Card.Section>
    </Card>
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
        </Stack>
        <Stack horizontalAlign="center" tokens={cardStackTokens}>
          {cardListing}
        </Stack>
      </Fabric>
    </div>
  );
}

export default App;
