import { configure } from 'enzyme';
//import * as EnzymeAdapter from 'enzyme-adapter-react-16';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
