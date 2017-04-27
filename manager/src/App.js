import React, { Component } from 'react'; 
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
	componentWillMount() {
	const config = {
    apiKey: 'AIzaSyD57SMKptk2aNEvNpJKn_sTrpCeXr7JMwA',
    authDomain: 'manager-bc6d4.firebaseapp.com',
    databaseURL: 'https://manager-bc6d4.firebaseio.com',
    projectId: 'manager-bc6d4',
    storageBucket: 'manager-bc6d4.appspot.com',
    messagingSenderId: '172749675641'
		};

	firebase.initializeApp(config);
	}

	render() {
		return (
			<Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
				<Router />
			</Provider>
			);
	}
}

export default App;
