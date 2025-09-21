import Image from "next/image";

{student.photo && (
  <Image
    src={student.photo}
    alt={`${student.firstName} ${student.lastName}`}
    width={160}
    height={160}
    className="rounded object-cover"
  />
)}
