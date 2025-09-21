"use client";

import { useForm } from "react-hook-form";
import { usePortfolioStore } from "../store/usePortfolioStore";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

export default function PortfolioForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const addPortfolio = usePortfolioStore((state) => state.addPortfolio);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);

  const onSubmit = (data: any) => {
    const newPortfolio = {
      id: uuidv4(),
      ...data,
      gpa: parseFloat(data.gpa),
      photo: photoPreview || undefined,
      activities: data.activities?.split(",").map((a: string) => a.trim()),
      awards: data.awards?.split(",").map((a: string) => a.trim()),
      works: data.works?.split(",").map((a: string) => a.trim()),
    };
    addPortfolio(newPortfolio);
    reset();
    setPhotoPreview(null);
    alert("บันทึกข้อมูลเรียบร้อย!");
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPhotoPreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-xl mx-auto p-4 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-4">แบบฟอร์ม Portfolio</h1>

      <input placeholder="ชื่อ" {...register("firstName", { required: true })} className="input" />
      {errors.firstName && <span className="text-red-500">กรุณากรอกชื่อ</span>}

      <input placeholder="นามสกุล" {...register("lastName", { required: true })} className="input" />
      <input placeholder="ที่อยู่" {...register("address", { required: true })} className="input" />
      <input placeholder="เบอร์โทรศัพท์" {...register("phone", { required: true })} className="input" />
      <input placeholder="โรงเรียน" {...register("school", { required: true })} className="input" />
      <input placeholder="GPA" type="number" step="0.01" {...register("gpa", { required: true, min: 0, max: 4 })} className="input" />
      <input placeholder="ความสามารถพิเศษ" {...register("talent")} className="input" />
      <textarea placeholder="เหตุผลในการสมัคร" {...register("reason")} className="input"></textarea>
      <input placeholder="สาขาที่เลือก" {...register("major", { required: true })} className="input" />
      <input placeholder="มหาวิทยาลัย" {...register("university", { required: true })} className="input" />

      <label className="block">รูปนักเรียน:</label>
      <input type="file" accept="image/*" onChange={handlePhotoChange} className="input" />
      {photoPreview && <img src={photoPreview} className="w-32 h-32 object-cover rounded mt-2" />}

      <input placeholder="กิจกรรม (คั่นด้วย , )" {...register("activities")} className="input" />
      <input placeholder="รางวัล (คั่นด้วย , )" {...register("awards")} className="input" />
      <input placeholder="ผลงาน (คั่นด้วย , )" {...register("works")} className="input" />

      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">บันทึก</button>
    </form>
  );
}
