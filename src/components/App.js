import IconDown from '../images/icon-down.svg';
import IconUp from '../images/icon-up.svg';
import IconFb from '../images/icon-facebook.svg';
import IconInsta from '../images/icon-instagram.svg';
import IconTwitter from '../images/icon-twitter.svg';
import IconYoutube from '../images/icon-youtube.svg';

import Container from './Container';
import Text from './Text';
import Card from './Card';
import Image from './Image';
import { createContext, useState } from 'react';
import ReactSwitch from 'react-switch';


export const ThemeContext = createContext(null);

function App() {
  //source tutorial:https://www.youtube.com/watch?v=VzF2iTTc0MA&ab_channel=PedroTech
  //fonction dark mode and light mode
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) =>(curr === "dark" ? "light" : "dark"));
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
    <div id={theme}>
     <Container>
      <header>
      <div className="switch">
        <div>
        <Text as="h1">Social Media Dashboard</Text>
        <Text as="p">Total Followers: 23,004</Text>
        </div>
        
        <div>
        <label>{theme === "dark" ? "Dark Mode" : "Light Mode"}</label>
        <ReactSwitch onChange={toggleTheme} checked={theme === "light"}/>
        </div>
      </div>
      </header>
      
      <div className='flex'>
        <Card as='card' classOnHover='hover'>
          <Image src={IconFb} alt='Facebook icon' />
          <Text as="p">@nathanf</Text> <br />
          <Text as="bigStat">1987</Text><br />
          <Text as="followers">Followers</Text>
          <Image src={IconUp} /><Text as="up"> 12 Today</Text>
        </Card>

        <Card as='card' classOnHover='hover'>
          <Image src={IconTwitter} />
          <Text as="p">@nathanf</Text>
          <Text as="bigStat">1044</Text>
          <Text as="followers">Followers</Text>
          <Image src={IconUp} /><Text as="up"> 99 Today</Text>
        </Card>

        <Card as='card' classOnHover='hover'>
          <Image src={IconInsta} />
          <Text as="p">@realnathanf</Text>
          <Text as="bigStat">11k</Text>
          <Text as="followers">Followers</Text>
          <Image src={IconUp} /><Text as="up"> 1099 Today</Text>
        </Card>

        <Card as='card' classOnHover='hover'>
          <Image src={IconYoutube} />
          <Text as="p">Nathan F.</Text>
          <Text as="bigStat">8239</Text>
          <Text as="followers">SUBSCRIBER</Text>
          <Image src={IconDown} /><Text as="down"> 144 Today</Text>
        </Card>
      </div>

      <Text as="h2">Overview - Today</Text>

      <div className='flex'>
      <Card as='card' classOnHover='hover'>
        <table>
          <row>
            <td><Text as="p">Page Views</Text></td>
            <td> <Image src={IconFb} alt='Facebook icon' /></td>
          </row>
          <row>
            <td><Text as="lilStat">87</Text></td>
            <td><Image src={IconUp} /><Text as="up"> 3%</Text></td>
          </row>
        </table>
      </Card>

      <Card as='card' classOnHover='hover'>
        <table>
          <row>
            <td><Text as="p">Likes</Text></td>
            <td> <Image src={IconFb} alt='Facebook icon' /></td>
          </row>
          <row>
            <td><Text as="lilStat">52</Text></td>
            <td><Image src={IconDown} /><Text as="down"> 2%</Text></td>
          </row>
        </table>
      </Card>
      
      <Card as='card' classOnHover='hover'>
        <table>
          <row>
            <td><Text as="p">Likes</Text></td>
            <td> <Image src={IconInsta} alt='Instagram icon' /></td>
          </row>
          <row>
            <td><Text as="lilStat">5462</Text></td>
            <td><Image src={IconUp} /><Text as="up"> 2257%</Text></td>
          </row>
        </table>
      </Card>

      <Card as='card' classOnHover='hover'>
        <table>
          <row>
            <td><Text as="p">Profile Views</Text></td>
            <td> <Image src={IconInsta} alt='Instagram icon' /></td>
          </row>
          <row>
            <td><Text as="lilStat">52k</Text></td>
            <td><Image src={IconUp} /><Text as="up"> 1375%</Text></td>
          </row>
        </table>
      </Card>

      <Card as='card' classOnHover='hover'>
        <table>
          <row>
            <td><Text as="p">Retweets</Text></td>
            <td> <Image src={IconTwitter} alt='Twitter icon' /></td>
          </row>
          <row>
            <td><Text as="lilStat">117</Text></td>
            <td><Image src={IconUp} /><Text as="up"> 303%</Text></td>
          </row>
        </table>
      </Card>

      <Card as='card' classOnHover='hover'>
        <table>
          <row>
            <td><Text as="p">Likes</Text></td>
            <td> <Image src={IconTwitter} alt='Twitter icon' /></td>
          </row>
          <row>
            <td><Text as="lilStat">507</Text></td>
            <td><Image src={IconUp} /><Text as="up"> 553%</Text></td>
          </row>
        </table>
      </Card>

      <Card as='card' classOnHover='hover'>
        <table>
          <row>
            <td><Text as="p">Likes</Text></td>
            <td> <Image src={IconYoutube} alt='Youtube icon' /></td>
          </row>
          <row>
            <td><Text as="lilStat">107</Text></td>
            <td><Image src={IconDown} /><Text as="down"> 19%</Text></td>
          </row>
        </table>
      </Card>

      <Card as='card' classOnHover='hover'>
        <table>
          <row>
            <td><Text as="p">Total Views</Text></td>
            <td> <Image src={IconYoutube} alt='Youtube icon' /></td>
          </row>
          <row>
            <td><Text as="lilStat">1407</Text></td>
            <td><Image src={IconDown} /><Text as="down"> 12%</Text></td>
          </row>
        </table>
      </Card>
   
      </div>

     </Container>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
