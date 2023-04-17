#card Game

Install node modules : npm install
Run the application  : npm run start


#Breif about card game

Taking user input in Parent component (UserInput.js) 
Passing same value to child component (CardTable.js)
Based on no of card value, displaying table. Which inclues card number and button
Button indicates show card
Initially all the values are in false state (Hide state)
On Click of Button card will show, status change to true
On Second click of card, that card value became true and previous value became false


#Test Case
Step 1 : Install enzyme adapter react 16 package by using command : npm install --save-dev @cfaester/enzyme-adapter-react-18

Step 2 :
Expand src folder and open setuptests.js file. If file not exists then create setupTests.js file in same folder (I,e src folder)

import Enzyme from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';

Enzyme.configure({ adapter: new Adapter() });


Step 3 : 
Write test case in App.test.js

Step 4 : 
Run test case using : npm run test