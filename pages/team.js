import { useAppContext } from "../Context/AppContext";
import Image from "next/image";

export default function Team() {
  const { teamList } = useAppContext();
  return (
    <div>
      {teamList.map((member) => {
        return (
          <div key={member.id}>
            <Image
              src={member.imageSrc}
              alt="me"
              width="200"
              height="200"
              style={{ objectFit: "cover" }}
            />
            <p>{member.fullName}</p>
            <p>{member.age}</p>
            <p>{member.role}</p>
            <p>{member.title}</p>
            <p>{member.level}</p>
            <p>***************</p>
          </div>
        );
      })}
    </div>
  );
}
