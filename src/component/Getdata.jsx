import React from 'react'

async function Getdata(url) {
  const responce = fetch(url);
  return (await responce).json();
}

export default Getdata
