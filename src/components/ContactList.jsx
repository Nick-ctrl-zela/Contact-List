const dummyContacts = [
    { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
    { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
    { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
  ];

export default function ContactList() {

    return (
        <table>
            <thread>
                <tr>
                    <th colSpan="3"> Contact List</th>
                </tr>
            </thread>
            <tbody>
                <tr>
                    <td> Name </td>
                    <td> E-mail </td>
                    <td> Phone </td>
                </tr>
                {
                    //map data
                }
            </tbody>
        </table>
    );
}