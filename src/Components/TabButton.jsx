export default function TabButtton({label , OnSelect}) {

    return (
        <li>
            <button onClick={OnSelect}>
            { label }
            </button>
        </li>
    );
}