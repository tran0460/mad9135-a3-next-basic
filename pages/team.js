import { useAppContext } from "../Context/AppContext";

export default function Team() {
  const { teamList } = useAppContext();
  return (
    <div>
      {teamList.map((member) => (
        <div key={member.id}>
          <p>{member.fullName}</p>
          <p>{member.age}</p>
          <p>{member.role}</p>
          <p>{member.title}</p>
          <p>{member.level}</p>
          <p>***************</p>
        </div>
      ))}
    </div>
  );
}
