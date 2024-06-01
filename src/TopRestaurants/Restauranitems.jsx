import React from 'react'
import { Link } from 'react-router-dom'

const Restauranitems = ({id,poster}) => {
  return (
    <div>
<Link to={"/" + id}
>
<img alt='logo' src={poster}
        className='h-[90px] w-[150px] rounded-2xl transition ease-in-out hover:-translate-y-2.5 hover:scale-110 duration-300'
        />
</Link>

    </div>

  )
}

export default Restauranitems