"use client";

import { useRouter } from "next/navigation";
import Section from "@/components/layout/section/SectionView";

export default function Custom404() {
  const router = useRouter();

  return (
  <Section>
    <div className="NotFound__img"></div>
    <h1 className="NotFound__title">404 Not Found</h1>
    <p className="NotFound__desc">
      요청하신 페이지를 찾을 수 없습니다.<br />
      존재하지 않는 주소이거나 페이지가 삭제되었을 수 있습니다.
    </p>
    <div className="NotFound__btn-container">
      <button className="NotFound__btn" onClick={()=>router.back()}>이전으로</button> 
    </div>
  </Section>
  )
}