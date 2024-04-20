import Link from "next/link";
import { DeleteBtn } from "./DeleteBtn";
import { HiPencilAlt } from "react-icons/hi";

export const UserData = ({ data }) => {
  return (
    <table className="border-collapse w-full">
      <thead>
        <tr>
          <th>Select</th>
          <th>ID</th>
          <th>Name</th>
          <th>Phone Number</th>
          <th>Email</th>
          <th>Hobbies</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((t) => (
          <tr key={t._id}>
            <td>
              <input
                type="checkbox"
                onChange={() => onSelectRow(t._id)}
                className="form-checkbox h-4 w-4 text-blue-600"
              />
            </td>

            <td>{t._id}</td>
            <td>{t.name}</td>
            <td>{t.phoneNumber}</td>
            <td>{t.email}</td>
            <td>{t.hobbies}</td>

            <td>
              <DeleteBtn id={t._id} />
              <Link href={`/updateData/${t._id}`}>
                <HiPencilAlt size={24} />
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
