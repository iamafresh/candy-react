import React from 'react'
import { Input } from 'antd'

const Search = () => {
  return (
    <div>
      <Input.Search
        placeholder='input search text'
        onSearch={value => console.log(value)}
        style={{ width: 200 }}
      />
      <br /><br />
      <Input.Search
        placeholder='input search text'
        onSearch={value => console.log(value)}
        enterButton
      />
      <br /><br />
      <Input.Search placeholder='input search text' enterButton='Search' size='large' />
    </div>
   )
}

export default Search
