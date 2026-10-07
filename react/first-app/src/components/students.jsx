const students = [
    {
        firstName: "Alex",
        lastName: "Fredrik",
        age: 30,
        score: 17,
    },
    {
        firstName: "Emily",
        lastName: "White",
        age: 25,
        score: 19,
    },
    {
        firstName: "David",
        lastName: "Jonson",
        age: 27,
        score: 15,
    },
];

export default function Students() {
    return (
        <table>
            <thead>
                <tr>
                    <th className="border min-w-40">First Name</th>
                    <th className="border min-w-40">Last Name</th>
                    <th className="border min-w-40">Age</th>
                    <th className="border min-w-40">Score</th>
                </tr>
            </thead>
            <tbody>
                {students.map((student, i) => {
                    return (
                        <tr key={i}>
                            <td className="border">{student.firstName}</td>
                            <td className="border">{student.lastName}</td>
                            <td className="border">{student.age}</td>
                            <td className="border">{student.score}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}
