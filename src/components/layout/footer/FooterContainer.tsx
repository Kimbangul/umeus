import FooterView from "@/components/layout/footer/FooterView"
import { FooterInfoType, FooterMenuType } from "@/components/layout/footer/type";

const FooterContainer = () => {
  const menu : FooterMenuType[]= [
    {title: '이용약관', link:'#'},
    {title: '개인정보처리방침', link:'#'}
  ]
  const about : FooterInfoType[] = [
    {title: '상호명', desc: '유게더'},
    {title: '대표', desc: '정명호'},
    {title: '주소', desc: '서울특별시 금천구 가산디지털2로 166 에이스K1타워 414호'},
    {title: '사업자등록번호', desc: '334-31-01212'},
    {title: '통신판매신고번호', desc: '2023-서울금천-1997'},
    {title: '이메일', desc: 'ol3760ak@naver.com'},
  ]

  const cs: FooterInfoType[] = [
    {title: '업무시간', desc: '월요일 - 토요일 (10:00 - 18:00)'},
    {title: '휴무', desc: '요일,일요일,공휴일 쉬는날'},
  ]

  const bank : FooterInfoType[] = [
    {title: '입금계좌', desc: '우리은행 / 1002-561-261969'},
    {title: '예금주', desc: '정명호'},
  ]

  const sns: FooterMenuType[] = [
    {title: 'Instagram', link:'https://www.instagram.com/_umeus_/'},
    {title: 'Kakao store', link:'https://store.kakao.com/umsshop'},
    {title: 'Kakaotalk chanel', link:'https://pf.kakao.com/_TlbVG'}
  ]

  return <FooterView menu={menu} about={about} cs={cs} bank={bank} sns={sns} copy='Copyright © 해피윰스데이.All rights reserved.'/>
}

export default FooterContainer;