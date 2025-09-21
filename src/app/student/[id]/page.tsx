import StudentDetail from "../../../components/StudentDetail";

interface Params {
  params: { id: string };
}

export default function StudentPage({ params }: Params) {
  return <StudentDetail id={params.id} />;
}
