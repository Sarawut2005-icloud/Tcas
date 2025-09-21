"use client";

import { usePortfolioStore } from "../store/usePortfolioStore";

interface StudentDetailProps {
  params: { id: string };
}

export default function StudentDetail({ params }: StudentDetailProps) {
  const getPortfolioById = usePortfolioStore((state) => state.getPortfolioById);
  const student = getPortfolioById(params.id);

  if (!student) return <p>ไม่พบข้อมูลนักเรียน</p>;

  return (
    <div className="p-4 max-w-xl mx-auto bg-white shadow rounded space-y-2">
      <h1 className="text-2xl font-bold">{student.firstName} {student.lastName}</h1>
      {student.photo && <img src={student.photo} className="w-40 h-40 object-cover rounded" />}
      <p><b>ที่อยู่:</b> {student.address}</p>
      <p><b>เบอร์โทร:</b> {student.phone}</p>
      <p><b>โรงเรียน:</b> {student.school}</p>
      <p><b>GPA:</b> {student.gpa}</p>
      <p><b>ความสามารถพิเศษ:</b> {student.talent}</p>
      <p><b>เหตุผล:</b> {student.reason}</p>
      <p><b>สาขาที่เลือก:</b> {student.major}</p>
      <p><b>มหาวิทยาลัย:</b> {student.university}</p>
      {student.activities?.length > 0 && <p><b>กิจกรรม:</b> {student.activities.join(", ")}</p>}
      {student.awards?.length > 0 && <p><b>รางวัล:</b> {student.awards.join(", ")}</p>}
      {student.works?.length > 0 && <p><b>ผลงาน:</b> {student.works.join(", ")}</p>}
    </div>
  );
}
