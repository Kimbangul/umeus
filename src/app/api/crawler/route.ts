import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import axios from 'axios';
import cheerio, {Element} from 'cheerio';

export async function GET(req: Request, res: Response) {
  console.log(req);
  // res.status(200).json({data:'test'});

  const getHtml = (url: string) => {
    try {  
      const $ = cheerio.load(url);
  
      const ARTICLE_SELECTOR= $("main section > div:nth-child(2) > div:nth-child(3) > div");
  
  
      // ARTICLE_SELECTOR.map((idx, el) => {     
      //   content[idx] = {
      //     head: $(el).find("img").attr('src'),
      //     date: $(el).find(".FlatPostCard_subInfo__cT3J6 > span:first-of-type").text(),
      //     context: $(el).find("p").text(),
      //     href: $(el).find("a:first-child").attr('href'),
      //     headline: $(el).find("h2").text(),
      //     tags: getTag(el),
      //   };
      // });
      // return content;
    }
    catch(e){
      console.log(e);
    }
  }

  return new Response(JSON.stringify({ status: 200, data: 'test' }), {
    status: 200,
  });
}

