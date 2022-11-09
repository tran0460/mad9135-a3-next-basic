import { useAppContext } from "../Context/AppContext";
import Image from "next/image";
import ActionAreaCard from "../components/ActionAreaCard";
import { Container } from "@mui/material";

export default function Team() {
  const { teamList } = useAppContext();
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        flexDirection: { sx: "column", md: "row" },
        flexWrap: "wrap",
        alignItems: "stretch",
        justifyContent: "center",
        gap: "2rem",
        padding: "2rem",
      }}>
      {teamList.map((member) => {
        return (
          <div key={member.id}>
            <ActionAreaCard data={member} />
          </div>
        );
      })}
    </Container>
  );
}
