import StudentDetail from "../../../components/StudentDetail";

export default function StudentPage({ params }: { params: { id: string } }) {
  return <StudentDetail id={params.id} />;
}
