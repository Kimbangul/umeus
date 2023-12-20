'use client'
import axios from 'axios';
import InstaView from "@/components/main/InstaView";
import useApiCall from "@/hooks/useApiCall";
import { useEffect } from 'react';

const InstaContainer = () => {

  const test = useApiCall<any>(() =>
    axios.get(`/api/crawler`)
  );

  const data = [
    
  ];

  useEffect(()=>{
    console.log(test.data);
  }),[test.data];

  return <InstaView />;
}

export default InstaContainer;