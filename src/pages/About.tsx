
import { CardAbout } from "../components/pages/about/CardAbout"

const dataFake=[
    {
        title:          'Nosotros',
        description:    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum magnam fugiat voluptatum assumenda obcaecati, deserunt aut culpa laborum fugit officiis quis veritatis excepturi facilis vitae eligendi natus labore tempore? Obcaecati'
    },
    {
        title:          'Mision',
        description:    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum magnam fugiat voluptatum assumenda obcaecati, deserunt aut culpa laborum fugit officiis quis veritatis excepturi facilis vitae eligendi natus labore tempore? Obcaecati'
    },
    {
        title:          'Vision',
        description:    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum magnam fugiat voluptatum assumenda obcaecati, deserunt aut culpa laborum fugit officiis quis veritatis excepturi facilis vitae eligendi natus labore tempore? Obcaecati'
    }
]
export const About = () => {
   

  return (
    <div className=" h-screen min-w-[100vw] py-[320px] flex items-center flex-col overflow-x-hidden" >
        {
            dataFake.map( item => (
                <CardAbout key={item.title} title={ item.title } description={ item.description}/>
            ))
        }

    </div>
  )
}
