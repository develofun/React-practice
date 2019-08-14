const React = require('react');

const Gugudan = () => {
    const [first, setFirst] = React.useState(Math.ceil(Math.random() * 9));
    const [second, setSecond] = React.useState(Math.ceil(Math.random() * 9));
    const [value, setValue] = React.useState('');
    const [result, setResult] = React.useState('');
    const inputRef = React.useRef(null);

    const submitFunc = (e) => {
        e.preventDefault();

        if(first * second === parseInt(value)) {
            setResult('Correct!');
            setFirst(Math.ceil(Math.random() * 9));
            setSecond(Math.ceil(Math.random() * 9));
        } else {
            setResult('Wrong!');
        }
        
        setValue('');
        inputRef.current.focus();
    }

    const changeFunc = (e) => {
        setValue(e.target.value);
    }

    return (
        <React.Fragment>
            <div>{first} 곱하기 {second} = ?</div>
            <form onSubmit={submitFunc}>
                <input ref={inputRef} value={value} onChange={changeFunc} />
                <button type="submit">Set</button>
                <p>{result}</p>
            </form>
        </React.Fragment>
    );
}

module.exports = Gugudan;