# useLocalState
A Hook that allows you to save changes in state to local storage.
## Install
`npm install https://github.com/adustin21/useLocalState`
## Usage
```
import { useLocalState } from 'uselocalstate';

const [state, setState] = useLocalState({keyName: 'state', data: 'data'}) // keyName is a required field
```
