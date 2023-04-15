"use client";
import React from 'react';
import useSWR from 'swr';

const url = 'https://api.quotable.io/random?tags=technology';
 
const fetcher = (url:string)=> fetch(url).then((res)=>res.json());

export default function ClientPage() {
  const {data ,error,isLoading} = useSWR(url, fetcher);
  if(error)return<div>error</div>;
  if(isLoading)return<div>loading</div>;

  return (
  <div>
        <h1>client Page</h1>
        {data.content}
        
        </div>
  );
}
