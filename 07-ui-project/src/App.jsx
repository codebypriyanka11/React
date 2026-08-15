import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {
  const users = [
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfTUVhZu7UbZRrnHDEOgEUXEcstweV7_B20895W6UGkw&s=10',
      intro: '',
      color:'#800080',
      tag: 'Satisfied'
    },
     {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhKvQ0SFdYU2VOzZ5FMbp7P2YRYTy4yoh0rtnCoq392w&s=10',
      intro: '',  
      color:'#FF00FF ',
      tag: 'Satisfied'
    },
     {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTik-cU73cCCn1xwsd-wBdLaJEAnsgbk75gH1E6U3HF7g&s',
      intro: '',
       color:'#9370DB',
      tag: 'Satisfied'
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRstZv7AtQn7IN6CpR7Go7trCo_JqHomt4ugIy3acPePQ&s=10',
      intro: '',
      color:' #4B0082',
      tag: 'Underserved'
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnVeQAFG0uFx8MQ5G_jh3i4hyo7Yaii-admdT4ZEFbYg&s=10',
      intro: '',
      color:'#D8BFD8',
      tag: 'underbanked'
    }
  ]
  return (
    <div className=''>

      <Section1 users={users} />
      <Section2 />
    </div>
  )
}

export default App
