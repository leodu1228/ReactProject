import {
	useCallback,
	useEffect,
	useLayoutEffect,
	useRef,
	useState,
} from 'react';

let i = 1;
 
const Hooks = ({ defaultName, defaultNumber = 1 }) => {
	const [name, setName] = useState(defaultName);
	const [number, setNumber] = useState(1);
	const [type, setType] = useState(true);
    let a = 0 ;

	const onClick = () => {
		window.alert(name);
	};

	const handleChange = (value) => {
        // console.log('value 2', value);
		setName(value);
	};

	const onChange = (e) => {
        // console.log('e.target.value 1', e.target.value);
		handleChange(e.target.value);
		// console.log('name 3', name);
        // console.log('-----------------------------')
	};

	const functionA = () => {
		// console.log('functionA');
        a += 1;
        // console.log(a);
	};

	const functionB = () => {
		// console.log('functionB');
	};

	const switchType = () => {
		console.log(!type);
		setType(!type);
	};

    defaultNumber += 1;
    // console.log('defaultNumber', defaultNumber);

    i+=1;
    // console.log('i', i);

    // setNumber(number+1);
    // console.log(number);

    useEffect(() => {
        console.log('useEffect', number)
	}, [number])

	const log = useCallback(() => {
        console.log('useCallback', number)
	}, [type])

	return (
		<div>
            <button onClick={log}>log number</button>
            <button onClick={() => setNumber(number+1)}>click add 1</button>
			<input onChange={onChange} />
			<button onClick={type ? functionA : functionB}>show name</button>
			<button onClick={switchType}>Switch Type</button>
		</div>
	);
};

export default Hooks;



// React.memo
// useEffect
// useCallback
// useRef
// useState
// useLayoutEffect
