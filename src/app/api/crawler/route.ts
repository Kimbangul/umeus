import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export default async function GET (
  req: NextApiRequest,
  res: NextApiResponse)  {
  res.status(200).json('test');

  // return sendEmail(body)
  // .then(
  //   () =>
  //     new Response(JSON.stringify({ status: 200, message: '메일을 성공적으로 전송했습니다.' }), {
  //       status: 200,
  //     })
  // )
  // .catch((error) => {
  //   console.error(error);

  //   return new Response(JSON.stringify({ status: 500, message: '메일 전송에 실패했습니다.' }), {
  //     status: 500,
  //   });
  // });
}

