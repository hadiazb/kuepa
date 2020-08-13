import React, { Fragment } from 'react';
import { GlobalStyle } from './style/GlobalStyle';
import { StudentContainer } from './components/ListOfStudents/index';
import { Main } from './components/Main/index';
import { Dashboard } from './components/Dashboard/index';



const App = () => {
	return (
		<Fragment>
			<GlobalStyle />
			<Main />
			<Dashboard/>
			<StudentContainer />
		</Fragment>
	);
};

export default App;
