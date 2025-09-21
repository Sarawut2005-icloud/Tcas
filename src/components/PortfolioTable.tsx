"use client";

import Link from "next/link";
import { usePortfolioStore } from "../store/usePortfolioStore";
import { useState } from "react";

export default function PortfolioTable() {
  const portfolios = usePortfolioStore((state) => state.portfolios);
  const [sortAsc, setSortAsc] = useState(true);

  const sorted = [...portfolios].sort((a, b) =>
    sortAsc ? a.gpa - b.gpa : b.gpa - a.gpa
  );

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">รายชื่อนักเรียน</h1>
      <button onClick={() => setSortAsc(!sortAsc)} className="px-3 py-1 mb-3 bg-gray-200 rounded">
        เรียงตาม GPA {sortAsc ? "↑" : "↓"}
      </button>

      <table className="w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">ชื่อ</th>
            <th className="p-2 border">นามสกุล</th>
            <th className="p-2 border">GPA</th>
            <th className="p-2 border">ดูรายละเอียด</th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((p) => (
            <tr key={p.id}>
              <td className="p-2 border">{p.firstName}</td>
              <td className="p-2 border">{p.lastName}</td>
              <td className="p-2 border">{p.gpa}</td>
              <td className="p-2 border">
                <Link href={`/student/${p.id}`} className="text-blue-600 underline">
                  ดูข้อมูล
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
