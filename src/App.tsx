import colors from './colors.json';

type Color = {
    name: string;
    hex: string;
};

const ColorRow = ({ color }: { color: Color }) => {
    return (
        <tr style={{ color: `#${color.hex}` }}>
            <td>{color.name}</td>
            <td>{color.hex}</td>
        </tr>
    );
};

const ColorsDisplay = () => {
    return (
        <div>
            <ColorsInfoDisplay />
            <table className="table-auto mx-auto">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Hex</th>
                    </tr>
                </thead>
                <tbody>
                    {colors.map(color => (
                        <ColorRow key={color.hex} color={color} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const ColorsInfoDisplay = () => {
    return <h1 className="text-4xl text-center">Colors on file: {colors.length}</h1>;
};

const App = () => {
    return <ColorsDisplay />;
};

export default App;
